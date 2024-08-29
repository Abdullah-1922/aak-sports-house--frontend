import toast from "react-hot-toast";
import FormComponent from "../components/Common/form/FormComponent";
import InputComponent from "../components/Common/form/InputComponent";
import { useLoginMutation } from "../redux/features/auth/authApi";
import {  useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [login] = useLoginMutation();

  const navigate = useNavigate()
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const result = await login(userInfo);
      console.log(result);
      if (result.data.success == true) {
        toast.success("Login Successfully");
         navigate('/')
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" text-black min-h-screen flex justify-center items-center">
      <div className="w-2/3 mx-auto bg-gray-200 p-20 rounded-3xl">
        <FormComponent onSubmit={onSubmit}>
          <InputComponent name="email" type="email" label="Email" />
          <InputComponent name="password" type="text" label="Password" />
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

export default LoginPage;
