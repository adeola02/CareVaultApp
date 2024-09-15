import { useNavigate } from "react-router-dom";
import "./View.css";
import { MdArrowBack } from "react-icons/md";

const View = () => {
    const nav=useNavigate();
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
            <div></div>
        </div>
    </div>
  )
}

export default View