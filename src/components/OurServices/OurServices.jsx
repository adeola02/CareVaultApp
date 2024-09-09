import "./OurServices.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const services = [
  {
    id: 118836,
    image:
      "https://www.beyondceliac.org/wp-content/uploads/2021/02/celiac-disease-covid-vaccine-768x512.png",
    text: "CareVault makes patients to have access to the medical records kept by to anytime and anywhere. ",
  },
  {
    id: 933372,
    image:
      "https://t4.ftcdn.net/jpg/01/22/55/81/240_F_122558130_bmc27X1wYDEFxPZPEu8isc0ilwLMmZFD.jpg",
    text: "CareVault makes patients medical records more secured in order to prevent any misconduct to the patient’s medical record.",
  },
  {
    id: 499476,
    image:
      "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/9721/live/6309d680-3e23-11ed-9ae9-959994b8a64c.jpg.webp",
    text: "CareVault helps patients to sort out any problem concerning their medical record in time of need.",
  },
];

const OurServices = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section
      className="our-services"
      aria-label="A section that consisted of service list on vaccinations"
    >
      <ul className="service-list" data-aos="fade-up">
        {services.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </ul>
    </section>
  );
};

const Service = ({ service }) => {
  return (
    <li className="single-service-wrapper">
      <div className="service-image">
        <img src={service.image} alt={service.text} />
      </div>
      <div className="service-text">
        <p className="text">{service.text}</p>
      </div>
    </li>
  );
};

export default OurServices;
