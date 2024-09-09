import AboutUsHero from "../components/AboutUsComponents/AboutUs-Hero/AboutUs-Hero";
import Goals from "../components/AboutUsComponents/Goals/Goals";
import Ourstory from "../components/AboutUsComponents/OurStory/OurStory";
import OurTeam from "../components/AboutUsComponents/OurTeam/OurTeam";
import TeamMembers from "../components/AboutUsComponents/TeamMembers/TeamMembers"
import Footer from "../components/Footer/Footer";
import ReachUs from "../components/ReachUs/ReachUs";

const AboutUs = () => {
  return (
    <>
      <AboutUsHero />
      <Ourstory />
      <Goals />
      <OurTeam />
      <TeamMembers/>
      <ReachUs />
      <Footer />
    </>
  );
};
export default AboutUs;
