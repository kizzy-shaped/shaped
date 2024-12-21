"use client";

import Container from "@/components/container";
import Link from "next/link";
import { useState } from "react";
import { ClientsFeedback, ContactForm, Partners } from "../page";

const Fashion = () => {
  return (
    <div className="bg-white">
      <Hero />

      <AboutDesc />

      <Gallery />

      <ContactForm/>
    </div>
  );
};

export default Fashion;

function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full h-[calc(100vh-132px)] bg-[#373737]">
      <img
        className="w-auto h-full mx-auto  z-[2] object-cover"
        src="/images/about/hero_img.png"
        alt=""
      />

      <div className="w-full h-fit flex flex-col items-center gap-[20px] absolute bottom-[10%] left-0 z-[3]">
        <span className="text-white text-[48px] font-bold text-center">
          FASHION SERVICES
        </span>
      </div>
    </div>
  );
}

function AboutDesc() {

  return (
    <div className="w-full h-fit bg-white">
      <Container className="py-[4vh] flex flex-col gap-[28px]">
      <div className="text-[40px] font-bold text-black">
      Curated, Bespoke Fashion, Tailored Just <br />
      for You.
      </div>

      <div className="w-[65%] text-[48x] font-medium text-black">
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
            <div className="w-full h-[400px]" key={index}>
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
