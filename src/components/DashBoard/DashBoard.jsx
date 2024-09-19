import { useSelector } from "react-redux";
import "./DashBoard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserLarge } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { setMedicalRecords } from "../../Global/slice";

const DashBoard = () => {
  const user=useSelector((state)=>state.app?.user)
  const medicalRecords=useSelector((state)=>state?.app?.user?.medicalRecords)
  console.log(medicalRecords);
  const recentUploads=medicalRecords.slice(0,3)
  console.log(recentUploads)
  const nav=useNavigate();
  console.log(user)
  return (
    <div className="dashBoardBody">
      <ToastContainer />
      <section>
        <div>
          <div>
            <h2>{medicalRecords.length}</h2>
          </div>
          <div>
            <span> Total records</span>
          </div>
        </div>
        <div>
          <div>
            <h2>{medicalRecords[0].entryType}</h2>
          </div>
          <div>
            <span> last update</span>
          </div>
        </div>
        <div>
          <div>
            <h2>100mb of {user?.totalStorage}mb</h2>
          </div>
          <div>
            <span>Storage used</span>
          </div>
        </div>
      </section>
      <aside>
        <div className="infoDiv">
          <nav><FaUserLarge size={150}/></nav>
          <nav className="infoNav">
          <div>
            <h3>Fullname:</h3><h5>{user.fullName}</h5>
          </div>
          <div>
            <h3>Email:</h3><h5>{user.email}</h5>
          </div>
          <div>
            <h3>Phone number:</h3><h5>{user.phoneNumber}</h5>
          </div>
          <div>
            <h3>Date of birth:</h3><h5>{user.dateOfBirth}</h5>
          </div>
          <div>
            <h3>Gender:</h3><h5>{user.gender}</h5>
          </div>
          </nav>
        </div>
        <div className="quickUploadDiv">
          Quick upload
          {/* <button>Quick Upload</button> */}
        </div>
      </aside>
      <main>
        <div className="text-top">
          <h3>Recently uploaded</h3>
        </div>
        <div className="div">
          <nav>Name</nav>
          <nav>Category</nav>
          <nav>Date</nav>
          <button onClick={()=>nav("dashBoard/records")}>View all</button>
        </div>
        <article>
          {
            recentUploads.map((item,index)=>(
              <div>
              <div className="records">
                <nav>{item?.entryType}</nav>
                <nav>{item?.recordType}</nav>
                <nav>2024,august</nav>
              </div>
              <div className="articleButton">
                <button onClick={()=>nav("/view")}>View</button>
                <button
                  onClick={() =>
                    toast("you've successfully downloaded your file")
                  }
                >
                  Download
                </button>
              </div>
            </div>
            ))
           
          }
          
        </article>
      </main>
    </div>
  );
};

export default DashBoard;
