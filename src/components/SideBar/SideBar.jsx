import React, { useState } from "react";
import "./SideBar.css";
import careVault from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import UploadMenu from "../Upload/UploadMenu/UploadMenu";
import { RxDashboard } from "react-icons/rx";
import { LuUpload } from "react-icons/lu";
import { MdOutlineSimCardDownload } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import axios from "axios";
import { useSelector } from "react-redux";

const SideBar = () => {
  const token = useSelector((state) => state?.app?.token);
  const [isActive, setIsActive] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleCloseNav = () => {
    setIsActive(false);
  };

  const handleLogOut = () => {
    const url =
      "https://medical-record-project.onrender.com/api/v1/patients/signOut";
    if (!token) {
      console.log("Token is not provided");
      return;
    }

    axios
      .patch(url, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        nav("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="sideBarBody">
        <div>
          <img src={careVault} alt="" />
        </div>
        <section className="sideBarSection">
          <NavLink
            to={"/dashBoard"}
            className={({ isActive }) => (isActive ? "isActive" : "notActive")}
            style={{ color: "white" }}
            onClick={handleCloseNav}
          >
            <nav style={{ display: "flex", gap: "10px" }}>
              <RxDashboard size={25} />
              Overview
            </nav>
          </NavLink>
          <NavLink
            to="dashBoard/records"
            className={({ isActive }) => (isActive ? "isActive" : "notActive")}
            style={{ color: "white" }}
            onClick={handleCloseNav}
          >
            <nav style={{ display: "flex", gap: "10px" }}>
              <MdOutlineSimCardDownload size={25} />
              My records
            </nav>
          </NavLink>
          <nav
            className={isActive ? "isActive" : "notActive"}
            onClick={() => setIsActive(!isActive)}
          >
            <LuUpload size={25} />
            Upload
          </nav>
          {isActive ? <UploadMenu setIsActive={setIsActive} /> : null}
        </section>
        <nav onClick={handleLogOut}>
          <TbLogout size={25} />
          Logout
        </nav>
      </div>

      {/* <button className="pop-btn" popovertarget="my-popover">
        Slide
      </button>

      <div id="my-popover" popover>
        <div>
          <img src={careVault} alt="" />
        </div>
        <section className="sideBarSection">
          <NavLink
            to={"/dashBoard"}
            className={({ isActive }) => (isActive ? "isActive" : "notActive")}
            style={{ color: "white" }}
            onClick={togglePopover}
          >
            <nav style={{ display: "flex", gap: "10px" }}>
              <RxDashboard size={25} />
              Overview
            </nav>
          </NavLink>
          <NavLink
            to="dashBoard/records"
            className={({ isActive }) => (isActive ? "isActive" : "notActive")}
            style={{ color: "white" }}
            onClick={togglePopover}
          >
            <nav style={{ display: "flex", gap: "10px" }}>
              <MdOutlineSimCardDownload size={25} />
              My records
            </nav>
          </NavLink>
          <nav
            className={isActive ? "isActive" : "notActive"}
            onClick={() => setIsActive(!isActive)}
          >
            <LuUpload size={25} />
            Upload
          </nav>
          {isActive ? <UploadMenu setIsActive={setIsActive} /> : null}
        </section>
        <nav onClick={handleLogOut}>
          <TbLogout size={25} />
          Logout
        </nav>
      </div> */}
    </>
  );
};

export default SideBar;
