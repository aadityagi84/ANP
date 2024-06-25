import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
function FeatureProduct() {
  const arrivalDatad = [
    {
      img: "https://www.brandedcorporategift.com/content/images/home/amazon-echo-dot-5.webp",
      subTitle: "SMART DEVICES",
      title: "Amazon Echo Dot 5th Gen",
      amt: 3499,
    },
    {
      img: "https://www.brandedcorporategift.com/content/images/home/american-tourister-skyline.webp",
      subTitle: "TROLLY BAGS",
      title: "Amercian Tourister Skyline Cabin Trolle",
      amt: 2299,
    },
    {
      img: "https://www.brandedcorporategift.com/content/images/home/wonderchef-nutricup-portable-blender.webp",
      subTitle: "NUTRI BLENDER",
      title: "Wonderchef Nuticup Portable Blender",
      amt: 1099,
    },
    {
      img: "https://www.brandedcorporategift.com/content/images/home/borosil-trek-bottle.webp",
      subTitle: "THERMO FLASK",
      title: "Borosil - Trek Bottle 700ml ",
      amt: 790,
    },
  ];
  return (
    <>
      {" "}
      <div className=" w-[1200px]     mx-auto  mt-16">
        <div className=" flex w-full   justify-between ">
          <div className="w-[300px] ">
            <h1 className="font-bold text-2xl">Featured Products </h1>
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
    </>
  );
}

export default FeatureProduct;
