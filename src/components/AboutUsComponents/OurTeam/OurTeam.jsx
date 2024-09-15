import "./Ourteam.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Team from "../../../assets/Team.png";

const OurTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="our-team-info-wrapper" data-aos="fade-up">
      <h2 className="our-team-info-header sm-block">OUR TEAM</h2>
      <div className="our-team-info-image">
        <img src={Team} alt="A health professional injecting a baby" />
      </div>
      <div className="our-team-info-text" data-aos="fade-up">
        <h2 className="our-team-info-header lg-none">OUR TEAM </h2>
        <p>
          CareVault team has played a big role in fetching out a problem that
          patients do face and also bring out a simplified solution to it in
          order to make patients prevent being compromised by their safety in
          time of need. CareVault team are ready to give their best in solving
          patient’s misplacement of record at any time. Let’s see the CareVault
          team below:
        </p>
      </div>
    </section>
  );
};

export default OurTeam;
