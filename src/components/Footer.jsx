import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-[#282f3f] w-full h-auto ">
        <div className="container mx-auto   p-4 md:p-6 lg:p-8">
          <div className="flex flex-wrap mx-4 justify-between  ">
            <div className="w-[400px]   text-white   p-4 md:p-6 lg:p-8">
              <h2 className="text-lg font-bold mb-4">Contact Info</h2>
              <ul className="list-none mb-4">
                <li className="mb-2 text-[15px]">
                  <span className="text-white font-semibold">PHONE: </span>
                  <a
                    href="tel:+****"
                    className="text-white hover:text-red-700 duration-700"
                  >
                    (+91) 99209-****
                  </a>
                </li>
                <li className="mb-2 text-[15px]">
                  <span className="text-white font-semibold">EMAIL: </span>
                  <a
                    href="mailto:info@procter.in"
                    className="text-white hover:text-red-700 duration-700"
                  >
                    Nuovasoft.in
                  </a>
                </li>
                <li className="mb-2 text-[15px]">
                  <span className="text-white font-semibold">ADDRESS: </span>
                  Noida ,
                </li>
                <li className="mb-2 text-[15px]">
                  <span className="text-white font-semibold">
                    WORKING DAYS / HOURS:
                  </span>
                  <p>Mon - Sat / 9:00 AM - 8:00 PM</p>
                </li>
              </ul>
            </div>
            <div className=" w-[300px]   text-white  md:p-6 lg:p-8">
              <h2 className="text-lg font-bold mb-4">Important Links</h2>
              <ul className="list-none mb-4">
                <li className="mb-2 text-[15px]">
                  <a
                    href="#"
                    className="text-white hover:text-red-700 duration-700"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-2 text-[15px]">
                  <a
                    href="#"
                    className="text-white hover:text-red-700 duration-700"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="mb-2 text-[15px]">
                  <a
                    href="#"
                    className="text-white hover:text-red-700 duration-700"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-2 text-[15px]">
                  <a
                    href="#"
                    className="text-white hover:text-red-700 duration-700"
                  >
                    FAQs
                  </a>
                </li>
                <li className="mb-2 text-[15px]">
                  <a
                    href="#"
                    className="text-white hover:text-red-700 duration-700"
                  >
                    Blog
                  </a>
                </li>
                <li className="mb-2 text-[15px]">
                  <a
                    href="#"
                    className="text-white hover:text-red-700 duration-700"
                  >
                    Sell @ Procter
                  </a>
                </li>
                <li className="mb-2 text-[15px]">
                  <a
                    href="#"
                    className="text-white hover:text-red-700 duration-700"
                  >
                    Terms & Condition
                  </a>
                </li>
                <li className="mb-2 text-[15px]">
                  <a
                    href="#"
                    className="text-white hover:text-red-700 duration-700"
                  >
                    Work with us
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-[300px]  text-white  p-4 md:p-6 lg:p-8">
              <h2 className="text-lg font-bold mb-4">Quick Shop</h2>
              <ul className="list-none mb-4">
                <li className="mb-2 text-[15px]">
                  <a
                    href="#"
                    className="text-white hover:text-red-700 duration-700"
                  >
                    Diwali Gifts
                  </a>
                </li>
                <li className="mb-2 text-[15px]">
                  <a
                    href="#"
                    className="text-white hover:text-red-700 duration-700"
                  >
                    Corporate T-shirts
                  </a>
                </li>
                <li className="mb-2 text-[15px]">
                  <a
                    href="#"
                    className="text-white hover:text-red-700 duration-700"
                  >
                    Backpacks for Team
                  </a>
                </li>
                <li className="mb-2 text-[15px]">
                  <a
                    href="#"
                    className="text-white hover:text-red-700 duration-700"
                  >
                    Pen, Notebook, Gift Sets
                  </a>
                </li>
                <li className="mb-2 text-[15px]">
                  <a
                    href="#"
                    className="text-white hover:text-red-700 duration-700"
                  >
                    Smart Watches
                  </a>
                </li>
                <li className="mb-2 text-[15px]">
                  <a
                    href="#"
                    className="text-white hover:text-red-700 duration-700"
                  >
                    Gifts under Rs. 1000
                  </a>
                </li>
                <li className="mb-2 text-[15px]">
                  <a
                    href="#"
                    className="text-white hover:text-red-700 duration-700"
                  >
                    Home & Kitchen Utility
                  </a>
                </li>
                <li className="mb-2 text-[15px]">
                  <a
                    href="#"
                    className="text-white hover:text-red-700 duration-700"
                  >
                    Corporate Gift Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full bg-[black] text-white text-center  py-4">
        <h1>Proudly Made In India | © 2024. All Rights Reserved</h1>
      </div>
    </>
  );
}

export default Footer;
