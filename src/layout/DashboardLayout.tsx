import React from "react";

import { Layout, Menu } from "antd";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateFacility from "../pages/Admin/CreateFacility";
import { sidebarItemsGenerator } from "../utils/sidebarItemsGenerator";
import { Outlet } from "react-router-dom";
import DashboardAllFacilities from "../pages/Admin/DashboardAllFacilities";
import { useAppSelector } from "../redux/hooks";
import ViewAllBooking from "../pages/Admin/ViewAllBookings";
import AddAdmin from "../pages/Admin/AddAdmin";

const { Content, Sider } = Layout;

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

const newItems = sidebarItemsGenerator(adminItems, "admin");
console.log(newItems);

const App: React.FC = () => {
  const currentUser = useAppSelector((state) => state.auth.user);

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        style={{backgroundColor:'white'}}
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="bg-white pt-10  min-h-screen">
          <p className="">{currentUser && currentUser.name}</p>
          <Menu mode="inline" items={newItems} />
        </div>
      </Sider>
      <Layout>
        <Content>
          <div
            className="min-h-screen"
            style={{
              padding: 24,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
