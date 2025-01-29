"use client";

import Container from "@/components/container";
import {
  ClientsFeedbackContactForm,
  Partners,
} from "@/components/homeComponents";
import Link from "next/link";
import { useState } from "react";

const About = () => {
  return (
    <div className="bg-white">
      <Hero />

      {/* <AboutDesc /> */}

      <Gallery />

      {/* <Partners /> */}

      <HowWeWork />

      <ClientsFeedbackContactForm />
    </div>
  );
};

export default About;

function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full wmin_390:h-[calc(100vh-80px)] wmax_360:!h-[65vh] wmin_360:wmax_md:!h-[70vh] bg-[#373737] relative wmax_lg:bg-[url(/images/about/showcase_img_mobile.png)] wmax_lg:bg-cover wmax_lg:bg-[30%_90%]">
      <img
        className="w-full h-full mx-auto  z-[2] object-cover wmax_lg:hidden"
        src="/images/about/showcase_img.png"
        alt=""
      />

      <div className="wmin_xl:w-full wmax_xl:w-[90%] h-fit flex flex-col items-center gap-[15px] absolute wmin_lg:bottom-[20%] bottom-[30%] left-0 wmax_xl:left-[5%] z-[3]">
        <span className="text-white wmax_xl:text-[20px] wmin_xl:text-[48px] font-bold text-center uppercase">
          About Us
        </span>
        {/* <span className="text-white text-[48px] font-bold text-center">
          Crafting Bespoke Luxury Experiences That Redefine Living.
        </span> */}
      </div>

      {/* Overlay */}
      <div className="w-full h-full bg-black bg-opacity-50"></div>
      {/* Overlay */}
    </div>
  );
}

function AboutDesc() {
  return (
    <div className="w-full h-fit bg-black">
      <Container>
        <Container className="w-[80%] wmin_md:py-[8vh] wmax_md:py-[3vh] flex flex-col items-center wmin_lg:gap-[28px] wmax_lg:gap-[24px]">
          <div className="wmin_lg:text-[24px] wmax_lg:text-[14px] font-medium text-white text-center">
            SHAPED is a luxury concierge service with over 12 years of
            experience, offering bespoke solutions to elevate every aspect of
            your life. From fashion styling and private events to travel
            arrangements and home management, we handle the details, so you
            don't have to.
          </div>

          <div className="wmin_lg:text-[24px] wmax_lg:text-[14px] font-medium text-white text-center">
            We create seamless, luxurious experiences tailored to your needs,
            providing access to the finest services and exclusive opportunities.
            Whether it's a red-carpet look or a private getaway, we simplify
            your life with impeccable service and attention to every detail.
          </div>

          <div className="wmin_lg:text-[24px] wmax_lg:text-[14px] font-medium text-white text-center">
            SHAPED is your partner in luxury, making life effortless,
            extraordinary, and uniquely yours.
          </div>
        </Container>
      </Container>
    </div>
  );
}

function Gallery() {
  return (
    <div className="w-full h-fit bg-black">
      {/* <Container className="grid wmin_lg:grid-cols-2 wmax_lg:grid-cols-1 gap-[1em] py-[3vh]">
        <div className="col-span-1 h-full flex flex-col wmin_lg:gap-[32px] wmax_lg:gap-[24px] justify-center wmax_lg:order-2">
          <div className="wmin_lg:text-[24px] wmax_lg:text-[14px] font-medium text-white">
            With a decade of global expertise in fashion and styling, Shaped serves top clients in entertainment.
          </div>

          <div className="wmin_lg:text-[24px] wmax_lg:text-[14px] font-medium text-white">
            Our clients include Rosie Huntington-Whiteley and Billy Huxley; musicians Kendrick Lamar, Wiz Kid, and Tiwa Savage, actors Joey Essex and Chloe Sims to name a few.
          </div>

          <div className="wmin_lg:text-[24px] wmax_lg:text-[14px] font-medium text-white">
            Shaped has featured in top TV shows, global campaigns, and concerts, partnering with Sony and Universal Music.
          </div>
        </div>

        <div className="col-span-1 wmin_md:h-[696px] wmax_md:h-[340px] grid grid-rows-[1fr_1.2fr_1.2fr_1fr_1fr] wmax_lg:order-1">
          <div className="col-start-1 col-end-3 row-start-1 row-end-4">
            <img
              className="w-full h-full object-cover"
              src="/images/about/gallery1.png"
              alt=""
            />
          </div>
          <div className="col-start-3 col-span-2 row-start-2 row-end-5">
            <img
              className="w-full h-full object-cover"
              src="/images/about/gallery2.png"
              alt=""
            />
          </div>
          <div className="col-start-2 col-end-4 row-start-3 -row-end-1">
            <img
              className="w-full h-full object-cover"
              src="/images/about/gallery3.png"
              alt=""
            />
          </div>
        </div>
      </Container> */}{" "}
      <Container
        className={`w-full h-fit grid wmin_md:grid-cols-2 wmax_md:grid-cols-1 gap-1 wmin_lg:gap-3 wmin_md:grid-rows-2`}
      >
        {[
          `
          SHAPED is a luxury concierge service with over 12 years of experience, offering bespoke solutions to elevate every aspect of your life. From fashion styling and private events to travel arrangements and home management, we handle the details, so you don’t have to.`,
          "/images/about/gallery1.png",
          "/images/about/gallery2.png",
          `
We create seamless, luxurious experiences tailored to your needs, providing access to the finest services and exclusive opportunities. Whether it’s a red-carpet look or a private getaway, we simplify your life with impeccable service and attention to every detail.`
        ].map((item, index) => (
          <div
            className={`col-span-1 wmin_390:h-[430px] wmax_390:h-[350px] wmin_lg:h-[470px] relative ${index ==  2? 'wmax_lg:order-4':'wmax_lg:order-2'} ${index ==  3? 'wmax_lg:order-3':'wmax_lg:order-1'}`}
            key={index}
          >
            {item.includes("/images/about/") ? (
              <img className={`w-full h-full object-cove`} src={item} alt="" />
            ) : (
              <div className={`w-full h-full bg-black flex items-center justify-center p-3 wmin_lg:p-10`}>
                <div className="text-white text-center w-fit h-fit">{item}</div>
              </div>
            )}
          </div>
        ))}
      </Container>
    </div>
  );
}

function HowWeWork() {


  return (
    <div className="w-full h-fit bg-whit wmin_lg:py-[7.5vh] wmax_lg:py-[3vh] bg-white">
    <Container className="flex flex-col gap-4">
     <div className="text-[24px] wmin_lg:text-[38px] font-semibold">How We Work</div>

     <div className="wmin_lg:w-[80%] text-[14px] wmin_lg:text-[20px] font-semibold">
     At SHAPED, you’ll have a dedicated lifestyle manager committed to making life effortless. From personal shopping to exclusive event planning, we handle every detail with care, so you can enjoy the luxury you deserve.
     </div>

     <div className="w-full h-[250px] wmin_lg:h-[550px] flex items-center justify-center">
        <img className="w-full h-full object-cover hidden wmin_lg:inline-block" src="/images/about/how_we_work.png" alt=""/>
        <img className="w-full h-full wmin_lg:hidden inline-block" src="/images/about/how_we_work_mobile.png" alt=""/>
     </div>
    </Container>
  </div>
  )
}
