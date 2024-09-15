import { MdCancel } from "react-icons/md";
import logo from "../assets/CareVault.png";
import CheckMark from "../assets/CheckMark.png";
import "../AuthCss/SuccessPage.css";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const nav = useNavigate();
  return (
    <section className="success-page">
      <div className="success-wrapper">
        <div className="success-header">
          <img src={logo} alt="CareVault Logo" />
          <MdCancel size={30} cursor="pointer" onClick={() => nav("/")} />
        </div>
        <div className="success-main">
          <div className="success-main-first">
            <h1>Congratulations</h1>
            <span>
              <img src={CheckMark} alt="checkmark" width={40} />
            </span>
          </div>
          <p>
            You password has been changed <br /> successfully.😉
          </p>
          <button className="btn1" onClick={() => nav("/log-in")}>
            Back to Log in
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
