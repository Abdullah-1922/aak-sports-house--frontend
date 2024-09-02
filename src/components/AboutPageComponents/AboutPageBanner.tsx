

const AboutPageBanner = () => {
  return (
    <div className="w-full xl:w-[80%] mx-auto relative p-5 md:p-[5vw] rounded-tl-3xl text-black ">
      <h1 className="text-[4.5vw] font-semibold tracking-tight ">
        We Insure your Best playing experience.
      </h1>

      <div className="w-full flex justify-center items-center flex-col md:flex-row gap-5  border-t-[1px] pt-10 mt-5 border-[#98b62a] ">
        <div className="w-full md:w-1/2 ">
          <h1 className=" text-6xl md:text-7xl capitalize">Our Approach</h1>
          <p className="text-3xl pt-2 lg:text-[2.3vw]">to give make your time worthy.</p>
        
        </div>
        <div className="w-full md:w-1/2 bg-[url('https://img.freepik.com/free-vector/hand-drawn-ipl-cricket-illustration_23-2149210017.jpg?uid=R95887443&ga=GA1.1.413143150.1720889483&semt=ais_hybrid')]  bg-cover bg-center h-[70vh] rounded-3xl bg-[#545a3d]"></div>
      </div>
    </div>
  );
};

export default AboutPageBanner;
