import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar';

const AdminLayout = () => {
  return (
    <div className='userPageBody'>
      <AdminSideBar/>
      <div className="outlets">
        <div className="userProfile">
          <nav></nav>
          <span>Admin</span>
        </div>
        <div className="outLetsLayout">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout;