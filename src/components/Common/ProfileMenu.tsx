import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const ProfileMenu = ({ currentUser }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const dispatch = useAppDispatch();
  // Close dropdown if clicked outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="  flex  relative justify-center mx-auto">
      <img
        onClick={toggleDropdown}
        className="w-[45px]  cursor-pointer rounded-full  h-[45px]"
        src={currentUser?.image}
        alt=""
      />
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute overflow-hidden top-full  lg:-left-36 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-1"
        >
          <div>
            <p className="text-center text-lg">{currentUser?.name}</p>
            <p className="text-center text-lg">role : {currentUser?.role}</p>
          </div>

          <ul className="py-2 text-sm text-gray-700">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Earnings
              </a>
            </li>
            <li>
              <a
                onClick={() => dispatch(logout())}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
