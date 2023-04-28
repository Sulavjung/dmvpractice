import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./components/Navbar";

const Layout = () => {
  return (
    <>
    
      <NavigationBar />
    
      <Outlet />
    </>
  );
};

export default Layout;
