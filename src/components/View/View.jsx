import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./View.css";
import { MdArrowBack } from "react-icons/md";

const View = () => {
    const nav=useNavigate();
    const location = useLocation()
    const url = location.state
  return (
    <div className='viewPageBody'>
        <div className="viewTop">
            <div className="viewTopContent">

        <MdArrowBack size={30} cursor="pointer" onClick={()=>nav("/dashBoard")}/>
        <h3>Lab test</h3>
        <h4>August 30,2024</h4>
            </div>
        </div>
        <div className="viewedObject">
            <div>
                <img src={url} alt="FILE" />
            </div>
        </div>
    </div>
  )
}

export default View