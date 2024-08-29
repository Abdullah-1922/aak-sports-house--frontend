import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import HomePage from "../pages/HomePage";
import DashboardLayout, { adminItems } from "../layout/DashboardLayout";
import { routeGenerator } from "../utils/routeGenerator";
import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: routeGenerator(adminItems),
  },
  {
    path:'/login',
    element: <LoginPage/>
  }
]);
