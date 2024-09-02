import AboutPageBanner from "../components/AboutPageComponents/AboutPageBanner";
import AboutPageContactDetails from "../components/AboutPageComponents/AboutPageContactDetails";
import OurHistory from "../components/AboutPageComponents/OurHistory";
import WhyAAkSports from "../components/AboutPageComponents/WhyAAkSports";
import TeamSection from "../components/AboutPageComponents/TeamSection";

const About = () => {
  return (
    <div>
      <WhyAAkSports />
      <AboutPageBanner />
      <OurHistory />
      <TeamSection/>
      <AboutPageContactDetails />
    </div>
  );
};

export default About;
