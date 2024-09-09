import React from "react";
import "./DashBoardLayout.css";
import SideBar from "../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <div className="userPageBody">
      <SideBar />
      <div className="outlets">
        <div className="userProfile">
          <nav></nav>
          <span>Mustapha Shehu</span>
        </div>
        <div className="outLetsLayout">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
