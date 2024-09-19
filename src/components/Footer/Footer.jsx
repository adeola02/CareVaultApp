import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/CareVault.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="CareVault company logo" />
        </div>
        <div className="footer-about">
          <ul className="footer-ul">
            <li>About Company</li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#upload-record">Upload of record</a>
            </li>
            <li>
              <a href="#download-record">Download of record</a>
            </li>
            <li>
              <a href="#review-record">Review of record</a>
            </li>
          </ul>
          <ul className="footer-ul">
            <li>Help & Support</li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
            <li>
              <a href="#privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms-condition">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className="company-socials">
          <ul>
            <li>
              <a href="https://www.facebook.com" aria-label="Facebook">
                <FaFacebook size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" aria-label="Twitter">
                <FaTwitter size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" aria-label="Instagram">
                <FaInstagram size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" aria-label="LinkedIn">
                <FaLinkedin size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="line-through" />
      <small>
        <span>&#169;</span>2024 CareVault, All Rights Reserved
      </small>
    </footer>
  );
};

export default Footer;
