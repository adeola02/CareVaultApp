import "./CarevaultInfo.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CareVaultHome from "../../assets/carevaulthome.png";

const CarevaultInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="carevault-info-wrapper" data-aos="fade-up">
      <div className="carevault-info-text" data-aos="fade-up">
        <h1 className="carevault-info-header">CAREVAULT </h1>
        <p>
          CareVault is a medical record platform that tends to provide a means
          where patients can easily keep any of their medical record and have
          access to it securely at anytime and in anywhere.
          <br />
          <br />
          It’s a platform that allows patients to keep their medical and have
          secured access to it in time of need.
        </p>
      </div>
      <div className="carevault-info-image">
        <img src={CareVaultHome} alt="A health professional injecting a baby" />
      </div>
    </section>
  );
};

export default CarevaultInfo;
