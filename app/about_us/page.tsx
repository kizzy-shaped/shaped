"use client";

import Container from "@/components/container";
import Link from "next/link";
import { useState } from "react";
import { ClientsFeedback, ClientsFeedbackContactForm, Partners } from "../page";

const About = () => {
  return (
    <div className="bg-white">
      <Hero />

      <AboutDesc />

      <Gallery />

      <Partners />

      <ClientsFeedbackContactForm />
    </div>
  );
};

export default About;

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
        <span className="text-white text-[24px] font-bold text-center">
          About Us
        </span>
        <span className="text-white text-[48px] font-bold text-center">
          Crafting Bespoke Luxury Experiences That Redefine Living.
        </span>
      </div>
    </div>
  );
}

function AboutDesc() {

  return (
    <div className="w-full h-fit bg-white">
      <Container>
      <Container className="w-[80%] py-[4vh] flex flex-col items-center gap-[28px]">
      <div className="text-[24px] font-medium text-black text-center">
        SHAPED is a luxury concierge service with over 12 years of experience,
        offering bespoke solutions to elevate every aspect of your life.
        From fashion styling and private events to travel arrangements and home
        management, we handle the details, so you don’t have to.
      </div>

      <div className="text-[24px] font-medium text-black text-center">
        We create seamless, luxurious experiences tailored to your needs,
        providing access to the finest services and exclusive opportunities.
        Whether it’s a red-carpet look or a private getaway, we simplify your
        life with impeccable service and attention to every detail.
      </div>

      <div className="text-[24px] font-medium text-black text-center">
        SHAPED is your partner in luxury, making life effortless, extraordinary,
        and uniquely yours.
      </div>
      </Container>
      </Container>
    </div>
  );
}

function Gallery() {

  return (
    <div className="w-full h-fit bg-white">
      <Container className="grid grid-cols-2 py-[3vh]">
        <div className="col-span-1 h-full flex flex-col gap-[32px] justify-center">
          <div className="text-[22px] font-medium text-black">
          With a decade of global expertise in fashion and styling, Shaped serves top clients in entertainment.
          </div>

          <div className="text-[22px] font-medium text-black">
          Our clients include Rosie Huntington-Whiteley and Billy Huxley; musicians Kendrick Lamar, Wiz Kid, and Tiwa Savage, actors Joey Essex and Chloe Sims to name a few.
          </div>

          <div className="text-[22px] font-medium text-black">
          Shaped has featured in top TV shows, global campaigns, and concerts, partnering with Sony and Universal Music.
          </div>
        </div>

        <div className="col-span-1 h-[696px] grid grid-cols-[1fr_2fr_1fr_2fr] grid-rows-[1fr_2fr_2fr_1fr_1fr]">
          <div className="col-start-1 col-end-3 row-start-1 row-end-4">
            <img
              className="w-full h-full object-cover"
              src="/images/home/featuring/collection.png"
              alt=""
            />
          </div>
          <div className="col-start-3 col-span-2 row-start-2 row-end-5">
            <img
              className="w-full h-full object-cover"
              src="/images/home/featuring/quality.png"
              alt=""
            />
          </div>
          <div className="col-start-2 col-end-4 row-start-3 -row-end-1">
            <img
              className="w-full h-full object-cover"
              src="/images/home/featuring/styles.png"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
