import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <div className="bg-gray-50">
      
      <Outlet/>
    </div>
  );
};

export default MainLayout;