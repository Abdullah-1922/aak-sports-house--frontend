import { Outlet } from "react-router-dom";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";



const MainLayout = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      <Navbar/>
      <Outlet/>
    <Footer/>
      
    </div>
  );
};

export default MainLayout;