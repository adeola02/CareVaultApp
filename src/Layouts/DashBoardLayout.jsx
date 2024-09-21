import "./DashBoardLayout.css";
import SideBar from "../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const DashBoardLayout = () => {
  const user = useSelector((state) => state.app?.user);
  // console.log(user);
  return (
    <div className="userPageBody">
      <SideBar />
      <div className="outlets">
        <div className="userProfile">
          <nav></nav>
          <span>{user.fullName}</span>
        </div>
        <div className="outLetsLayout">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
