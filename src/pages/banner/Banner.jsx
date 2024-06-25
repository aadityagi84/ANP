import React from "react";
import "./banner.css";

function Banner() {
  return (
    <>
      <div className="banner-clone w-[1200px]  mx-auto py-10 flex">
        <div className=" w-1/2   ">
          <div className="py-2">
            <div className="main-banner">
              <img
                src="https://www.brandedcorporategift.com/content/images/home/gift-hamper.webp"
                alt="Corporate Gift Hampers"
              />
              <div className="main-banner-content ">
                <h4>Trending Now</h4>

                <h3>Corporate Gift Hampers</h3>
                <br />
                <br />
                <a href="#order-now" className="">
                  Order Now <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div className="small-bannerr">
              <img
                src="https://www.brandedcorporategift.com/content/images/home/gifts-under-1000.webp"
                style={{ width: "100%", height: "100%" }}
                alt="Corporate Gifts under Rs. 1000"
              />
              <div className="small-banner-content">
                <h3>Corporate Gifts under Rs. 1000</h3>
                <p>
                  Find the best of corporate gifts within your allocated budget
                  connect with our expert team for any assistance required.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="small-banners   w-1/2">
          <div className="small-banner">
            <img
              src="https://www.brandedcorporategift.com/content/images/home/logo-branded-tshirts.webp"
              alt="Logo T-Shirts"
            />
            <div className="small-banner-content">
              <h3 className="px-16">Logo T-Shirts</h3>
            </div>
          </div>
          <div className="small-banner">
            <img
              src="https://www.brandedcorporategift.com/content/images/home/logo-branded-tshirts.webp"
              alt="Gadget Gifts"
            />
            <div className="small-banner-content">
              <h3 className="px-16">Gadget Gifts</h3>
            </div>
          </div>
          <div className="small-banner">
            <img
              src="https://www.brandedcorporategift.com/content/images/home/logo-branded-tshirts.webp"
              alt="Travel & Holiday Gifts"
            />
            <div className="small-banner-content">
              <h3 className="px-8">Travel & Holiday Gifts</h3>
            </div>
          </div>
          <div className="small-banner">
            <img
              src="https://www.brandedcorporategift.com/content/images/home/logo-branded-tshirts.webp"
              alt="Popular Brands"
            />
            <div className="small-banner-content">
              <h3 className="px-16">Popular Brands</h3>
            </div>
          </div>

          <div className="small-banner">
            <img
              src="https://www.brandedcorporategift.com/content/images/home/logo-branded-tshirts.webp"
              alt="Backpacks For Employees"
            />
            <div className="small-banner-content">
              <h3 className="px-4">Backpacks For Employees</h3>
            </div>
          </div>
          <div className="small-banner">
            <img
              src="https://www.brandedcorporategift.com/content/images/home/logo-branded-tshirts.webp"
              alt="Same Day Dispatch Gifts"
            />
            <div className="small-banner-content">
              <h3 className="font-bold  text-[24px]">Super Fast!</h3>
              <p className="text-center w-[250px] mx-auto">
                Same Day Dispatch Gifts (with logo printing)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
