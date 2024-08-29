import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
/* eslint-disable @typescript-eslint/no-unused-vars */
const HomePageCards = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Only trigger animation once
    threshold: 0.1, // Trigger animation when 10% of the component is visible
  });

  return (
    <div className="text-white w-full  min-h-screen">
      <div
        ref={ref}
        className="flex overflow-hidden font-semibold border-b-2 w-fit mx-auto gap-7"
      >
        {["Our", "Featured", "Facilities"].map((item, ind) => (
          <motion.p
            key={ind}
            initial={{ y: 200 }}
            animate={inView ? { y: 0 } : {}} // Only animate when in view
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8, delay: 0.1 }}
            className="text-[7vw] text-center"
          >
            {item}
          </motion.p>
        ))}
      </div>
      <div className="grid grid-cols-1 px-[15vw] mt-10 gap-10 md:grid-cols-2 ">
        {[1, 2, 3, 4].map((item, ind) => (
          <div
            key={ind}
            className="p-8 m-10 border  border-indigo-300 rounded-2xl hover:shadow hover:shadow-indigo-50 mx-auto w-full flex flex-col items-center"
          >
            <img
              src="https://www.playfinder.com/ng-assets/city_photos/london/tooting_leisure_centre_squash_court.jpg"
              className="shadow rounded-lg w-full h-full object-cover overflow-hidden border"
            />
            <div className="mt-8">
              <h4 className="font-bold text-xl">Exercises</h4>
              <p className="mt-2 text-white">
                Create Exercises for any subject with the topics you and your
                students care about.
              </p>
              <div className="mt-5">
                <button
                  type="button"
                  className="inline-flex items-center  rounded-md border border-transparent bg-[#CDEA68] px-6 py-3  font-bold hover:border hover:border-white  leading-4 hover:text-white text-black shadow-sm hover:bg-gray-900"
                >
                  See details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageCards;
