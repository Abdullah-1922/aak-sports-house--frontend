import { useState } from "react";
import { useGetFacilitiesQuery } from "../../redux/features/facility/facilityApi";
import { TProps } from "../../types";
import { Button, Table } from "antd";

const DashboardAllFacilities = () => {
  const [params, setParams] = useState<TProps[]>([]);

  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetFacilitiesQuery(params);
  console.log(semesterData);
  console.log({ isLoading, isFetching });
  const tableData = semesterData?.data?.map(
    ({ _id, name, location, pricePerHour, image, description }) => ({
      key: _id,
      name,
      location,
      pricePerHour,
      image,
      description,
    })
  );

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image: string) => (
        <img
          src={image}
          alt="facility"
          style={{
            width: 100,
            height: 100,
            borderRadius: "20px",
            objectFit: "cover",
          }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Location",
      key: "Location",
      dataIndex: "location",
    },
    {
      title: "PricePerHour",
      key: "pricePerHour",
      dataIndex: "pricePerHour",
    },
    {
      title: "description",
      key: "description",
      dataIndex: "description",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "x",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "x",
      render: () => {
        return (
          <div>
            <Button className="bg-red-500 text-white font-bold">Delete</Button>
          </div>
        );
      },
    },
  ];

  const onChange: ["onChange"] = (pagination, filters, sorter, extra) => {
    console.log({ filters, extra });
    if (extra.action === "filter") {
      const queryParams: TProps[] = [];
      if (filters.name) {
        filters?.name?.forEach((item) => {
          queryParams.push({ name: "name", value: item as string });
        });
      }
      if (filters.year) {
        filters?.year?.forEach((item) => {
          queryParams.push({ name: "year", value: item as string });
        });
      }

      setParams(queryParams);
    }
  };

  if (isLoading) {
    return <p>Loading..</p>;
  }

  return (
    <Table
      size="small"
      className="overflow-x-auto min-h-screen bg-[#F5F5F5] min-w-[900px]"
      columns={columns}
      loading={isFetching}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default DashboardAllFacilities;
