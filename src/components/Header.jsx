import React from "react";
import logo from "../assets/logos/logo (1).png";

function Header({ location }) {
  return (
    <>
      {/* top header */}
      <header>
        <div className="bg-[#707428] py-[2px] w-[100%]">
          <div className="container   text-white text-right mx-auto   text-[14px] ">
            <div className=" flex gap-2 justify-end">
              <span>
                Currency INR <i className="fa-solid fa-angle-down"></i>
              </span>{" "}
              <span>|</span>
              <span className="font-bold"> Franchise Enquiries</span>
              <span>|</span>
              <span className="font-bold"> Corporate Gifts </span>
              <span>
                More <i className="fa-solid fa-angle-down"></i>
              </span>
            </div>
          </div>
        </div>
        {/* main header ===================== */}
        <div className="w-[100%]  bg-[#7d8035]">
          <div className="container mx-auto border flex   items-center  justify-between">
            <div className="logo w-[180px]">
              <img src={logo} alt="" />
            </div>
            <div className="search w-[400px]">
              <form className="max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full py-[10px] ps-2 text-sm text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 placeholder-gray-500  "
                    placeholder="Search flowers,cakes , gifts, etc"
                    required
                  />

                  <div className="absolute inset-y-0 start-0 flex items-center left-[93%] pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-600 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  {/* <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button> */}
                </div>
              </form>
            </div>
            <div className="location">{location}</div>
            <div className="icons"></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
