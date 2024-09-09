import React, { useState } from "react";
import careVault from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import UploadMenu from "../Upload/UploadMenu/UploadMenu";
import { RxDashboard } from "react-icons/rx";
import { LuUpload } from "react-icons/lu";
import { MdOutlineSimCardDownload } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

const AdminSideBar = () => {
  const [isActive,setIsActive]=useState(false);
  return (
    <div className="sideBarBody">
      <div>
        <img src={careVault} alt="" />
      </div>
      <section>
          <NavLink
            to={"/admindashBoard"}
            className={({ isActive }) => (isActive ? "isActive" : "notActive")}
           style={{color:"white"}}
          >
        <nav style={{display:"flex",gap:"10px"}}>
        <RxDashboard size={25} />
            Overview
        </nav>
          </NavLink>
          <NavLink
            to="/adminRecords"
            className={({ isActive }) => (isActive ? "isActive" : "notActive")}
            style={{color:"white"}}
          >
        <nav style={{display:"flex",gap:"10px"}}>
        <MdOutlineSimCardDownload size={25} />
            All users
        </nav>
          </NavLink>
      </section>
        <nav>
        <TbLogout size={25} />
          Logout</nav>
    </div>
  );
};

export default AdminSideBar;
