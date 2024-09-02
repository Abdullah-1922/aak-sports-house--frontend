import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import ProfileMenu from "./ProfileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  const currentUser = useAppSelector((state) => state.auth.user);

  const NavbarPath = [
    { name: "Home", path: "/" },
    { name: "Facility", path: "/facility" },
    { name: "About", path: "/about" },
    { name: "Contact us", path: "/contact-us" },
    { name: "Dashboard", path: `/${currentUser?.role}/dashboard` },
  ];

  return (
    <nav className="py-5 relative z-[99] overflow-visible px-2 sm:px-4 rounded bg-zinc-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <NavLink to={"/"}>
          <div className="text-white font-extrabold font-serif text-2xl md:text-3xl lg:text-4xl">
            AAK
            <span className="text-text-lg md:text-xl lg:text-2xl">Sports</span>
          </div>
        </NavLink>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full lg:block lg:w-auto`}
          id="mobile-menu"
        >
          <div className="flex flex-col gap-2 mt-4 lg:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {NavbarPath.map((item, index) => {
              return (
                <div key={index} className="relative">
                  <NavLink to={currentUser ? item.path : "/login"}>
                    <h1 className="text-2xl text-center md:text-2xl text-white font-bold after:content-[''] after:bg-white after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl after:duration-300 after:absolute hover:after:w-[100%] ">
                      {item.name}
                    </h1>
                  </NavLink>
                </div>
              );
            })}
            {currentUser ? (
              <ProfileMenu currentUser={currentUser} />
            ) : (
              <div className="relative">
                <NavLink to={"/login"}>
                  <h1 className="text-2xl text-center md:text-2xl text-white font-bold after:content-[''] after:bg-white after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl after:duration-300 after:absolute hover:after:w-[100%] ">
                    Login
                  </h1>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
