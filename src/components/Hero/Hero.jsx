import "./Hero.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../Utils/Button/Button";

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
          <Button className="hero-btn">Get Started</Button>
          {/* <button className="hero-btn">Get Started</button> */}
        </section>
      </main>
    </>
  );
};

export default Hero;
