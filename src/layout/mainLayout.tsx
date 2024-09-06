import { Outlet } from "react-router-dom";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import ScrollToTopButton from "../utils/ScrollToTopButton";
import ScrollToTop from "../utils/ScrollToTop";


const MainLayout = () => {

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      <ScrollToTop/>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
};

export default MainLayout;
