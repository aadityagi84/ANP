import React from "react";
import logo from "../assets/logos/anmol-logo.png";

function Header({ location }) {
  return (
    <>
      {/* top header */}
      <header>
        <div className="bg-[#525e7c] py-[2px] w-[100%]">
          <div className="container   text-white text-right mx-auto   text-[14px] ">
            <div className=" flex gap-2 justify-end">
              <span>
                Currency INR <i className="fa-solid fa-angle-down"></i>
              </span>{" "}
              <span>|</span>
              <span className="font-bold"> Franchise Enquiries</span>
              <span>|</span>
              <span className="font-bold"> Corporate Gifts </span>
              <span>|</span>
              <span>
                More <i className="fa-solid fa-angle-down"></i>
              </span>
            </div>
          </div>
        </div>
        {/* main header ===================== */}
        <div className="w-[100%]  bg-[#282f3f]">
          <div className="container mx-auto  flex   items-center  justify-between">
            <div className="logo w-[350px]">
              <img src={logo} alt="" />
            </div>
            <div className="search w-[400px]"></div>
            {/* <div className="location">{location}</div> */}
            <div className="location"></div>
            <div className="icons w-[320px]  flex justify-end gap-8 ">
              <div className=" flex flex-col items-center">
                <i className="fa-solid fa-cart-shopping text-white"></i>
                <h1 className="text-center text-[13px]  text-white font-semibold ">
                  Cart
                </h1>
              </div>
              <div className="flex flex-col items-center">
                <i className="fa-solid fa-user text-white "></i>
                <h1 className="text-center text-[13px] text-white font-semibold   ">
                  {" "}
                  Hi Guest{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
