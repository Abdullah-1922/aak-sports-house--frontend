import howtodo from "../assets/howtodo.jpg";
import { useEffect, useRef } from "react";

import HowToDo from "../components/HomeComponents/HowToDo";
import HomeCounter from "../components/HomeComponents/HomeCountUp";
import LocomotiveScroll from "locomotive-scroll";
import HomeMarquee from "../components/HomeComponents/HomeMarquee";

import HomeBanner from "../components/HomeComponents/HomeBanner";
import HomePageCards from "../components/HomeComponents/HomePageCards";
import HomePageTestimonials from "../components/HomeComponents/HomePageTestimonials";
import HomePageImageGallery from "../components/HomeComponents/HomePageImageGallery";

const HomePage = () => {
  
   new LocomotiveScroll();
 
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    
      <HomeBanner />

   
      <HowToDo secRef={sectionRef} imageRef={imageRef} image={howtodo} />
     
      <HomeCounter />
     
      <HomeMarquee />

     
      <HomePageCards />
      <HomePageTestimonials/>
      <HomePageImageGallery/>
    </div>
  );
};

export default HomePage;
