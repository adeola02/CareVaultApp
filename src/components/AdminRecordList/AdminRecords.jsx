import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import "./AdminRecords.css"
import axios from "axios";
import { useSelector } from "react-redux";

const AdminRecords = () => {
  const token=useSelector((state)=>state.app?.token);
const [allUsers,setAllUsers]=useState([]);
const [recentUsers,setRecentUsers]=useState([]);
console.log(recentUsers)
const userId=allUsers.filter((e)=>e._id)
console.log(userId)

const getRecentUsers=()=>{
  setRecentUsers(allUsers)
}

const deleteUser=()=>{
  const url=`"https://medical-record-project.onrender.com/api/v1/patient/delete/${id}`
  axios.delete(url,{
    headers:{
      application:"application/json",
      Authorization:`Bearer ${token}`
    }
  })
  .then((res)=>{
    console.log(res)
  })
  .catch((err)=>{
    console.log(err)
  })
}

  const getAllRecords=()=>{
    const url="https://medical-record-project.onrender.com/api/v1/patient"
    axios.get(url,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    .then((res)=>{
      console.log(res?.data?.data)
     setAllUsers(res?.data?.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getAllRecords(),
    getRecentUsers();
  },[]);
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
          {
            allUsers.map((users,id)=>(

          <div className="adminRecordHolder">
            <div className="record" style={{ height: "3rem" }}>
              <div>{users.fullName}</div>
              <div>Lab test</div>
              <div>13</div>
              <div>1.2g</div>
            </div>
            <div className="recordBtn" style={{ width: "20%", height: "3rem" }}>
              <button onClick={deleteUser}>Delete</button>
            </div>
          </div>
            ))
          }
          
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
