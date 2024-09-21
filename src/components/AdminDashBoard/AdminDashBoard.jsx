import React, { useEffect, useState } from 'react';
import "./AdminDashBoard.css";
import axios from 'axios';
import { useSelector } from 'react-redux';


const AdminDashBoard = () => {
const token=useSelector((state)=>state.app?.token);
const [allUsers,setAllUsers]=useState([]);
const [recentUsers,setRecentUsers]=useState([]);
console.log(recentUsers)

const getRecentUsers=()=>{
  setRecentUsers(allUsers)
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
    <div className="dashBoardBody">
         <section>
        <div>
          <div>
            <h2>7</h2>
          </div>
          <div>
            <span> Total records</span>
          </div>
        </div>
        <div>
          <div>
            <h2>Blood test result</h2>
          </div>
          <div>
          <span>  last user</span></div>
        </div>
        <div>
          <div>
            <h2>1.2gb of 2gb</h2>
          </div>
          <div><span>Storage used</span></div>
        </div>
      </section>
      <div className='adminMain'>
        <div>
          <h3>Recently uploaded</h3>
        </div>
        <div>
          <span>Name</span>
          <span>Category</span>
          <span>Date</span>
          <button>View all</button>
        </div>
        <article>
          {
            allUsers.map((user,id)=>(

          <div>
            <div className="records">
              <span>Bload test</span>
              <span>Lab test</span>
              <span>2024,august</span>
            </div>
            <div className="articleButton">
             
              <button>Delte</button>
            </div>
          </div>
            ))
          }
          
        </article>
      </div>
    </div>
  )
}

export default AdminDashBoard