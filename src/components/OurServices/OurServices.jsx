import "./OurServices.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const services = [
  {
    id: 118836,
    number: "01",
    header: "Accessibility",
    text: "CareVault makes your medical records easy to access in time of need.",
  },
  {
    id: 933372,
    number: "02",
    header: "Security",
    text: "CareVault makes your medical records secured for future references.",
  },
  {
    id: 499476,
    number: "03",
    header: "Reliability",
    text: "CareVault validate data, preventing errors and ensuring data accuracy.",
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
      <h1 className="ourservice-header">WHAT WE OFFER</h1>
      <ul className="service-list-wrapper" data-aos="fade-up">
        <div className="service-list">
          {services.map((service) => (
            <Service service={service} key={service.id} />
          ))}
        </div>
      </ul>
    </section>
  );
};

const Service = ({ service }) => {
  return (
    <li className="single-service-wrapper">
      <h1>{service.number}</h1>
      <h2>{service.header}</h2>
      <p className="text">{service.text}</p>
    </li>
  );
};

export default OurServices;
