/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  useDeleteFacilityMutation,
  useGetFacilitiesQuery,
} from "../../../redux/features/facility/facilityApi";
import { TProps } from "../../../types";
import { Button, Table } from "antd";
import Swal from "sweetalert2";
import UpdateFacility from "./UpdateFacility";

const DashboardAllFacilities = () => {
  const [params, setParams] = useState<TProps[]>([]);

  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetFacilitiesQuery(params);

  const [deleteFacility] = useDeleteFacilityMutation();

  const handleDelete = async (id: string) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await deleteFacility(id);

          if (res.data.success == true) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        } catch (err) {
          console.log(err);
        }
      }
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleUpdate = (productData: any) => {
    setModalData(productData);
    showModal();
  };

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
      render: (_, record: any) => {
        return (
          <div>
            <Button onClick={() => handleUpdate(record)}>Update</Button>
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "x",
      render: (_, record: any) => {
        return (
          <div>
            <Button
              onClick={() => handleDelete(record.key)}
              className="bg-red-500 text-white font-bold"
            >
              Delete
            </Button>
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
    <div>
      <Table
        size="small"
        className="overflow-x-auto min-h-screen bg-[#F5F5F5] min-w-[1000px]"
        columns={columns}
        loading={isFetching}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
      <UpdateFacility
        facilityData={modalData}
        handleCancel={handleCancel}
        handleOk={handleOk}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};

export default DashboardAllFacilities;
