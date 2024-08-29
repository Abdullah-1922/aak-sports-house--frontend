import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <div className="bg-zinc-900">
      
      <Outlet/>
    </div>
  );
};

export default MainLayout;