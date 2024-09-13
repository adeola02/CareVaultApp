import "./Goals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Objective from "../../../assets/goals.png";

const Goals = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="goals-info-wrapper" data-aos="fade-up">
      <div className="goals-info-image">
        <img src={Objective} alt="A health professional injecting a baby" />
      </div>
      <div className="goals-info-text" data-aos="fade-up">
        <h1 className="goals-info-header">GOALS AND OBJECTIVES </h1>
        <p>
          To create a platform where patients can have access to their medical
          record safely at anytime and in anywhere in other to reduce
          misplacement of medical records. And also, to make the medical records
          accessible, secured and reliable to patients at any time and anywhere.
        </p>
      </div>
    </section>
  );
};

export default Goals;
