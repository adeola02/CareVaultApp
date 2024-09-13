import "./Records.css";
import { IoIosSearch, IoIosClose } from "react-icons/io";

const Records = () => {
  return (
    <div className="recordsBody">
      <div className="input">
        <IoIosSearch size={25} className="search" />
        <input type="search" name="" id="" placeholder="Search" />
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
          <div className="recordHolder">
            <div className="record" style={{ height: "3rem" }}>
              <nav>Blood Test</nav>
              <nav>Lab test</nav>
              <nav>2024,August</nav>
            </div>
            <div className="recordBtn" style={{ width: "20%", height: "3rem" }}>
              <button>View</button>
              <button>Download</button>
            </div>
          </div>
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
