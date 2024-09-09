import React from "react";
import { IoIosSearch } from "react-icons/io";
import "./AdminRecords.css"

const AdminRecords = () => {
  return (
    <div className="recordsBody">
      <IoIosSearch size={30} className="search" />
      <input type="search" placeholder="search" />
      <div className="section">
        <span>All users</span>
        <div className="sectionMenu">
          {" "}
          <span>Name</span>
          <span>Category</span>
          <span>Records</span>
          <span>Size</span>
        </div>
        <aside>
          <div className="adminRecordHolder">
            <div className="record" style={{ height: "3rem" }}>
              <div>mustapha sheu</div>
              <div>Lab test</div>
              <div>13</div>
              <div>1.2g</div>
            </div>
            <div className="recordBtn" style={{ width: "20%", height: "3rem" }}>
              <button>Delete</button>
            </div>
          </div>
          
        </aside>
      </div>
      <h2>Records Categories</h2>
      <div className="recordsCategory">
        <div>
          <div>
            <h2>7</h2>
          </div>
          <div>
            <span>Lab test</span>
          </div>
        </div>
        <div>
          <div>
            <h2>3</h2>
          </div>
          <div>
            <span>Drug Prescription</span>
          </div>
        </div>
        <div>
          <div>
            <h2>6</h2>
          </div>
          <div>
            <span>Reports</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRecords;
