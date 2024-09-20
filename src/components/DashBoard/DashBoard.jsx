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
  const recentUploads = medicalRecords.slice(0, 3);
  console.log(recentUploads);
  const nav = useNavigate();
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
            <h2>{medicalRecords[0].entryType}</h2>
          </div>
          <div>
            <span> last update</span>
          </div>
        </div>
        <div className="dashboard-box">
          <div>
            <h2>100mb of {user?.totalStorage}mb</h2>
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
          <button
            style={{ backgroundColor: "#5c9ae5", color: "white" }}
            onClick={() => nav("dashBoard/records")}
          >
            View all
          </button>
        </div>
        <article>
          {recentUploads.map((item, index) => (
            <div className="bottom-bar" key={index}>
              <div className="records">
                <nav>{item?.entryType}</nav>
                <nav>{item?.recordType}</nav>
                <nav>{new Date().toLocaleDateString()}</nav>
              </div>
              <div className="articleButton">
                <button onClick={() => nav("/view")}>View</button>
                <button
                  onClick={() =>
                    toast("you've successfully downloaded your file")
                  }
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </article>
      </main>
    </div>
  );
};

export default DashBoard;
