/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Table } from "antd";
import {
  useCancelBookingMutation,
  useGetBookingsByUserQuery,
} from "../../../redux/features/Booking/bookingApi";
import toast from "react-hot-toast";

const MyBookings = () => {
  const {
    data: bookingData,
    isLoading,
    isFetching,
  } = useGetBookingsByUserQuery(undefined);

  const [cancelBooking] = useCancelBookingMutation();
  const handleCancel = async (id: string) => {
    try {
      const res = await cancelBooking(id);
      console.log(res);
      if (res.data.data.success == true) {
        toast.success("Booking canceled successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const tableData = bookingData?.data?.map(
    ({
      _id,
      date,
      startTime,
      endTime,
      payableAmount,
      isBooked,
      facility,
      user,
    }: any) => ({
      key: _id,
      date,
      startTime,
    endTime,
      user,
      payableAmount,
      isBooked,
      location: facility?.location,
      name: facility?.name,
    })
  );
  console.log(bookingData?.data);

  // Defining columns
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "startTime",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "endTime",
      key: "endTime",
      dataIndex: "endTime",
    },
    {
      title: "Payable Amount ($)",
      key: "payableAmount",
      dataIndex: "payableAmount",
    },
    {
      title: "isBooked",
      key: "isBooked",
      dataIndex: "isBooked",
    },
    {
      title: "Action",

      render: (_: any, data: any) => {
        return (
          <Button
            disabled={data.isBooked === "canceled"}
            onClick={() => handleCancel(data.key)}
            className="bg-red-600 font-bold text-lg text-white"
          >
            cancel
          </Button>
        );
      },
    },
  ];

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p className="text-4xl text-center pb-5 font-bold">All Bookings</p>
      <Table
        size="small"
        className="overflow-x-auto min-h-screen bg-[#F5F5F5] min-w-[1000px]"
        columns={columns}
        loading={isFetching}
        dataSource={tableData}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default MyBookings;
