import { NavLink } from "react-router-dom";

const WhyAAkSports = () => {
  return (
    <section className="overflow-hidden  w-full xl:w-[80%] mx-auto py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold uppercase tracking-tight text-gray-900 sm:text-4xl">
                AAK sports Club
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We provide best sports facility service in whole country.We have
                more than 6000 weekly customer.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    Clean Area
                  </dt>
                  <dd className="inline ml-1">
                    we have the cleanest sports area.You will enjoy the area
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    Sports instruments
                  </dt>
                  <dd className="inline ml-1">
                    we have huge collection of Sports instruments.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    Man support
                  </dt>
                  <dd className="inline ml-1">
                    We can provide men for you team. Just contact us for that
                  </dd>
                </div>
              </dl>
            </div>
            <div className="mt-10 flex items-center gap-x-6">
              <NavLink to={"/facility"}>
                <button className="rounded-md  px-3.5 bg-black py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
                  See all facility
                </button>
              </NavLink>
            </div>
          </div>
          <img
            src="https://www.playfinder.com/ng-assets/city_photos/london/drapers_field_football_pitch.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyAAkSports;
