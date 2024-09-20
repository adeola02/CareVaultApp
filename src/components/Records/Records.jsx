import "./Records.css";
import { IoIosSearch, IoIosClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import newData from "../../data.json";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Records = () => {
  const medicalRecords = useSelector(
    (state) => state?.app?.user?.medicalRecords
  );
  const [filteredData, setFilteredData] = useState(medicalRecords);
  const token = useSelector((state) => state.app?.token);
  const [searchValue, setSearchValue] = useState("");

  // console.log(filteredData);

  const filterOnChange = (e) => {
    const filter = e.target.value;
    setSearchValue(filter);
    const filtered = newData.filter((item) =>
      item.entryType.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredData(filtered);
  };
  // console.log(item);

  const downloadFile = (doc, fileName) => {
    console.log(doc);
    // console.log(`fileUrl ${fileUrl}`);
    // const fileName = fileUrl.split("/").pop(); // Get the file name from the URL
    // const link = document.createElement("a"); // Create an anchor element
    // link.href = fileUrl;
    // link.setAttribute("download", fileName); // Set the download attribute with file name
    // document.body.appendChild(link); // Append the link to the body
    // link.click(); // Programmatically trigger a click to download the file
    // link.remove(); // Remove the link after triggering the download
    const canvas = document.querySelector("canvas");
    console.log(canvas);
    if (!canvas) {
      toast.error("Something went wrong, please try again");
      return;
    }
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = doc;
    link.href = url;
    link.click();

    // const a = document.createElement("a");
    // a.href = url;
    // a.download = fileName;
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
  };

  const handleGetRecordsByUser = () => {
    const url = "https://medical-record-project.onrender.com/api/v1/record";
    axios
      .get(url, {
        headers: {
          application: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleGetRecordsByUser();
  }, []);

  const viewRecord = (url) => {
    window.open(url, "_blank");
  };

  const nav = useNavigate();

  return (
    <div className="recordsBody">
      <div className="input">
        <IoIosSearch size={25} className="search" />
        <input
          type="search"
          placeholder="Search"
          onChange={filterOnChange}
          value={searchValue}
        />
        {/* <IoIosClose size={25} className="cancel" /> */}
      </div>

      <div className="section">
        <span>Records list</span>
        <div className="sectionMenu">
          <nav>Name</nav>
          <nav>Category</nav>
          <nav>Date</nav>
          <nav>Size</nav>
          {/* <button>View all</button> */}
        </div>
        <aside>
          {filteredData.length === 0 ? (
            <p>No data found</p>
          ) : (
            filteredData.map((item, index) => {
              const fileNameArr = item?.fileUrl.split("/");
              const fileName = fileNameArr[fileNameArr.length - 1];
              // console.log(fileName);

              return (
                <div key={index} className="recordHolder">
                  <div className="record" style={{ height: "3rem" }}>
                    <nav>{item.entryType}</nav>
                    <nav>{item.recordType}</nav>
                    <nav>{item.date}</nav>
                    <nav>500MB</nav>
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
                      onClick={() => downloadFile(item?.fileUrl, fileName)}
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
            <h2>7</h2>
          </div>
          <div>
            <span>Lab test</span>
          </div>
        </div>
        <div className="record-box">
          <div>
            <h2>3</h2>
          </div>
          <div>
            <span>Drug Prescription</span>
          </div>
        </div>
        <div className="record-box">
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

export default Records;
