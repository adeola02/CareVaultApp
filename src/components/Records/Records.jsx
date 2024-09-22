import "./Records.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Records = () => {
  const medicalRecords = useSelector(
    (state) => state?.app?.user?.medicalRecords
  );
  const [filteredData, setFilteredData] = useState(medicalRecords);
  const token = useSelector((state) => state.app?.token);
  const [searchValue, setSearchValue] = useState("");
  const [labTest, setLabTest] = useState([]);
  const [report, setReport] = useState([]);
  const [drug, setDrug] = useState([]);

  console.log(labTest);
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
console.log(filteredData)
  const filteredType = () => {
    const labTestFiltered = filteredData.filter(
      (e) => e.entryType.toLowerCase() === "lab test"
    );
    setLabTest(labTest);
    console.log(labTestFiltered)
    const drugType = filteredData.filter(
      (e) => e.entryType.toLowerCase() === "drug prescription"
    );
    setDrug(drugType);
    console.log(drugType)
    const reportType = filteredData.filter(
      (e) => e.entryType.toLowerCase() === "report"
    );
    console.log(reportType)
    setReport(reportType);
  };

  useEffect(() => {
    filteredType();
  }, []);

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

      <div className="record-section">
        <h2>Records list</h2>
        <div className="sectionMenu">
          <nav>Name</nav>
          <nav>Category</nav>
          <nav>Date</nav>
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
                  <div className="record-section2">
                    <nav>{item.entryType}</nav>
                    <nav>{item.recordType}</nav>
                    <nav>{new Date().toLocaleDateString()}</nav>
                  </div>
                  <div className="recordBtn">
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
            <h2>{labTest.length}</h2>
          </div>
          <div>
            <span>Lab test</span>
          </div>
        </div>
        <div className="record-box">
          <div>
            <h2>{drug.length}</h2>
          </div>
          <div>
            <span>Drug Prescription</span>
          </div>
        </div>
        <div className="record-box">
          <div>
            <h2>{report.length}</h2>
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
