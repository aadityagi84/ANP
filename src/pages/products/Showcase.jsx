import React from "react";

function Showcase() {
  const images = [
    "https://www.brandedcorporategift.com/content/images/home/trend-book-monthly.webp",
    "https://www.brandedcorporategift.com/content/images/home/gift-hamper-by-procter.webp",
    "https://www.brandedcorporategift.com/content/images/home/american-tourister-brand.webp",
  ];

  return (
    <div className="w-[1200px]  py-6 mx-auto flex gap-10">
      {images.map((image, index) => (
        <div key={index} className="w-[400px] h-[250px] ">
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover rounded-xl "
          />
        </div>
      ))}
    </div>
  );
}

export default Showcase;
