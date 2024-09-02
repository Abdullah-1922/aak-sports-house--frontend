/* eslint-disable @typescript-eslint/no-explicit-any */

type THowToDoProps = {
  secRef: any;
  imageRef: any;
  image: string;
};
const HowToDo = ({ secRef, imageRef, image }: THowToDoProps) => {
  return (
    <section
      ref={secRef}
      className=" xl:flex xl:flex-col h-[100vh] lg:h-[100vh] relative"
      id="howToSection"
    >
      {/* Image Part */}
      <div
        ref={imageRef}
        className="w-1/2 bg-blue-400 hidden xl:block  h-[100vh] fixed top-0 left-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Text Part */}
      <div className=" xl:w-1/2  ml-auto h-full bg-zinc-900 xl:h-[100vh]  flex flex-col justify-center items-center relative z-[1]">
        {/* How its works */}

        <section
          id="works"
          className="relative bg-zinc-900 py-10 sm:py-16 xl:py-24"
        >
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl text-white font-extrabold mx-auto md:text-6xl lg:text-5xl">
                How to book a facility
              </h2>
              <p className="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed md:text-2xl">
                We are always for your help
              </p>
            </div>
            <div className="relative mt-12 lg:mt-20">
              <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block xl:hidden 2xl:block md:px-20 lg:     px-28">
                <img
                  alt=""
                  loading="lazy"
                  width="1000"
                  height="500"
                  decoding="async"
                  className="w-full"
                  style={{ color: "transparent" }}
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                />
              </div>
              <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3  gap-x-12">
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700">
                      1
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
                    Select facility
                  </h3>
                  <p className="mt-4 text-base text-gray-400 md:text-lg">
                    Select select according to your requirement
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700">
                      2
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
                    Check Available time
                  </h3>
                  <p className="mt-4 text-base text-gray-400 md:text-lg">
                    Check time Schedule and area.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700">
                      3
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
                    Book a facility
                  </h3>
                  <p className="mt-4 text-base text-gray-400 md:text-lg">
                    Book your Suitable facility.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
            style={{
              background:
                "radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)",
            }}
          />
        </section>
      </div>
    </section>
  );
};

export default HowToDo;
