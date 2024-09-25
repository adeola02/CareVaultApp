import "./TeamMembers.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const members = [
  {
    id: 118,
    image:
      "https://scontent.flos5-1.fna.fbcdn.net/v/t39.30808-6/363722890_300642815792228_43881026871286592_n.jpg?stp=dst-jpg_s206x206&_nc_cat=105&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeHAVTqscvSoNyZKCxTd-LPt65GAuwO05fPrkYC7A7Tl8644AuzCxis8Ni6JJpXfzQKsNZXE0gdF8zLIlljVsDFt&_nc_ohc=lOX0UWU66ckQ7kNvgGY9iFJ&_nc_zt=23&_nc_ht=scontent.flos5-1.fna&oh=00_AYCrKEJ-PsB3LrPTl3nTu69dIktLCvdpOCIVvB4uDlJeNg&oe=66E4DBF6 ",
    name: "Mustapha Sheu",
  },
  {
    id: 9372,
    image:
      "https://res.cloudinary.com/dzjlqmjht/image/upload/v1726684156/users_dp/as3y4tjqowewa4ir2oqb.jpg",
    name: "Ridwan Adebosin",
  },
  {
    id: 4476,
    image:
    "https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-1/302132477_1264524784283213_3765369479081575717_n.jpg?stp=c0.57.960.960a_dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEJZSlIRcaEtEClKP-MGynXOsxE0rTOUTM6zETStM5RMzCwI_nJTT8Nk2LRpo2y1gqeymHseYYKmIY7N25yEFms&_nc_ohc=JcjOjDfC-foQ7kNvgEMBTcx&_nc_ht=scontent.flos1-1.fna&_nc_gid=AS0zYTf96hLbeOpIuogfDiB&oh=00_AYAOoemGVK6RpWsvDpH_uwMB53P_LbfO5UM9nebYTHajlA&oe=66FA7FBC",
    name: "Akintunde Quadri",
  },
  {
    id: 44767,
    image: "../../../assets/Esther.jpg",
    name: "Esther Raji",
  },
  {
    id: 48476,
    image:
      "https://res.cloudinary.com/dzjlqmjht/image/upload/v1725887128/users_dp/qznphvhsdggsdbsotukp.jpg ",
    name: "Okoro Miracle ",
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
