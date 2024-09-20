import React, { useState } from "react";
import careVault from "../../assets/Logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import UploadMenu from "../Upload/UploadMenu/UploadMenu";
import { RxDashboard } from "react-icons/rx";
import { LuUpload } from "react-icons/lu";
import { MdOutlineSimCardDownload } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { useSelector } from "react-redux";
import axios from "axios";

const AdminSideBar = () => {
  const [isActive,setIsActive]=useState(false);
const nav=useNavigate();
const token =useSelector((state)=>state.app?.token)
 console.log(token)
  const handleLogOut = () => {  
    const url = "https://medical-record-project.onrender.com/api/v1/patients/signOut";  
    if (!token) {  
      console.log("Token is not provided");  
      return;  
    }  
  
    axios.patch(url, null, {  
      headers: {  
        Authorization: `Bearer ${token}`,  
      },  
    })  
    .then((res) => {  
      console.log(res);
      nav("/")  
    })  
    .catch((err) => {  
      console.log(err);  
    });  
  };  
  return (
    <div className="sideBarBody">
      <div>
        <img src={careVault} alt="" />
      </div>
      <section className="sideBarSection">
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
        <nav onClick={handleLogOut}>
        <TbLogout size={25} />
          Logout</nav>
    </div>
  );
};

export default AdminSideBar;
