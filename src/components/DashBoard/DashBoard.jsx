import React from "react";
import "./DashBoard.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashBoard = () => {
  return (
    <div className="dashBoardBody">
      <ToastContainer/>
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
          <span>  last update</span></div>
        </div>
        <div>
          <div>
            <h2>1.2gb of 2gb</h2>
          </div>
          <div><span>Storage used</span></div>
        </div>
      </section>
      <aside>
        <div className="infoDiv">
          <nav></nav>
          <nav className="infoNav">
           <div><span>Fullnmae</span><p>djdkdh</p></div>
           <div>jfkfhf</div>
           <div>jfkfhf</div>
           <div>jfkfhf</div>
           <div>jfkfhf</div>
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
              <button>View</button>
              <button onClick={()=>toast("you've successfully downloaded your file")}>Download</button>
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
