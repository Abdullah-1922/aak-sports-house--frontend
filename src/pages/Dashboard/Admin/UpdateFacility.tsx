/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal } from "antd";

import Swal from "sweetalert2";
import { useUpdateFacilityMutation } from "../../../redux/features/facility/facilityApi";
import FormComponent from "../../../components/Common/form/FormComponent";
import InputComponent from "../../../components/Common/form/InputComponent";

const UpdateFacility = ({
  isModalOpen,
  handleOk,
  handleCancel,
  facilityData,
}: any) => {
  const [updateFacility, { error, isLoading }] = useUpdateFacilityMutation();

  const onSubmit = async (fromData: any) => {
    const id = facilityData.key;
    const data = {
      ...fromData,
      pricePerHour: Number(fromData.pricePerHour),
    };

    console.log(data);
    const res = await updateFacility({ id, data });
    console.log(res);

    if (res.data.success === true) {
      handleOk();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Facility updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Facility create failed",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <Modal
        width={"80%"}
        open={isModalOpen}
        onOk={handleOk}
        footer={[
          <Button
            className="w-full bg-black text-white font-bold "
            key="back"
            onClick={handleCancel}
          >
            Return
          </Button>,
        ]}
        onCancel={handleCancel}
      >
        <div>
          <p className="text-center text-3xl text-[#4d6429] md:text-4xl lg:text-5xl font-bold ">
            Update Facility
          </p>
          <div className=" ">
            <FormComponent onSubmit={onSubmit}>
              <InputComponent
                defaultValue={facilityData?.name}
                name="name"
                type="text"
                label="Name"
              />
              <InputComponent
                defaultValue={facilityData?.description}
                name="description"
                type="text"
                label="description"
              />
              <InputComponent
                defaultValue={facilityData?.pricePerHour}
                name="pricePerHour"
                type="number"
                label="pricePerHour"
              />

              <InputComponent
                defaultValue={facilityData?.location}
                name="location"
                type="text"
                label="location"
              />
              <InputComponent
                defaultValue={facilityData?.image}
                name="image"
                type="text"
                label="image"
              />
              <button
                disabled={isLoading}
                type="submit"
                className="text-xl  bg-black text-white font-bold px-5 w-full py-2 rounded-2xl "
              >
                {isLoading ? "Wait..." : "Submit"}
              </button>
            </FormComponent>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateFacility;
