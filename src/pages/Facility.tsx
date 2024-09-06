/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { useGetFacilitiesQuery } from "../redux/features/facility/facilityApi";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Facility = () => {
  const { data: facilities, isLoading } = useGetFacilitiesQuery(undefined);
 console.log(facilities);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState<string>("");

  const itemsPerPage = 6;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [searchQuery, setSearchQuery] = useState("");
  console.log(currentPage, priceRange, searchQuery);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (isLoading) {
    return <div>Loading</div>;
  }

  const totalItems = facilities?.data?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToTop();
  };

  const currentData = facilities?.data
    ?.filter((facility: any) => {
      const matchesSearch =
        facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        facility.location.toLowerCase().includes(searchQuery.toLowerCase());

      if (priceRange) {
        const [rangeStart, rangeEnd] = priceRange.split("-").map(Number);
        const price = facility.pricePerHour;
        return matchesSearch && price >= rangeStart && price <= rangeEnd;
      }

      return matchesSearch;
    })
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Filtering
  const getPriceRanges = () => {
    if (!facilities?.data?.length) return [];

    const prices = facilities.data.map(
      (facility: any) => facility.pricePerHour
    );

    const maxPrice = Math.max(...prices);

    const ranges: string[] = [];
    for (let start = 0; start <= maxPrice; start += 100) {
      const end = start + 99;
      ranges.push(`${start}-${end}`);
    }
    return ranges;
  };

  return (
    <div className="w-full bg-[#e3e7e9] ">
      <p className="text-4xl lg:text-5xl text-center pt-10 font-bold">
        All Facilities
      </p>
      <div className="">
        <div className="py-8">
          <div className="max-w-screen-xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            <select
              className="px-5 py-4 outline-none rounded-lg text-lg font-bold text-gray-700"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="" disabled>
                Filter by Price Per Hour
              </option>
              <option value="">All Prices</option>
              {getPriceRanges().map((range, index) => (
                <option key={index} value={range}>
                  {range}
                </option>
              ))}
            </select>

            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <div className="bg-white p-4 rounded-lg">
                <div className="relative bg-inherit">
                  <input
                    value={searchQuery}
                    onChange={(e) => {
                      console.log(e.target.value);
                      return setSearchQuery(e.target.value);
                    }}
                    type="text"
                    id="username"
                    name="username"
                    className="peer  bg-transparent h-10 w-full rounded-lg text-black placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                    placeholder="Type inside me"
                  />
                  <label className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">
                    Search
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:px-16 xl: md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8 lg:gap-12 p-10 ">
        {currentData?.map((item: any, index: number) => (
          <div
            className="w-full   p-10 border-2 border-black rounded-tr-[50px]"
            key={index}
          >
            <div className="w-full  rounded-tr-[50px] h-[270px] md:h-[320px] lg:h-[360px]">
              <img
                className="w-full  rounded-tr-[50px] h-full "
                src={item.image}
                alt=""
              />
            </div>
            <p className="text-xl font-semibold py-5 ">{item?.name}</p>
            <p className="text-xl font-bold text-center">
              Price per hour: ${item?.pricePerHour}
            </p>
            <NavLink to={`/facility/${item._id}`}>
              <Button className="  w-full mt-6 py-4 text-white font-bold bg-black mx-auto text-center">
                Details
              </Button>{" "}
            </NavLink>
          </div>
        ))}
      </div>
      <div
        className={` pb-10 ${searchQuery ? "hidden" : ""} ${
          priceRange ? "hidden" : ""
        }  flex justify-center mt-8`}
      >
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="mx-2 px-4 py-2 bg-blue-700  text-black rounded disabled:opacity-50"
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber + 1)}
            className={`mx-2 px-4 py-2 rounded ${
              currentPage === pageNumber + 1
                ? " text-black font-bold text-lg"
                : "text-white"
            }`}
          >
            {pageNumber + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="mx-2 px-4 py-2 bg-blue-700 text-black rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      {currentData?.length < 1 && (
        <div className="text-4xl h-[50vh] text-center font-bold">
          No data Found
        </div>
      )}
    </div>
  );
};

export default Facility;
