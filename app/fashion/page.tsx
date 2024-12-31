"use client";

import Container from "@/components/container";
import { ContactForm, MonthStyle } from "@/components/homeComponents";
import Link from "next/link";
import { useState } from "react";

const Fashion = () => {
  return (
    <div className="bg-white">
      <Hero />

      <AboutDesc />

      <Gallery />

      <MonthStyle />

      <ContactForm />
    </div>
  );
};

export default Fashion;

function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full wmin_390:h-[calc(100vh-132px)] wmax_360:!h-[48vh] wmin_360:wmax_md:!h-[60vh] bg-[#373737] wmax_lg:relative bg-[url(/images/fashion/hero_img.png)] bg-cover bg-no-repeat wmax_lg:bg-center">
      <div className="w-full h-fit flex flex-col items-center gap-[20px] absolute bottom-[10%] left-0 z-[3]">
        <span className="text-white wmin_lg:text-[64px] wmax_lg:text-[28px] font-bold text-center">
          FASHION SERVICES
        </span>
      </div>
    </div>
  );
}

function AboutDesc() {

  return (
    <div className="w-full h-fit bg-white">
      <Container className="wmin_lg:py-[6vh] wmax_lg:py-[3vh] flex flex-col wmin_lg:gap-[28px] wmax_lg:gap-[14px]">
        <div className="wmin_lg:text-[40px] wmax_lg:text-[20px] font-bold text-black">
          Curated, Bespoke Fashion, Tailored Just <br />
          for You.
        </div>

        <div className="wmin_lg:w-[65%] wmax_lg:w-full wmin_lg:text-[48px] wmax_lg:text-[14px] font-medium text-black">
          At SHAPED, we believe that your style should be as unique as you are. Our Fashion Services are designed to give you a seamless, luxurious experience—whether you're seeking expert styling, personal shopping, or the perfect bespoke garment. Explore our range of services below, each tailored to elevate your wardrobe and enhance your lifestyle.
        </div>
      </Container>
    </div>
  );
}

function Gallery() {
  const items = [
    'images/home/featuring/collection.png',
    'images/home/featuring/quality.png',
    'images/home/featuring/styles.png',
  ]

  return (
    <div className="w-full h-fit bg-white">
      <div className="w-full h-fit flex flex-col">

        {items.map((item, index) => (
          <div className="w-full wmin_390:h-[400px] wmax_390:h-[350px]" key={index}>
            <img
              className="w-full h-full object-cover"
              src={item}
              alt=""
            />
          </div>
        ))}

      </div>
    </div>
  );
}
