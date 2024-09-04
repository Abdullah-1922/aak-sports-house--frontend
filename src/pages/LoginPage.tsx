/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";
import FormComponent from "../components/Common/form/FormComponent";
import InputComponent from "../components/Common/form/InputComponent";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";

const LoginPage = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const result = await login(userInfo);
      console.log(result);
      if (result?.data?.success == true) {
        toast.success("Login Successfully");
        console.log(result.data);
        dispatch(setUser({ user: result.data.data, token: result.data.token }));
        navigate("/");
      } else {
        toast.error(result?.error?.data?.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" text-black min-h-screen flex justify-center items-center">
      <div className="w-full  md:w-2/3 mx-auto bg-gray-200 p-5 md:p-10 lg:p-20 rounded-3xl">
        <p className="text-[4vw] text-center font-bold pb-10 ">
          Login To access booking
        </p>
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
        <div className="pt-4 text-center">
          <p>
            Don't have account{" "}
            <Link to={"/signup"}>
              <span className="text-blue-500 font-bold cursor-pointer">
                Sign up
              </span>
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
