import { MdCancel } from "react-icons/md";
import logo from "../assets/CareVault.png";

import "../AuthCss/Verification.css";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const nav = useNavigate();
  return (
    <section className="verification-page">
      <div className="verification-wrapper">
        <div className="verification-header">
          <img src={logo} alt="CareVault Logo" />
          <MdCancel size={30} cursor="pointer" onClick={() => nav("/")} />
        </div>
        <div className="verification-main">
          <h3>Dear Mustapha Shehu,</h3>
          <p>Welcome to CareVault!</p>
          <p>
            Your CareVault account has been successfully created. Please check
            your email(mustaphasidi2005@gmail.com) to verify your account.
          </p>
          {/* <button className="btn1" onClick={() => nav("/log-in")}>
            Verify
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Verification;
