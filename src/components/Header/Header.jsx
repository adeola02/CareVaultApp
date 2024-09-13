import "./Header.css";
import CareVault from "../../assets/CareVault.png";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  const handleNavLinkClick = () => {
    setHamburgerIsOpen(false);
  };

  return (
    <header className="header">
      <div className="leftNav" aria-label="Click for home.">
        <NavLink to="/">
          <img
            src={CareVault}
            alt="company-logo"
            className="company-logo"
            aria-hidden="true"
          />
        </NavLink>
      </div>
      <div
        className="hamburger"
        aria-haspopup="true"
        aria-controls="nav-bar-content"
        aria-expanded={hamburgerIsOpen ? "true" : "false"}
        tabIndex={0}
        role="button"
        id="hamburger"
        onClick={() => setHamburgerIsOpen(!hamburgerIsOpen)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setHamburgerIsOpen(!hamburgerIsOpen);
          } else if (e.key === "Escape") {
            setHamburgerIsOpen(false);
          }
        }}
      >
        <Hamburger
          toggled={hamburgerIsOpen}
          toggle={setHamburgerIsOpen}
          aria-label="Open the menu"
        />
      </div>

      <nav
        className={`nav ${hamburgerIsOpen ? "open" : ""}`}
        id="nav-bar-content"
        aria-labelledby="hamburger"
        role="menu"
      >
        <ul>
          <li onClick={handleNavLinkClick}>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? { color: "#5E9DEA" } : { color: "#000" }
              }
            >
              Home
            </NavLink>
          </li>
          <li onClick={handleNavLinkClick}>
            <NavLink
              to="/about-us"
              style={({ isActive }) =>
                isActive ? { color: "#5E9DEA" } : { color: "#000" }
              }
            >
              About Us
            </NavLink>
          </li>
          <li onClick={handleNavLinkClick}>
            <NavLink
              to="/contact-us"
              style={({ isActive }) =>
                isActive ? { color: "#5E9DEA" } : { color: "#000" }
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li onClick={handleNavLinkClick}>
            <NavLink to="/log-in" className="log-in">
              Log In
            </NavLink>
          </li>
          <li onClick={handleNavLinkClick}>
            <NavLink to="/sign-up" className="sign-up">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
