import React from "react";
import "./UploadMenu.css";
import { NavLink } from "react-router-dom";

const UploadMenu = ({setIsActive}) => {
  return (
    <div className="UploadMenuBody" >
      <div className="triangle"></div>
        <NavLink to={"/uploadImage"} className="link">
      <nav style={{fontSize:"15px"}} onClick={()=>setIsActive(false)}>
        As Image
      </nav>
        </NavLink>
        <NavLink to={"/uploadPdf"} className="link" onClick={()=>setIsActive(false)}>
      <nav style={{fontSize:"15px"}}>
        As document
      </nav>
        </NavLink>
        <NavLink to={"uploadManual"} className="link"onClick={()=>setIsActive(false)}>
      <nav style={{fontSize:"15px"}}>
          Maual upload
      </nav>
          </NavLink>
    </div>
  );
};

export default UploadMenu;
