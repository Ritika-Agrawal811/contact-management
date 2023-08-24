import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      <SideBar />
      <Outlet />
    </main>
  );
};

export default Layout;
