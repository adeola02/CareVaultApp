import CarevaultInfo from "../components/CarevaultInfo/CarevaultInfo";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import MedicalRecordInfo from "../components/MedicalRecordInfo/MedicalRecordInfo";
import OurServices from "../components/OurServices/OurServices";
import ReachUs from "../components/ReachUs/ReachUs";

const Home = () => {
  return (
    <>
      <Hero />
      <CarevaultInfo />
      <OurServices />
      <MedicalRecordInfo />
      <ReachUs />
      <Footer />
    </>
  );
};
export default Home;
