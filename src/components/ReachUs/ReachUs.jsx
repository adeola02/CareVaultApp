import "./ReachUs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ReachUs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="reach-us" data-aos="zoom-out-down">
      <h1>
        Need Help in keeping records? <br /> Yes, We can!
      </h1>
      <form className="reachus-form">
        <label htmlFor="text">
          <input id="text" placeholder="Enter your mail" />
        </label>
        <button className="btn">Send</button>
      </form>
    </section>
  );
};

export default ReachUs;
