import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import HomePage from "../pages/HomePage";
import DashboardLayout from "../layout/DashboardLayout";
import { routeGenerator } from "../utils/routeGenerator";
import LoginPage from "../pages/LoginPage";
import Facility from "../pages/Facility";
import FacilityDetails from "../pages/FacilityDetails";

import About from "../pages/About";
import ContactUs from "../pages/ContactUs";

import ProtectedRoute from "../layout/ProtectedRoute";
import BookingPageWithPayment from "../pages/BookingPageWithPayment";
import SignUp from "../pages/SignUp";
import { adminItems } from "./AdminRoutes";
import { userItems } from "./UserRoutes";

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
        element: (
          <ProtectedRoute>
            <BookingPageWithPayment />
          </ProtectedRoute>
        ),
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
    path: "/user",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(userItems),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
