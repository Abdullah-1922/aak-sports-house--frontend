import React from "react";

import { Layout, Menu } from "antd";

import { sidebarItemsGenerator } from "../utils/sidebarItemsGenerator";
import { Outlet } from "react-router-dom";

import { useAppSelector } from "../redux/hooks";

import { adminItems } from "../router/AdminRoutes";
import { userItems } from "../router/UserRoutes";

const { Content, Sider } = Layout;





const App: React.FC = () => {
  const currentUser = useAppSelector((state) => state.auth.user);

  let sideBarItems;

if(currentUser?.role === 'admin'){
   sideBarItems = sidebarItemsGenerator(adminItems, "admin");
}else{
  sideBarItems = sidebarItemsGenerator(userItems, "user");
}


  return (
    <Layout>
      <Sider
        breakpoint="lg"
        style={{ backgroundColor: "white" }}
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="bg-white pt-4  min-h-screen">
          <p className=" text-lg text-center font-bold underline pb-5">
            {currentUser && currentUser.name}
          </p>
          <Menu mode="inline" items={sideBarItems} />
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
