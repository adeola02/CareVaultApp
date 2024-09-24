import { useState, useRef, useEffect } from "react";
import "./SideBar.css";
import careVault from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import UploadMenu from "../Upload/UploadMenu/UploadMenu";
import { RxDashboard } from "react-icons/rx";
import { LuUpload } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { MdOutlineSimCardDownload } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import axios from "axios";
import { useSelector } from "react-redux";
import Hamburger from "hamburger-react";

const SideBar = () => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const token = useSelector((state) => state?.app?.token);

  const handleNavLinkClick = () => {
    setHamburgerIsOpen(false);
  };

  const handleLogOut = () => {
    const url =
      "https://medical-record-project.onrender.com/api/v1/patients/signOut";
    if (!token) {
      console.log("Token is not provided");
      setHamburgerIsOpen(false);
      return;
    }

    axios
      .patch(url, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res?.data?.message);
        if (res?.data?.message) {
          nav("/log-in");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Close sidebar when clicking outside

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        hamburgerIsOpen
      ) {
        setHamburgerIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hamburgerIsOpen]);

  return (
    <>
      <div
        className="dashboard-hamburger"
        aria-haspopup="true"
        aria-controls="nav-bar-content"
        aria-expanded={hamburgerIsOpen ? "true" : "false"}
        tabIndex={0}
        role="button"
        id="hamburger"
        onClick={() => setHamburgerIsOpen(!hamburgerIsOpen)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setHamburgerIsOpen(!hamburgerIsOpen);
          } else if (e.key === "Escape") {
            setHamburgerIsOpen(false);
          }
        }}
      >
        <Hamburger
          toggled={hamburgerIsOpen}
          toggle={setHamburgerIsOpen}
          aria-label="Open the menu"
        />
      </div>

      <div
        className={`sideBarBody ${hamburgerIsOpen ? "sidebar-dashboard" : ""}`}
        ref={sidebarRef}
      >
        <div>
          <img src={careVault} alt="Logo" className="sidebar-company-logo" />
        </div>
        <section className="sideBarSection">
          <NavLink
            to="/dashBoard"
            className={({ isActive }) => (isActive ? "isActive" : "notActive")}
          >
            <nav
              style={{ display: "flex", gap: "10px", color: "white" }}
              onClick={handleNavLinkClick}
            >
              <RxDashboard size={25} />
              Overview
            </nav>
          </NavLink>
          <NavLink
            to="/records"
            className={({ isActive }) => (isActive ? "isActive" : "notActive")}
          >
            <nav
              style={{ display: "flex", gap: "10px", color: "white" }}
              onClick={handleNavLinkClick}
            >
              <MdOutlineSimCardDownload size={25} />
              My records
            </nav>
          </NavLink>
          <NavLink
            to="/uploadImage"
            className={({ isActive }) => (isActive ? "isActive" : "notActive")}
          >
            <nav
              onClick={handleNavLinkClick}
              style={{ color: "white", gap: "10px" }}
            >
              <LuUpload size={25} />
              Upload
            </nav>
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "isActive" : "notActive")}
          >
            <nav
              style={{ display: "flex", gap: "10px", color: "white" }}
              onClick={handleNavLinkClick}
            >
              <LuSettings size={25} />
              Setting
            </nav>
          </NavLink>
        </section>
        <nav onClick={handleLogOut}>
          <TbLogout size={25} />
          Logout
        </nav>
      </div>
    </>
  );
};

export default SideBar;
