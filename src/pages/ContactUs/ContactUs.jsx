import "./ContactUs.css";
// import HomeLogo from "../../assets/ion_home.png";
import HomeLogo from "../../assets/ion_home (1).png";
import PhoneLogo from "../../assets/telephone.png";
import MessangerLogo from "../../assets/messanger.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer/Footer";
import ReachUs from "../../components/ReachUs/ReachUs";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="contact-section">
      <main className="contact-main">
        <h1>Contact Us</h1>
        <p>
          Reach us today for reliable information and comprehensive support
          regarding your medical records.
        </p>
      </main>
      <section className="contact-cards-wrapper">
        <div className="contact-single-card" data-aos="fade-right">
          <img src={MessangerLogo} alt="home logo" width={40} />
          <p>VISIT US</p>
          <small>www.carevault.com</small>
        </div>
        <div className="contact-single-card" data-aos="fade-up">
          <img src={PhoneLogo} alt="contact logo" width={40} />
          <p>CALL US</p>
          <small>+2348114870814</small>
        </div>
        <div className="contact-single-card" data-aos="fade-left">
          <img src={HomeLogo} alt="home logo" width={40} />
          <p>CONTACT US</p>
          <small>carevault499.com</small>
        </div>
      </section>
      <ReachUs />
      <Footer />
    </section>
  );
};

export default ContactUs;
