"use client"

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import Container from "@/components/container";
import { useState } from "react";



export default function Home() {
  return (
    <div>
      <Hero />

      <Partners />

      <About />

      <Featuring />
    </div>
  );
}

function Hero() {
  const [hovered, setHovered] = useState(false);


  return (
    <div className="w-full h-[calc(100vh-132px)] bg-[#373737]">
      <img className="w-auto h-full mx-auto  z-[2] object-contain" src="/images/home/hero_img.png" alt="" />

      <div className="w-full h-fit flex flex-col items-center gap-[20px] absolute bottom-[10%] left-0 z-[3]">
        <span className="text-white text-[48px] font-bold text-center">SHAPED - Curated Experiences, Tailored <br />
          for You.</span>

        <Link href={''}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="w-fit h-[60px] bg-[#555555A6] px-[22px] border-[1px] border-white text-white text-[22px] font-semibold flex items-center justify-between gap-[10px]">
          Explore Our Services
          <FaArrowRight className={`w-[28px] h-[28px] text-white ${hovered ? 'ml-[4px]' : ''}`} />
        </Link>
      </div>
    </div>
  )
}

function Partners() {


  return (
    <div className="w-full h-[196px]">
      <Container className="flex items-center">
        <Marquee
          loop={0}
          speed={50}
          className="w-full h-fit flex"
        >
          {[
            { img: '/images/home/partners/caf.png' },
            { img: '/images/home/partners/nta.png' },
            { img: '/images/home/partners/teen_awards.png' },
            { img: '/images/home/partners/rocnation.png' },
            { img: '/images/home/partners/made_in_america.png' },
            { img: '/images/home/partners/pepsi.png' },
            { img: '/images/home/partners/smart.png' },
          ].map(({ img }, index) => (
            <img className="w-auto h-[72px] mr-[72px]" src={img} alt="" key={index} />
          ))}
        </Marquee>
      </Container>
    </div>
  )
}

function About() {
  const [hovered, setHovered] = useState(false);


  return (
    <div className="w-full h-[530px]">
      <Container className="grid grid-cols-2">
        <div className="col-span-1 h-full flex flex-col gap-[32px] justify-center">
          <div className="text-[22px] font-medium text-black">
            At SHAPED, we are redefining what it means to experience true luxury in the modern world. Our singular mission is to return to you the one thing that matters most—your time. Through unparalleled service and an exclusive network, we create exceptional experiences that allow you to enjoy life at its fullest, without the effort.
          </div>

          <Link href={''}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="w-fit h-[60px] bg-[#000000] px-[22px] text-white text-[20px] font-semibold flex items-center justify-between gap-[10px]">
            Learn More
            <FaArrowRight className={`w-[28px] h-[28px] text-white ${hovered ? 'ml-[4px]' : ''}`} />
          </Link>
        </div>

        <img className="w-auto h-[530px] object-cover ml-auto" src="/images/home/about.png" alt="" />
      </Container>
    </div>
  )
}

function Featuring() {


  return (
    <div className="w-full h-fit py-[3vh]">
      <Container className="flex flex-col items-center justify-center gap-[30px] py-[3vh]">
        <span className="text-black text-[40px] font-semibold">FEATURING</span>

        <div className="w-full h-[444px] grid grid-cols-3">
          {[
            { img: "/images/home/about.png" },
            { img: "/images/home/about.png" },
            { img: "/images/home/about.png" },
          ].map(({ img }, index) => (
            <div className="col-span-1 h-full" key={index}>
              <img className="w-full h-full" src={img} alt="" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}




