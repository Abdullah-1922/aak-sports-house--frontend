import howtodo from "../assets/howtodo.jpg";
import { useEffect, useRef } from "react";

import HowToDo from "../components/HomeComponents/HowToDo";
import HomeCounter from "../components/HomeComponents/HomeCountUp";
import LocomotiveScroll from "locomotive-scroll";
import HomeMarquee from "../components/HomeComponents/HomeMarquee";
import HomeAbout from "../components/HomeComponents/HomeAbout";
import HomeBanner from "../components/HomeComponents/HomeBanner";
import HomePageCards from "../components/HomeComponents/HomePageCards";
import Navbar from "../components/Common/Navbar";

const HomePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const image = imageRef.current;

      if (!section || !image) return; // Ensure refs are not null

      const sectionRect = section.getBoundingClientRect();
      if (sectionRect.bottom <= window.innerHeight) {
        image.style.position = "absolute";
        image.style.top = `${
          sectionRef.current.offsetHeight - image.offsetHeight
        }px`;
      } else {
        image.style.position = "fixed";
        image.style.top = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar/>
      {/* Hero Section */}
      <HomeBanner/>

      {/* How to Do Section */}
      <HowToDo secRef={sectionRef} imageRef={imageRef} image={howtodo} />
      {/* <HomeCounter/> */}
      <HomeCounter />
      {/* Home marquee */}
      <HomeMarquee />

      {/* about  */}
      <HomeAbout />
      <HomePageCards/>
    </div>
  );
};

export default HomePage;
