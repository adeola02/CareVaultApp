import "./AboutUs-Hero.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUsHero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <main className="aboutus-hero-main-wrapper">
        <section className="aboutus-hero-main">
          <h1>About Us</h1>
          <p>
            Our story began with a simple yet profound realization: medical
            records are more than just documents – they hold the stories of
            lives, struggles, and triumphs
          </p>
        </section>
      </main>
    </>
  );
};

export default AboutUsHero;
