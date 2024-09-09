import React from 'react';
import "./AdminDashBoard.css"


const AdminDashBoard = () => {
  return (
    <div className="dashBoardBody">
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
      <main className='adminMain'>
        <div>
          <h3>Recently uploaded</h3>
        </div>
        <div>
          <span>Name</span>
          <span>Category</span>
          <span>Date</span>
          <button>View all</button>
        </div>
        <article>
          <div>
            <div className="records">
              <span>Bload test</span>
              <span>Lab test</span>
              <span>2024,august</span>
            </div>
            <div className="articleButton">
              <button>View</button>
              <button>Download</button>
            </div>
          </div>
          <div>
            <div className="records">
              <span>Bload test</span>
              <span>Lab test</span>
              <span>2024,august</span>
            </div>
            <div className="articleButton">
              <button>View</button>
              <button>Download</button>
            </div>
          </div>
          <div>
            <div className="records">
              <span>Bload test</span>
              <span>Lab test</span>
              <span>2024,august</span>
            </div>
            <div className="articleButton">
              <button>View</button>
              <button>Download</button>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}

export default AdminDashBoard