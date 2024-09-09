import "./MedicalRecordInfo.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MedicalRecord from "../../assets/medicalRecord.png";

const MedicalRecordInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="medical-record-wrapper" data-aos="fade-up">
      <div className="medical-record-text" data-aos="fade-up">
        <h1 className="medical-record-header">UPLOAD AND DOWNLOAD</h1>
        <p>
          CareVault as a medical record platform makes it easier for patients to
          upload their medical records in three ways, which are as
          document(file), as an image and manual(space to type if not given
          records by your medical healthcare centers.
          <br />
          <br />
          Downloading medical records in CareVault platform allows you to either
          download as an image or as document(file).
        </p>
      </div>
      <div className="medical-record-image">
        <img src={MedicalRecord} alt="A health professional injecting a baby" />
      </div>
    </section>
  );
};

export default MedicalRecordInfo;
