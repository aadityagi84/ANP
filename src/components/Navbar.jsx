import React from "react";

function Navbar({ className }) {
  return (
    <div className={`w-full  ${className}  bg-white `}>
      <div
        className={`container mx-auto flex items-center justify-evenly bg-white pb-2 pt-2`}
      >
        <ul className="flex  gap-10 items-center  justify-center">
          <li className="font-semibold text-[#c31c18] "> Home</li>
          <li className="font-semibold text-[#222222]">
            Products <i className="fa-solid fa-angle-down"></i>
          </li>
          <li className="font-semibold text-[#222222]">
            Categories <i className="fa-solid fa-angle-down"></i>
          </li>
          <li className="text-[#222222] font-semibold ">Brands</li>
          <li className="font-semibold text-[#c31c18]">
            Collections <i className="fa-solid fa-angle-down"></i>
          </li>
          <li className="font-semibold text-[#222222]">Blog</li>
          <li className="font-semibold text-[#222222]">About Us</li>
        </ul>
        <div className="w-[400px]">
          <form className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full py-[10px] ps-2 text-sm text-gray-900 border outline-none border-gray-300 rounded-md bg-gray-50 placeholder-gray-500  "
                placeholder="Search flowers,cakes , gifts, etc"
                required
              />

              {/* <div className="absolute inset-y-0 start-0 flex items-center left-[93%]  pointer-events-none">
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
                  </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
