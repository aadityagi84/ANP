import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
function News() {
  const arrivalDatad = [
    {
      img: "https://www.brandedcorporategift.com/content/images/home/blog-banner-top-products.webp",
      subTitle: "Jan, 2024",
      title: "115 Most Popular Unique Corporate Gift Ideas in 2024",
      amt: "READ MORE",
    },
    {
      img: "https://www.brandedcorporategift.com/content/images/home/blog-banner-sustainable.webp",
      subTitle: "Sep, 2023",
      title: "Go Green: Sustainable Corporate Gifting Solutions",
      amt: "READ MORE",
    },
    {
      img: "https://www.brandedcorporategift.com/content/images/home/blog-banner-swag-items.webp",
      subTitle: "Mar,2024",
      title: "10 Welcome Kit Ideas to amaze your new joining employees",
      amt: "READ MORE",
    },
  ];
  return (
    <>
      {" "}
      <div className=" w-[1200px]     mx-auto  mt-16">
        <div className=" flex w-full   justify-between ">
          <div className="w-[300px] ">
            <h1 className="font-bold text-2xl">Latest News </h1>
          </div>
          <div className="w-[110px] ">
            <a
              href=""
              className="text-[14px] font-bold hover:text-red-600 duration-500"
            >
              VIEW MORE <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <hr />
        <div className="cardsss my-10 ">
          <swiper-container
            class="mySwiper"
            pagination-clickable="true"
            slides-per-view="auto"
            space-between="10"
            free-mode="true"
          >
            {arrivalDatad.map((item, index) => (
              <SwiperSlide key={index} style={{ width: "384px" }}>
                <div className="text-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-auto"
                  />
                  <h6 className="text-[11px] py-1 text-left">
                    {item.subTitle}
                  </h6>
                  <h1 className="text-left  font-semibold ">{item.title}</h1>
                  <h3 className="text-left  text-[14px] py-4 ">
                    {" "}
                    {item.amt} <i className="fa-solid fa-arrow-right"></i>
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </swiper-container>
        </div>
      </div>
    </>
  );
}

export default News;
