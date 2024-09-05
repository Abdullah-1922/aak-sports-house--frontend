import AddAdmin from "../pages/Dashboard/Admin/AddAdmin";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import CreateFacility from "../pages/Dashboard/Admin/CreateFacility";
import DashboardAllFacilities from "../pages/Dashboard/Admin/DashboardAllFacilities";
import ViewAllBooking from "../pages/Dashboard/Admin/ViewAllBookings";

export const adminItems = [
    {
      name: "Dashboard",
      path: "dashboard",
      element: <AdminDashboard />,
    },
    {
      name: "Facility Management",
      children: [
        {
          name: "Create Facility",
          path: "create-facility",
          element: <CreateFacility />,
        },
        {
          name: "Facilities",
          path: "facilities",
          element: <DashboardAllFacilities />,
        },
      ],
    },
    {
      name: "Booking Management",
      children: [
        {
          name: "All Booking",
          path: "view-all-booking",
          element: <ViewAllBooking />,
        },
      ],
    },
    {
      name: "Add Admin",
      path: "add-admin",
      element: <AddAdmin />,
    },
  ];