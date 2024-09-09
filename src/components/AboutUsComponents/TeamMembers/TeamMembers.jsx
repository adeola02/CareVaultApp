import "./TeamMembers.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const members = [
  {
    id: 118,
    image: "",
    name: "Mustapha Sheu",
  },
  {
    id: 9372,
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQG9dE_TxzyeeA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711295259490?e=1730937600&v=beta&t=YTGzL9A2R89eEoDQU2uwYdoAK6XIfz6E-vi4F2W4lhw",
    name: "Ridwan Adebosin",
  },
  {
    id: 4476,
    image: "",
    name: "Akintunde Abdul-Quadri",
  },
  {
    id: 4476,
    image: "",
    name: "Esther Raji",
  },
  {
    id: 4476,
    image: "",
    name: "Okoro Miracle Chidera",
  },
];

const TeamMembers = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section
      className="our-team"
      aria-label="A section that consisted of team-members list on vaccinations"
    >
      <ul className="team-members-list" data-aos="fade-up">
        {members.map((member) => (
          <Member member={member} key={member.id} />
        ))}
      </ul>
    </section>
  );
};

const Member = ({ member }) => {
  return (
    <li className="single-member-wrapper">
      <div className="member-image">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="member-name">
        <p className="name">{member.name}</p>
      </div>
    </li>
  );
};

export default TeamMembers;
