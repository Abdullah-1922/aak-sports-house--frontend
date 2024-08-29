import { motion } from "framer-motion";

const HomeAbout = () => {
    
  return (
    
    <div className="w-full relative p-5 md:p-[10vw] rounded-tl-3xl text-black  rounded-tr-3xl bg-[#CDEA68]">
    <h1 className="text-[4.5vw] tracking-tight leading-[4.5vw]">
      We Insure your Best playing experience.
    </h1>

    <div className="w-full flex justify-center items-center flex-col md:flex-row gap-5  border-t-[1px] pt-10 mt-20 border-[#98b62a] ">
      <div className="w-full md:w-1/2 ">
        <h1 className="text-7xl capitalize">Our Approach</h1>
        <p className="text-[4vw]">to give make your time worthy.</p>
        <button className="px-10 uppercase flex items-center gap-4 py-6 mt-10 bg-zinc-900 rounded-full text-white">
          Read MOre
          <motion.div className="w-4 h-4 bg-zinc-100 rounded-full"></motion.div>
        </button>
      </div>
      <div className="w-full md:w-1/2 bg-[url('https://img.freepik.com/free-vector/hand-drawn-ipl-cricket-illustration_23-2149210017.jpg?uid=R95887443&ga=GA1.1.413143150.1720889483&semt=ais_hybrid')]  bg-cover bg-center h-[70vh] rounded-3xl bg-[#545a3d]"></div>
    </div>
  </div>
  );
};

export default HomeAbout;