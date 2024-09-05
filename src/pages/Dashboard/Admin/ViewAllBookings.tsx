/* eslint-disable @typescript-eslint/no-explicit-any */

import { Table } from "antd";
import { useGetAllBookingsQuery } from "../../../redux/features/Booking/bookingApi";

const ViewAllBooking = () => {
  const {
    data: bookingData,
    isLoading,
    isFetching,
  } = useGetAllBookingsQuery(undefined);

  console.log(bookingData);
  console.log({ isLoading, isFetching });

  const tableData = bookingData?.data?.map(
    ({
      _id,
      date,
      startTime,
      endTime,
      payableAmount,
      isBooked,
      name,
      location,
      user,
      pricePerHour,
      description,
    }: any) => ({
      key: _id,
      date,
      startTime,
      endTime,
      user,
      payableAmount,
      isBooked,
      name,
      location,
      pricePerHour,
      description,
    })
  );

  // Defining columns
  const columns = [
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
      title: "Payable Amount",
      key: "payableAmount",
      dataIndex: "payableAmount",
    },
    {
      title: "isBooked",
      key: "isBooked",
      dataIndex: "isBooked",
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

export default ViewAllBooking;
