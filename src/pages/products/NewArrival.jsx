import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Showcase from "./Showcase";

function NewArrival() {
  const arrivalData = [
    {
      img: "https://www.brandedcorporategift.com/content/images/home/canvas-backpack.webp",
      subTitle: "BAGPACK",
      title: "Canvas BackPack",
      amt: 1299,
    },
    {
      img: "https://www.brandedcorporategift.com/content/images/home/portronics-luxcell-powerbank.webp",
      subTitle: "POWER BANK",
      title: "Portronics Luxcell 10K Wireless Ba.....",
      amt: 1399,
    },
    {
      img: "https://www.brandedcorporategift.com/content/images/home/caresmith-body-massager.webp",
      subTitle: "MASSAGER",
      title: "Caresmith Gun Massager",
      amt: 1199,
    },
    {
      img: "https://www.brandedcorporategift.com/content/images/home/ebony-ss-water-bottle.webp",
      subTitle: "WATER BOTTLE",
      title: "Stainless Steel Water Bottle ",
      amt: 399,
    },
    {
      img: "https://www.brandedcorporategift.com/content/images/home/american-tourister-mini-carry-case.webp",
      subTitle: "AMERCIAN TOURISTER",
      title: "Amercian Tourister  Mini Carry Case ",
      amt: 799,
    },
  ];
  return (
    <>
      {" "}
      <div className=" w-[1200px]     mx-auto  ">
        <div className=" flex w-full   justify-between ">
          <div className="w-[300px] ">
            <h1 className="font-bold text-2xl">New Arrivals </h1>
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
        <div className="cardsss my-10">
          <swiper-container
            class="mySwiper"
            pagination-clickable="true"
            slides-per-view="auto"
            space-between="10"
            free-mode="true"
          >
            {arrivalData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="text-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-auto"
                  />
                  <h6 className="text-[11px] py-1 text-left">
                    {item.subTitle}
                  </h6>
                  <h1 className="text-left text-[14px] ">{item.title}</h1>
                  <h3 className="text-left font-semibold ">Rs. {item.amt}</h3>
                </div>
              </SwiperSlide>
            ))}
          </swiper-container>
        </div>
      </div>
      <Showcase />
    </>
  );
}

export default NewArrival;
