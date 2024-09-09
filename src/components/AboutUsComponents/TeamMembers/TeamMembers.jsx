import "./TeamMembers.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const members = [
  {
    id: 118,
    image: "https://scontent.flos5-1.fna.fbcdn.net/v/t39.30808-6/363722890_300642815792228_43881026871286592_n.jpg?stp=dst-jpg_s206x206&_nc_cat=105&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeHAVTqscvSoNyZKCxTd-LPt65GAuwO05fPrkYC7A7Tl8644AuzCxis8Ni6JJpXfzQKsNZXE0gdF8zLIlljVsDFt&_nc_ohc=lOX0UWU66ckQ7kNvgGY9iFJ&_nc_zt=23&_nc_ht=scontent.flos5-1.fna&oh=00_AYCrKEJ-PsB3LrPTl3nTu69dIktLCvdpOCIVvB4uDlJeNg&oe=66E4DBF6 ",
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
    image: "https://scontent.flos5-3.fna.fbcdn.net/v/t39.30808-1/302132477_1264524784283213_3765369479081575717_n.jpg?stp=c0.57.960.960a_dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEI11GM_tL94wWuX5Q2wYfMOsxE0rTOUTM6zETStM5RM7gPMePcolNkRXI8Z3WD7TdvjXqqX1DxRZ8taLLiu8C7&_nc_ohc=fDiVzkv3DfgQ7kNvgFDRonl&_nc_ht=scontent.flos5-3.fna&oh=00_AYA8qXJcladVeyN8QTubfCSrpQVUG0O4Mksu6BVU5gcGAQ&oe=66E4BEFC",
    name: "Akintunde Abdul-Quadri",
  },
  {
    id: 4476,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_JlCFnIGX5omgjEjgV9F3sBRq14eTERK9w&s ",
    name: "Esther Raji",
  },
  {
    id: 4476,
    image: "https://res.cloudinary.com/dzjlqmjht/image/upload/v1725887128/users_dp/qznphvhsdggsdbsotukp.jpg ",
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
