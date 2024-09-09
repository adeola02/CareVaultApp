import "./Ourstory.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Story from "../../../assets//story.png";

const Ourstory = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="carevault-info-wrapper" data-aos="fade-up">
      <div className="carevault-info-text" data-aos="fade-up">
        <h1 className="carevault-info-header">OUR STORY </h1>
        <p>
          CareVault team has played a big role in fetching out a problem that
          patients do face and also bring out a simplified solution to it in
          order to make patients prevent being compromised by their safety in
          time of need. CareVault team are ready to give their best in solving
          patient’s misplacement of record at any time. Let’s see the CareVault
          team below:
        </p>
      </div>
      <div className="carevault-info-image">
        <img src={Story} alt="A health professional injecting a baby" />
      </div>
    </section>
  );
};

export default Ourstory;
