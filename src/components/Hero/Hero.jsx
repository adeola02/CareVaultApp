import "./Hero.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <main className="hero-main-wrapper">
        <section className="hero-main">
          <h1>Your Health, Your Way</h1>
          <p>
            Securely access and manage your medical records anytime, anywhere.
          </p>
          <button className="btn">
          <Link to="/sign-up" className="hero-sign-in">
            Get Started
          </Link>
            </button>
        </section>
      </main>
    </>
  );
};

export default Hero;
