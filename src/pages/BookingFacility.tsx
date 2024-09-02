import { useParams } from "react-router-dom";
import {
  useCheckAvailabilityMutation,
  useGetSingleFacilityQuery,
} from "../redux/features/facility/facilityApi";
import { FormEvent, useState } from "react";
import { Button } from "antd";
import { useCreateBookingMutation } from "../redux/features/facility/bookingApi";

type TSlotTime = {
  startTime: string;
  endTime: string;
};

const BookingFacility = () => {
  const date = new Date();
  const formattedDate = date.toISOString().split("T")[0];
  const params = useParams();
  const { data, isLoading } = useGetSingleFacilityQuery(params.id);

  const [selectedDate, setSelectedDate] = useState(formattedDate);
  const [freeSlotData, setFreeSlotData] = useState<TSlotTime[]>([]);

  const [freeSlot] = useCheckAvailabilityMutation();
  // Handling proceeding to booking
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      facility: data.data._id,
      date: selectedDate,
      startTime,
      endTime,
    };
  };
  const convertTo12HourFormat = (time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    const AMPM = hours >= 12 ? "PM" : "AM";
    const adjustedHours = hours % 12 || 12;
    return `${adjustedHours}:${minutes.toString().padStart(2, "0")} ${AMPM}`;
  };

  const [createBooking] = useCreateBookingMutation();

  console.log(startTime, endTime);

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
    <div className="my-28 flex justify-center items-center p-10 md:w-[70%]  lg:w-[55%] mx-auto min-h-[40vh] border-2 bg-gray-200 border-black ">
      <div>
        <p className="font-bold text-3xl">{facilityData.name}</p>
        <p className="font-bold pt-2 text-xl">
          Pre Hour: ${facilityData.pricePerHour}
        </p>
        <div>
          <p>select a date</p>
          <div className="flex  flex-col md:flex-row  gap-5 md:items-center">
            <input
              type="date"
              className="w-[180px] border-button border-2  p-1 rounded-3xl font-bold"
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
              <form>
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
    </div>
  );
};

export default BookingFacility;
