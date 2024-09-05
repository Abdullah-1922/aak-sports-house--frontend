import UserDashboard from "../pages/Dashboard/User/UserDashboard";
import MyBookings from "../pages/Dashboard/User/MyBookings";

export const userItems = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "My Bookings",
    path: "my-bookings",
    element: <MyBookings />,
  },
];
