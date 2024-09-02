/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../../components/Common/form/InputComponent";
import FormComponent from "../../components/Common/form/FormComponent";

import { useAddAdminMutation } from "../../redux/features/auth/authApi";


const AddAdmin = () => {
  const [addAdmin] = useAddAdminMutation();

  
  const onSubmit = async (data: any) => {
    try {
      const result = await addAdmin(data);

      if (result?.data?.success == true) {
        toast.success("Admin Added Successfully");
       
        
      } else {
        toast.error(result?.error?.data?.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" text-black lg:p-20 min-h-screen flex justify-center items-center">
      <div className="w-full  md:w-2/3 mx-auto bg-gray-200 p-5 md:p-10  rounded-3xl">
        <p className="text-[3vw] text-center font-bold pb-10 ">
          Create new Admin
        </p>
        <FormComponent onSubmit={onSubmit}>
          <InputComponent name="name" type="text" label="Name" />
          <InputComponent name="email" type="email" label="Email" />
          <InputComponent name="password" type="password" label="Password" />
          <InputComponent name="phone" type="number" label="Phone No" />
          <InputComponent name="address" type="text" label="Address" />
          <InputComponent name="image" type="text" label="Image" />
          <button
            type="submit"
            className="text-xl  bg-black text-white font-bold px-5 py-2 rounded-2xl "
          >
            Submit
          </button>
        </FormComponent>
     
      </div>
    </div>
  );
};

export default AddAdmin;
