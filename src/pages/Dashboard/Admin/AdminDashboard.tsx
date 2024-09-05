import { Button } from "antd";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import toast from "react-hot-toast";

const AdminDashboard = () => {
  const data = useAppSelector((state) => state.auth.user);

  return (
    <div className="flex  flex-col">
      <div className=" relative mx-auto  bg-slate-400 rounded-3xl">
        <section className=" bg-gradient-to-r from-violet-50 to-orange-50">
          <img
            src="https://plus.unsplash.com/premium_photo-1683121696175-d05600fefb85?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute -z-10 inline-block h-full w-full object-cover opacity-75"
          />

          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
            <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
              <div className="max-w-[720px]">
                <h1 className="mb-3 pb-4 text-4xl font-bold text-green-700 md:text-6xl">
                  hey, {data.name}
                </h1>
                <p className="mb-6 max-w-[528px] font-bold text-xl md:mb-10">
                  Welcome back
                </p>
                <div className="flex items-center">
                  <button
                    onClick={() => {
                      return toast.success("All data updated");
                    }}
                    className="] mr-5 inline-block rounded-full bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white md:mr-6 lg:mr-8"
                  >
                    Update all data
                  </button>
                </div>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1621106036911-964146b9f97c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VsY29tZSUyMGJhY2t8ZW58MHx8MHx8fDA%3D"
                  className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex w-full justify-center">
        <Link to={"/"}>
          <Button size="large" className="uppercase">
            back to Home page
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
