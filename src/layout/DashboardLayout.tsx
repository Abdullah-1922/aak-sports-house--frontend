import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateFacility from "../pages/Admin/CreateFacility";
import { sidebarItemsGenerator } from "../utils/sidebarItemsGenerator";
import { Outlet } from "react-router-dom";
import DashboardAllFacilities from "../pages/Admin/DashboardAllFacilities";


const { Content,  Sider } = Layout;



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
        element: <DashboardAllFacilities/>,
      },
    ],
  },
];

const newItems = sidebarItemsGenerator(adminItems, "admin");
console.log(newItems);

const App: React.FC = () => {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="bg-white pt-20 text-white h-screen">
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
        {/* <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default App;
