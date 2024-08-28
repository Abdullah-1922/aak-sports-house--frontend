import { motion } from "framer-motion";

import heroSvg from "../assets/realheroimg.png";
import howtodo from "../assets/howtodo.jpg";
import { useEffect, useRef, useState } from "react";
import { Button } from "antd";
import HowToDo from "../components/HomeComponents/HowToDo";
import HomeCounter from "../components/HomeComponents/HomeCountUp";
import LocomotiveScroll from "locomotive-scroll";

const HomePage = () => {
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

  const [width, setWidth] = useState("9vw");

  // Update width on screen size change
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Tailwind's "md" breakpoint
        setWidth("17vw");
      } else {
        setWidth("9vw");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Hero Section */}

      <div
        data-scroll
        data-scroll-speed="-.3"
        className="w-full   lg:px-[10vw] bg-zinc-900 text-white style={{ backgroundAttachment: 'fixed' }} bg-[url('./assets/fullbackground.svg')]  bg-fixed bg-cover bg-center  h-screen  xl:min-h-[100vh] flex items-center  relative z-[9999]     "
      >
        <div className="lg:mt-52 w-1/2  mx-auto  text-center lg:text-start    ">
          {["Play", "Train", "Achieve"].map((item, index) => (
            <div key={index} className="masker">
              <div className="w-fit  flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className=" mr-[1.4vw] rounded-md  bg-[cover] bg-[center] relative h-[13vw]  md:h-[5.7vw] bg-[url('data:image/jpeg;base64,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')] bg-red-600 "
                  ></motion.div>
                )}
                <h1 className="uppercase pt-[1vw]   text-[20vw] md:text-[9vw] font-['myFont'] leading-[.7] ">
                  {item}
                </h1>
              </div>
            </div>
          ))}
          <Button className="text-white text-lg mt-10 px-2 md:px-10 py-5 md:py-7 font-bold uppercase bg-red-600 ">
            Start from today
          </Button>
        </div>
        <div className=" rounded-3xl w-1/2 z-[3]  hidden lg:block ">
          <img className="w-full h-full" src={heroSvg} alt="" />
        </div>
      </div>

      {/* How to Do Section */}
      <HowToDo secRef={sectionRef} imageRef={imageRef} image={howtodo} />
      {/* <HomeCounter/> */}

      <div
        data-scroll
        data-scroll-section
        data-scroll-speed=".1"
        className="w-full rounded-tr-3xl rounded-tl-3xl  py-20 text-white bg-[rgb(0,77,67)]"
      >
        <div className="text  py-2 overflow-hidden gap-10 border-b-2 border-t-2 border-zinc-300 flex whitespace-nowrap ">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            whileHover={{ scale: 1.05, color: "#fff" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 30 }}
            className="text-[22vw] flex -mt-2 leading-none font-['myFont']  font-semibold uppercase  "
          >
            <div className="flex gap-2">
              <h1>Play-</h1>
              <h1>Win-</h1>
              <h1>Train-</h1>
              <h1>Compete-</h1>
              <h1>Achieve</h1>
            </div>

            <div className="flex gap-2">
              <h1>-Play-</h1>
              <h1>Win-</h1>
              <h1>Train-</h1>
              <h1>Compete-</h1>
              <h1>Achieve</h1>
            </div>
          </motion.div>
        </div>
      </div>

      {/* about  */}

      <div className="w-full relative p-5 md:p-[10vw] rounded-tl-3xl text-black  rounded-tr-3xl bg-[#CDEA68]">
        <h1 className="text-[4.5vw] tracking-tight leading-[4.5vw]">
          We Insure your Best playing experience.
        </h1>

        <div className="w-full flex justify-center items-center flex-col md:flex-row gap-5  border-t-[1px] pt-10 mt-20 border-[#98b62a] ">
          <div className="w-full md:w-1/2 ">
            <h1 className="text-7xl capitalize">Our Approach</h1>
            <p className="text-[4vw]">TO give </p>
            <button className="px-10 uppercase flex items-center gap-10 py-6 mt-10 bg-zinc-900 rounded-full text-white">
              Read MOre
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
          </div>
          <div className="w-full md:w-1/2 bg-[url('https://img.freepik.com/free-vector/hand-drawn-ipl-cricket-illustration_23-2149210017.jpg?uid=R95887443&ga=GA1.1.413143150.1720889483&semt=ais_hybrid')]  bg-cover bg-center h-[70vh] rounded-3xl bg-[#545a3d]"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
