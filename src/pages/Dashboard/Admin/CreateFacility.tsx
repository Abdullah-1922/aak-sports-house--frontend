/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";
import FormComponent from "../../../components/Common/form/FormComponent";
import InputComponent from "../../../components/Common/form/InputComponent";
import { useCreateFacilityMutation } from "../../../redux/features/facility/facilityApi";

const CreateFacility = () => {
  const [createFacility, { isLoading }] = useCreateFacilityMutation();
  const onSubmit = async (data: any) => {
    try {
      const result = await createFacility({
        ...data,
        pricePerHour: Number(data.pricePerHour),
      });
      console.log(result);

      if (result.data.success == true) {
        toast.success("facility created successfully", {
          style: { fontSize: "20px" },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full ">
      <div className="w-full md:w-3/4 rounded-3xl mt-36 bg-blue-100 p-3 md:p-10 py-20 mx-auto">
        <p className="text-[3vw] font-bold text-center">Create Facility</p>
        <FormComponent onSubmit={onSubmit}>
          <InputComponent name="name" type="text" label="Name" />
          <InputComponent name="description" type="text" label="description" />
          <InputComponent
            name="pricePerHour"
            type="number"
            label="pricePerHour"
          />

          <InputComponent name="location" type="text" label="location" />
          <InputComponent name="image" type="text" label="image" />
          <button
            disabled={isLoading}
            type="submit"
            className="text-xl  bg-black text-white font-bold px-5 py-2 rounded-2xl "
          >
            {isLoading ? "Wait..." : "Submit"}
          </button>
        </FormComponent>
      </div>
    </div>
  );
};

export default CreateFacility;
