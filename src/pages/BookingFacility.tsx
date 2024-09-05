/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import {
  useCheckAvailabilityMutation,
  useGetSingleFacilityQuery,
} from "../redux/features/facility/facilityApi";
import { FormEvent, useState } from "react";
import { Button, Modal } from "antd";
import { useCreateBookingMutation } from "../redux/features/Booking/bookingApi";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useAppSelector } from "../redux/hooks";
import toast from "react-hot-toast";

type TSlotTime = {
  startTime: string;
  endTime: string;
};

const BookingFacility = () => {
  const stripe = useStripe();
  const elements = useElements();
  const date = new Date();
  const formattedDate = date.toISOString().split("T")[0];
  const params = useParams();
  const { data, isLoading } = useGetSingleFacilityQuery(params.id);
  const user = useAppSelector((state) => state.auth.user);
  const [selectedDate, setSelectedDate] = useState(formattedDate);
  const [freeSlotData, setFreeSlotData] = useState<TSlotTime[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [createBooking] = useCreateBookingMutation();
  const [payload, setPayload] = useState<any>(null);
  const [finalData, setFinalData] = useState<any>(null);

  const navigate = useNavigate();

  const [freeSlot] = useCheckAvailabilityMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    if (!user) {
      return navigate("/login");
    }
    if (user.role === "admin") {
      return toast.error("admin can not book facility");
    }
    if (isLoading) {
      return <>Loading</>;
    }
    const realStartTime = new Date(`1970-01-01T${startTime}:00Z`).getTime();
    const realEndTime = new Date(`1970-01-01T${endTime}:00Z`).getTime();
    if (realStartTime > realEndTime) {
      return toast.error("Select valid time.");
    }
    const durationInHours =
      Number(realEndTime - realStartTime) / (1000 * 60 * 60);

    const payableAmount = Math.floor(
      durationInHours * Number(data.data.pricePerHour)
    );

    const newPayload = {
      facility: data.data._id,
      date: selectedDate,
      startTime,
      endTime,
    };
    setFinalData(newPayload)
    setPayload({ amount: payableAmount * 100, ...newPayload });



    setShowModal(true);
  };

  const handlePayment = async () => {
    if (!stripe || !elements || !payload) return;
    const { amount, newPayload } = payload;

    try {
      const paymentIntentResponse = await fetch(
        "http://localhost:3000/api/create-payment-intent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount,
            currency: "usd",
          }),
        }
      );

      const { clientSecret } = await paymentIntentResponse.json();

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement)!,
            billing_details: {
              name: user?.name,
              email: user?.email,
              phone: user?.phone,
            },
          },
        }
      );

      if (error) {
        console.error("Payment failed:", error.message);
        toast.error("Payment failed. Please try again.");
        setShowModal(false);
        return;
      }

      if (paymentIntent?.status === "succeeded") {
      
        const bookingResponse = await createBooking(finalData);
       
        if(bookingResponse?.data?.success ===true){
         toast.success("Booking successful"); 
         navigate('/user/my-bookings')
        }else{
          toast.error(bookingResponse.error.data.message)
        }
     
        setShowModal(false);
      }
    } catch (error) {
      console.error("Booking failed", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const convertTo12HourFormat = (time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    const AMPM = hours >= 12 ? "PM" : "AM";
    const adjustedHours = hours % 12 || 12;
    return `${adjustedHours}:${minutes.toString().padStart(2, "0")} ${AMPM}`;
  };

  if (isLoading) {
    return <div className="text-5xl text-center font-bold">Loading</div>;
  }

  const facilityData = data.data;

  const handleCheckSlot = async (id) => {
    const result = await freeSlot({ id: params.id, date: selectedDate });
    console.log(result.data.data);

    setFreeSlotData(result?.data?.data);
  };

  return (
    <div className="my-28 flex justify-center items-center p-10 md:w-[70%] lg:w-[55%] mx-auto min-h-[40vh] border-2 bg-gray-200 border-black ">
      <div>
        <p className="font-bold text-3xl">{facilityData.name}</p>
        <p className="font-bold pt-2 text-xl">
          Per Hour: ${facilityData.pricePerHour}
        </p>
        <div>
          <p>Select a date</p>
          <div className="flex flex-col md:flex-row gap-5 md:items-center">
            <input
              type="date"
              className="w-[180px] border-button border-2 p-1 rounded-3xl font-bold"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            <Button
              onClick={() => handleCheckSlot(facilityData._id)}
              size="large"
              className="bg-black uppercase text-white font-bold"
            >
              Check Available Slot
            </Button>
          </div>
          {freeSlotData.length > 0 && (
            <div>
              <p className="text- font-bold mt-4 text-xl">
                Available time slots :
              </p>

              <div className="flex gap-3 flex-wrap">
                {freeSlotData?.map((item, index) => (
                  <div
                    className="bg-white font-bold w-fit p-1 mt-1 rounded-xl"
                    key={index}
                  >
                    {convertTo12HourFormat(item.startTime)} -{" "}
                    {convertTo12HourFormat(item.endTime)}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mt-10 flex flex-col md:flex-row gap-10">
                  <div>
                    <p className="mb-2 font-bold text-lg text-gray-700">
                      Select start time of your slot:
                    </p>

                    <input
                      type="time"
                      className="w-[200px] border-button border-2 outline-none p-3 rounded-3xl font-bold"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                    />
                  </div>

                  <div>
                    <p className="mb-2 font-bold text-lg text-gray-700">
                      Select end time of your slot:
                    </p>

                    <input
                      type="time"
                      className="w-[200px] border-button border-2 outline-none p-3 rounded-3xl font-bold"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                    />
                  </div>
                </div>

                {startTime && endTime && (
                  <Button
                    onClick={handlePayment}
                    htmlType="submit"
                    size="large"
                    className="bg-black w-full uppercase text-white font-bold mt-4"
                  >
                    Book this slot
                  </Button>
                )}
              </form>
            </div>
          )}
        </div>
      </div>

      <Modal
        title="Payment"
        visible={showModal}
        onOk={handlePayment}
        onCancel={() => setShowModal(false)}
        okText="Pay"
        cancelText="Cancel"
      >
        <CardElement />
      </Modal>
    </div>
  );
};

export default BookingFacility;
