import React from "react";
import {Outlet} from "react-router-dom";
import Menu from "./menu";

const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default Layout;