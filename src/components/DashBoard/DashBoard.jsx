import { useSelector } from "react-redux";
import "./DashBoard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserLarge } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { setMedicalRecords } from "../../Global/slice";
import recordsLogo from "../../assets/mingcute_file-line.png";
import reportLogo from "../../assets/carbon_result.png";
import storageLogo from "../../assets/ic_outline-sd-storage.png";
import axios from "axios";
import { useEffect, useState } from "react";

const DashBoard = () => {
  const user = useSelector((state) => state.app?.user);
  const medicalRecords = useSelector(
    (state) => state?.app?.user?.medicalRecords
  );
  const id=useSelector((state)=>state.app?.user?._id)
  const token=useSelector((state)=>state.app?.token)
  const [records,setRecords]=useState([]);
  console.log(records)
  console.log(medicalRecords);
  const recentUploads = medicalRecords.slice(0,3);

  const nav = useNavigate();
  const viewRecord = (url) => {
    window.open(url, "_blank");
  };
  console.log(user);

  const getOneUser=()=>{
    const url=`https://medical-record-project.onrender.com/api/v1/patient/one`
    axios.get(url,
     { headers:{
        application:"application/json",
        Authorization:`Bearer ${token}`
      }}
    )
    .then((res)=>{
    setRecords(res?.data?.findUser?.medicalRecords)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
useEffect(()=>{
  getOneUser()
},[])

  const handleDownLoad=()=>{
    toast.success("redirecting you to your records to download")
    setTimeout(() => {
      nav("/records")
    }, 2000);
  }
    
  return (
    <div className="dashBoardBody">
      <ToastContainer />

      <section className="top-bar">
        <div className="dashboard-box">
          <div className="dashboard-inner-box">
            <img src={recordsLogo} className="dashboard-box-icon" />
            <h2>{medicalRecords.length}</h2>
          </div>
          <div>
            <span> Total records</span>
          </div>
        </div>
        <div className="dashboard-box">
          <div className="dashboard-inner-box">
            <img src={reportLogo} className="dashboard-box-icon" />
            <h2>{records[1]?.entryType}</h2>
          </div>
          <div>
            <span> Last update</span>
          </div>
        </div>
        <div className="dashboard-box">
          <div className="dashboard-inner-box">
            <img src={storageLogo} className="dashboard-box-icon" />
            <h2>
              {user?.usedStorage}mb of {user?.totalStorage}mb
            </h2>
          </div>
          <div>
            <span>Storage Used</span>
          </div>
        </div>
      </section>

      <main>
        <div className="text-top">
          <h3>Recently uploaded</h3>
        </div>
        <div className="bottom" style={{ marginBlockEnd: "1rem" }}>
          <nav>Name</nav>
          <nav>Category</nav>
          <nav>Date</nav>
          <button className="viewall-btn" onClick={() => nav("/records")}>
            View all
          </button>
        </div>
        <article className="">
          {recentUploads.map((item, index) => (
            <div key={item?.id || index}>
              {" "}
              {/* Replace 'item?.id' with your unique identifier */}
              <div className="records">
                <nav>{item?.entryType}</nav>
                <nav>{item?.recordType}</nav>
                <nav>{new Date().toLocaleDateString()}</nav>
              </div>
              <div className="articleButton bottom-bar">
                <button onClick={()=>viewRecord(item?.fileUrl)}>View</button>
                <button onClick={handleDownLoad}>Download</button>
              </div>
            </div>
          ))}
        </article>
      </main>
    </div>
  );
};

export default DashBoard;
