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

  const handleDownload = (fileUrl) => {
    const fileExtension = fileUrl.split(".").pop().toLowerCase();

    // Check if the file extension is supported
    if (["jpg", "jpeg", "png", "gif", "pdf", "txt"].includes(fileExtension)) {
      fetch(fileUrl)
        .then((response) => response.blob()) // Convert to blob to handle it as a downloadable object
        .then((blob) => {
          const link = document.createElement("a");
          const url = window.URL.createObjectURL(blob);
          link.href = url;

          // Extract the filename from the URL and set it as the download name
          const fileName = fileUrl.split("/").pop();
          link.download = fileName;

          // Trigger the download
          document.body.appendChild(link);
          link.click();

          // Clean up by revoking the object URL and removing the link element
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        })
        .catch((err) => {
          console.error("Failed to download file:", err);
          alert("Failed to download file.");
        });
    } else {
      alert("File format not supported for download.");
    }
  };
 
    
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
            <h2>Report</h2>
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
                <button onClick={handleDownload}>View</button>
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
