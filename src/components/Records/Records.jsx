import "./Records.css";
import { IoIosSearch, IoIosClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import newData from "../../data.json"
import { useState } from "react";

const Records = () => {
  
  console.log(newData)
  const [filteredData, setFilteredData] = useState(newData)
  console.log(filteredData)
  const [searchValue, setSearchValue] = useState('')

  const filterOnChange = (e) =>{
    const filter = e.target.value
    setSearchValue(filter)
    const filtered = newData.filter((item)=>
      item.entryType.toLowerCase().includes(filter.toLowerCase())
    )
    setFilteredData(filtered)
  }


  const medicalRecords = useSelector(
    (state) => state?.app?.user?.medicalRecords
  );
  console.log(medicalRecords);

  const viewRecord=(url)=>{
    window.open(url,"_blank")
  }
const nav=useNavigate();
  return (
    <div className="recordsBody">
      <div className="input">
        <IoIosSearch size={25} className="search" />
        <input type="search" name="" id="" placeholder="Search with entry type" onChange={filterOnChange} value={searchValue} />
        {/* <IoIosClose size={25} className="cancel" /> */}
      </div>

      <div className="section">
        <span>All records</span>
        <div className="sectionMenu">
          {" "}
          <nav>Name</nav>
          <nav>Category</nav>
          <nav>Date</nav>
          {/* <button>View all</button> */}
        </div>
        <aside>
          {
            filteredData.length === 0? (<p>No data found</p>):
          filteredData.map((item, index) => (
            <>
              <div className="recordHolder">
                <div className="record" style={{ height: "3rem" }}>
                  <nav>{item.entryType}</nav>
                  <nav>{item.repcordType}</nav>
                  <nav>{item.date}</nav>
                </div>
                <div
                  className="recordBtn"
                  style={{ width: "20%", height: "3rem" }}
                >
                  <button onClick={()=>viewRecord(item?.fileUrl)}>View</button>
                  <button>Download</button>
                </div>
              </div>
            </>
          ))}
        </aside>
      </div>
      <h2>Records Categories</h2>
      <div className="recordsCategory">
        <div>
          <div>
            <h2>7</h2>
          </div>
          <div>
            <span>Lab test</span>
          </div>
        </div>
        <div>
          <div>
            <h2>3</h2>
          </div>
          <div>
            <span>Drug Prescription</span>
          </div>
        </div>
        <div>
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
