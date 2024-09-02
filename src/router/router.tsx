import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import HomePage from "../pages/HomePage";
import DashboardLayout, { adminItems } from "../layout/DashboardLayout";
import { routeGenerator } from "../utils/routeGenerator";
import LoginPage from "../pages/LoginPage";
import Facility from "../pages/Facility";
import FacilityDetails from "../pages/FacilityDetails";
import BookingFacility from "../pages/BookingFacility";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import SignUp from "../pages/Signup";
import ProtectedRoute from "../layout/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/facility",
        element: <Facility />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/facility/:id",
        element: <FacilityDetails />,
      },
      {
        path: "/book-facility/:id",
        element: <BookingFacility />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(adminItems),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
