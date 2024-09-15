import { useSelector } from "react-redux";
import "./DashBoard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserLarge } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const user=useSelector((state)=>state.app?.user)
  const nav=useNavigate();
  console.log(user)
  return (
    <div className="dashBoardBody">
      <ToastContainer />
      <section>
        <div>
          <div>
            <h2>7</h2>
          </div>
          <div>
            <span> Total records</span>
          </div>
        </div>
        <div>
          <div>
            <h2>Blood test result</h2>
          </div>
          <div>
            <span> last update</span>
          </div>
        </div>
        <div>
          <div>
            <h2>1.2gb of 2gb</h2>
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
        <div>
          <h3>Recently uploaded</h3>
        </div>
        <div className="div">
          <nav>Name</nav>
          <nav>Category</nav>
          <nav>Date</nav>
          <button>View all</button>
        </div>
        <article>
          <div>
            <div className="records">
              <nav>Bload test</nav>
              <nav>Lab test</nav>
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
          <div>
            <div className="records">
              <nav>Bload test</nav>
              <nav>Lab test</nav>
              <nav>2024,august</nav>
            </div>
            <div className="articleButton">
              <button>View</button>
              <button>Download</button>
            </div>
          </div>
          <div>
            <div className="records">
              <nav>Bload test</nav>
              <nav>Lab test</nav>
              <nav>2024,august</nav>
            </div>
            <div className="articleButton">
              <button>View</button>
              <button>Download</button>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default DashBoard;
