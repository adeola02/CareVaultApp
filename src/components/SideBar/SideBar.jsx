import { useState } from "react";
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
import Hamburger from "hamburger-react";

// const SideBar = () => {
//   const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

//   const handleNavLinkClick = () => {
//     setHamburgerIsOpen(false);
//   };
//   const token = useSelector((state) => state?.app?.token);
//   // console.log(token);
//   const [isActive, setIsActive] = useState(false);
//   const handleCloseNav = () => {
//     setIsActive(false);
//   };

//   const handleLogOut = () => {
//     const url =
//       "https://medical-record-project.onrender.com/api/v1/patients/signOut";
//     if (!token) {
//       console.log("Token is not provided");
//       return;
//     }

//     axios
//       .patch(url, null, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         console.log(res);
//         nav("/");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   return (
//     <>
//       <div
//         className="dashboard-hamburger"
//         aria-haspopup="true"
//         aria-controls="nav-bar-content"
//         aria-expanded={hamburgerIsOpen ? "true" : "false"}
//         tabIndex={0}
//         role="button"
//         id="hamburger"
//         onClick={() => setHamburgerIsOpen(!hamburgerIsOpen)}
//         onKeyDown={(e) => {
//           if (e.key === "Enter" || e.key === " ") {
//             e.preventDefault();
//             setHamburgerIsOpen(!hamburgerIsOpen);
//           } else if (e.key === "Escape") {
//             setHamburgerIsOpen(false);
//           }
//         }}
//       >
//         <Hamburger
//           toggled={hamburgerIsOpen}
//           toggle={setHamburgerIsOpen}
//           aria-label="Open the menu"
//         />
//       </div>

//       <div
//         className={`sideBarBody ${hamburgerIsOpen ? "sidebar-dashboard" : ""}`}
//       >
//         <div>
//           <img src={careVault} alt="" />
//         </div>
//         <section className="sideBarSection">
//           <NavLink
//             to={"/dashBoard"}
//             className={({ isActive }) => (isActive ? "isActive" : "notActive")}
//             style={{ color: "white" }}
//             onClick={handleCloseNav}
//           >
//             <nav style={{ display: "flex", gap: "10px" }}>
//               <RxDashboard size={25} />
//               Overview
//             </nav>
//           </NavLink>
//           <NavLink
//             to="records"
//             className={({ isActive }) => (isActive ? "isActive" : "notActive")}
//             style={{ color: "white" }}
//             onClick={handleCloseNav}
//           >
//             <nav style={{ display: "flex", gap: "10px" }}>
//               <MdOutlineSimCardDownload size={25} />
//               My records
//             </nav>
//           </NavLink>
//           <NavLink
//             to="uploadImage"
//             className={({ isActive }) => (isActive ? "isActive" : "notActive")}
//             style={{ color: "white" }}
//           >
//             <nav>
//               <LuUpload size={25} />
//               Upload
//             </nav>
//           </NavLink>
//         </section>
//         <nav onClick={handleLogOut}>
//           <TbLogout size={25} />
//           Logout
//         </nav>
//       </div>
//     </>
//   );
// };

// export default SideBar;

const SideBar = () => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  // const [isActive, setIsActive] = useState(false);
  const token = useSelector((state) => state?.app?.token);

  const handleNavLinkClick = () => {
    setHamburgerIsOpen(false);
  };
  // // console.log(token);
  // const handleCloseNav = () => {
  //   setIsActive(false);
  // };

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
        console.log(res);
        nav("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      >
        <div>
          <img src={careVault} alt="Logo" />
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
