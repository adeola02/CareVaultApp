import "./Records.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Records = () => {
  const medicalRecords = useSelector(
    (state) => state?.app?.user?.medicalRecords
  );
  const [filteredData, setFilteredData] = useState(medicalRecords);
  const [searchValue, setSearchValue] = useState("");

  // Filter data on search input change
  const filterOnChange = (e) => {
    const filter = e.target.value;
    setSearchValue(filter);
    const filtered = medicalRecords.filter((item) =>
      item.entryType.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // Function to handle view file
  const viewRecord = (url) => {
    window.open(url, "_blank");
  };

  // Function to handle file downloads
  const handleDownload = (fileUrl) => {
    const fileExtension = fileUrl.split(".").pop().toLowerCase();

    if (["jpg", "jpeg", "png", "gif", "pdf"].includes(fileExtension)) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = true;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("File format not supported for download.");
    }
  };

  const nav = useNavigate();

  return (
    <div className="recordsBody">
      <div className="input">
        <input
          type="search"
          placeholder="Search"
          onChange={filterOnChange}
          value={searchValue}
        />
      </div>

      <div className="section">
        <span>Records list</span>
        <div className="sectionMenu">
          <nav>Name</nav>
          <nav>Category</nav>
          <nav>Date</nav>
          <nav>Size</nav>
        </div>
        <aside>
          {filteredData.length === 0 ? (
            <p>No data found</p>
          ) : (
            filteredData.map((item, index) => {
              const fileNameArr = item?.fileUrl?.split("/");
              const fileName = fileNameArr
                ? fileNameArr[fileNameArr.length - 1]
                : "Unknown";

              return (
                <div key={index} className="recordHolder">
                  <div className="record" style={{ height: "3rem" }}>
                    <nav>{item.entryType}</nav>
                    <nav>{item.recordType}</nav>
                    <nav>{item.date}</nav>
                    <nav>{item.fileSize}</nav>
                  </div>
                  <div
                    className="recordBtn"
                    style={{ width: "20%", height: "3rem" }}
                  >
                    <button
                      className="record-btn"
                      onClick={() => viewRecord(item?.fileUrl)}
                    >
                      View
                    </button>
                    <button
                      className="record-btn"
                      onClick={() => handleDownload(item?.fileUrl)}
                    >
                      Download
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </aside>
      </div>

      <h2>Records Categories</h2>
      <div className="recordsCategory">
        <div className="record-box">
          <div>
            <h2>{medicalRecords.length}</h2>
          </div>
          <div>
            <span>Lab test</span>
          </div>
        </div>
        <div className="record-box">
          <div>
            <h2>0</h2>
          </div>
          <div>
            <span>Drug Prescription</span>
          </div>
        </div>
        <div className="record-box">
          <div>
            <h2>0</h2>
          </div>
          <div>
            <span>Reports</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;

// const handleDownload = async (recordId) => {
//   try {
//     const response = await axios({
//       url: `https://medical-record-project.onrender.com/api/v1/download/${recordId}`,
//       method: "GET",
//       responseType: "blob", // Important to get the data as a Blob (binary data)
//     });

//     // Create a URL for the file to trigger the download
//     const url = window.URL.createObjectURL(new Blob([response.data]));
//     const link = document.createElement("a");
//     link.href = url;

//     // Optionally, set the downloaded file name
//     const fileName =
//       response.headers["content-disposition"].split("filename=")[1];
//     link.setAttribute("download", fileName);

//     // Append the link to the body, trigger the download, and remove the link
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   } catch (error) {
//     console.error("Error downloading the file:", error);
//   }
// };
