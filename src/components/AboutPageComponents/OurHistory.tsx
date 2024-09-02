const OurHistory = () => {
  return (
    <div className="w-full py-20 xl:w-[80%] mx-auto">
      <div className=" bg-[#F4E4E4] p-4">
        <p className="text-center  text-3xl md:text-4xl lg:text-5xl font-bold py-5 pb-10 ">
          Out History
        </p>
        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          <div className="flex md:contents flex-row-reverse">
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 className="text-lg font-semibold lg:text-xl">2021</h3>
              <p className="mt-2 leading-6">
                We start our journey in Chottogram with cricket Club.
              </p>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-indigo-300"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
              <h3 className="text-lg font-semibold lg:text-xl">2022</h3>
              <p className="mt-2 leading-6">
                With a lot of response of people we start a full sports club
                with cricket and football.
              </p>
            </div>
          </div>

          <div className="flex md:contents flex-row-reverse">
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 className="text-lg font-semibold lg:text-xl">2023</h3>
              <p className="mt-2 leading-6">
                We start a new branch in Dhaka with more sports.
              </p>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-indigo-300"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
              <h3 className="text-lg font-semibold lg:text-xl">2024</h3>
              <p className="mt-2 leading-6">
                We have 9 branch all over the Bangladesh.
              </p>
              <span className="absolute text-sm  -top-5 left-2 whitespace-nowrap">
                Date 4
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
