import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/CareVault.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="company logo" aria-hidden="true" />
        </div>
        <div className="footer-about">
          <ul className="footer-ul">
            <li>About Company</li>
            <li>About Us</li>
            <li>Upload of record</li>
            <li>Download of record</li>
            <li>Review of record</li>
          </ul>
          <ul className="footer-ul">
            <li>Help & Support</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
        <div className="company-socials">
          <ul>
            <li>
              <FaFacebook size={30} aria-label="Facebook" aria-hidden="true" />
            </li>
            <li>
              <FaTwitter size={30} aria-label="Twitter" aria-hidden="true" />
            </li>
            <li>
              <FaInstagram
                size={30}
                aria-label="Instagram"
                aria-hidden="true"
              />
            </li>
            <li>
              <FaLinkedin size={30} aria-label="LinkedIn" aria-hidden="true" />
            </li>
          </ul>
        </div>
      </div>
      <hr className="line-through" />
      <small>
        <span>&#169;</span>2024 CareVault, All Rights Reserves
      </small>
    </footer>
  );
};

export default Footer;
