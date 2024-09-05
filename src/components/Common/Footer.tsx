import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black ">
      <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-white sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-2/12 border-r">
          <div className="text-sm uppercase text-indigo-600 font-bold">
            Menu
          </div>
          <ul>
            <Link to={"/"}>
              <li className="my-2">
                <div className="hover:text-indigo-600">Home</div>
              </li>
            </Link>
            <Link to={"/facility"}>
              <li className="my-2">
                <div className="hover:text-indigo-600">Facility</div>
              </li>
            </Link>
            <Link to={"/contact-us"}>
              <li className="my-2">
                <div className="hover:text-indigo-600">Contact Us</div>
              </li>
            </Link>
            <Link to={"/about"}>
              <li className="my-2">
                <div className="hover:text-indigo-600">About us</div>
              </li>
            </Link>
          </ul>
        </div>
        <div className="p-5 sm:w-7/12 border-r text-center">
          <h3 className="font-bold text-xl text-indigo-600 mb-4">
            Componentity
          </h3>
          <p className="text-white text-sm mb-10">
            We Best sports facility service provider in Bangladesh.
          </p>
        </div>
        <div className="p-5 sm:w-3/12">
          <div className="text-sm uppercase text-indigo-600 font-bold">
            Contact Us
          </div>
          <ul>
            <li className="my-2">
              <a className="hover:text-indigo-600" href="#">
                01861443532
              </a>
            </li>
            <li className="my-2">
              <a className="hover:text-indigo-600" href="#">
                kafikafi1922@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex py-5 m-auto text-white text-sm flex-col items-center border-t max-w-screen-xl">
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <a href="#" className="w-6 mx-1">
            <svg
              className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlSpace="preserve"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
            >
              <path
                id="Twitter"
                d="M24,12c0,6.627-5.373,12-12,12c-6.627,0-12-5.373-12-12c0-6.627 5.373-12 12-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168-0.786,0.281-1.213,0.333c0.436,-0.262 0.771,-0.676 0.929,-1.169c-0.408,0.242-0.86,0.418-1.341,0.513c-0.385,-0.411-0.934,-0.667-1.541,-0.667c-1.167,0-2.112,0.945-2.112,2.111c0,0.166 0.018,0.327 0.054,0.482c-1.754,-0.088-3.31,-0.929-4.352,-2.206c-0.181,0.311-0.286,0.674-0.286,1.061c0,0.733 0.373,1.379 0.94,1.757c-0.346,-0.01-0.672,-0.106-0.956,-0.264c-0.001,0.009-0.001,0.018-0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049-0.364,0.075-0.556,0.075c-0.137,0-0.269,-0.014-0.397,-0.038c0.268,0.838 1.048,1.449 1.972,1.466c-0.723,0.566-1.633,0.904-2.622,0.904c-0.171,0-0.339,-0.01-0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0 6.007,-3.217 6.007,-6.008c0,-0.091-0.002,-0.183-0.006,-0.273c0.413,-0.298 0.771,-0.67 1.054,-1.093Z"
              ></path>
            </svg>
          </a>
          <a href="#" className="w-6 mx-1">
            <svg
              className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlSpace="preserve"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
            >
              <path
                id="Facebook"
                d="M24,12c0,6.627-5.373,12-12,12c-6.627,0-12,-5.373-12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422 0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0-2.103,0.784-2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"
              ></path>
            </svg>
          </a>
          <a href="#" className="w-6 mx-1">
            <svg
              className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlSpace="preserve"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
            >
              <g id="Layer_1">
                <circle id="Oval" cx="12" cy="12" r="12"></circle>
                <path
                  id="Shape"
                  d="M19.05,8.362c0,-0.062 0,-0.125-0.063,-0.187l0,-0.063c-0.187,-0.562-0.687,-0.937-1.312,-0.937l0.125,0c0,0-2.438,-0.375-5.75,-0.375c-3.25,0-5.75,0.375-5.75,0.375l0.125,0c-0.625,0-1.125,0.375-1.313,0.937l0,0.063c0,0.062 0,0.125-0.062,0.187c-0.063,0.625-0.25,1.938-0.25,3.438c0,1.5 0.187,2.812 0.25,3.437c0,0.063 0,0.125 0.062,0.188l0,0.062c0.188,0.563 0.688,0.938 1.313,0.938l-0.125,0c0,0 2.437,0.375 5.75,0.375c3.25,0 5.75,-0.375 5.75,-0.375l-0.125,0c0.625,0 1.125,-0.375 1.312,-0.938l0,-0.062c0.063,-0.063 0.063,-0.125 0.063,-0.188c0.063,-0.625 0.25,-1.938 0.25,-3.437c0,-1.5-0.187,-2.813-0.25,-3.438Zm-9.313,5.813l0,-5.625l4.875,2.813l-4.875,2.812Z"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
          </a>
          <a href="#" className="w-6 mx-1">
            <svg
              className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlSpace="preserve"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
            >
              <path
                id="LinkedIn"
                d="M24,12c0,6.627-5.373,12-12,12c-6.627,0-12-5.373-12-12c0-6.627 5.373-12 12-12c6.627,0 12,5.373 12,12Zm-16.154,6.3l0,-9.62l-2.916,0l0,9.62l2.916,0Zm-1.482,-10.938c0.993,0 1.627,-0.655 1.627,-1.475c-0.018,-0.838-0.634-1.475-1.61-1.475c-0.978,0-1.626,0.637-1.626,1.475c0,0.82 0.634,1.475 1.593,1.475h0.016Zm3.648,10.938l2.917,0l0,-5.387c0,-0.29 0.021,-0.578 0.106,-0.785c0.232,-0.578 0.759,-1.177 1.644,-1.177c1.159,0 1.621,0.888 1.621,2.188l0,5.16l2.917,0l0,-5.537c0,-2.973-1.585,-4.356-3.698,-4.356c-1.739,0-2.519,0.967-2.953,1.639l-0.127,0.217l-0.017,-0.017l0,-1.404l-2.916,0c0.037,0.904 0,9.62 0,9.62Z"
              ></path>
            </svg>
          </a>
        </div>
        <div className="my-5">© 2024 YourCompany</div>
      </div>
    </div>
  );
};

export default Footer;
