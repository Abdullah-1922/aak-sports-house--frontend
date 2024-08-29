import { motion } from "framer-motion";

const HomeMarquee = () => {
    
  return (
    <div>
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
    </div>
  );
};

export default HomeMarquee;