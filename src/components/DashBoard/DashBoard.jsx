import { useSelector } from "react-redux";
import "./DashBoard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserLarge } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { setMedicalRecords } from "../../Global/slice";

const DashBoard = () => {
  const user = useSelector((state) => state.app?.user);
  const medicalRecords = useSelector(
    (state) => state?.app?.user?.medicalRecords
  );
  console.log(medicalRecords);
  const recentUploads = medicalRecords.slice(-3);
  // console.log(recentUploads);
  const nav = useNavigate();
  const viewRecord = (url) => {
    window.open(url, "_blank");
  };
  console.log(user);

 
    
  return (
    <div className="dashBoardBody">
      <ToastContainer />
      <section className="top-bar">
        <div className="dashboard-box">
          <div>
            <h2>{medicalRecords.length}</h2>
          </div>
          <div>
            <span> Total records</span>
          </div>
        </div>
        <div className="dashboard-box">
          <div>
            <h2>report</h2>
          </div>
          <div>
            <span> last update</span>
          </div>
        </div>
        <div className="dashboard-box">
          <div>
            <h2>
              {user?.usedStorage}mb of {user?.totalStorage}mb
            </h2>
          </div>
          <div>
            <span>Storage used</span>
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
                <button onClick={() => viewRecord(item?.fileUrl)}>View</button>
                <button onClick={()=>nav("/records")}>Download</button>
              </div>
            </div>
          ))}
        </article>
      </main>
    </div>
  );
};

export default DashBoard;
