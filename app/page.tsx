"use client"

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import Container from "@/components/container";
import { useState } from "react";
import { useCarousel } from "@/components/carousel";
import ReactPlayer from 'react-player'



export default function Home() {
  return (
    <div>
      <Hero />

      <Partners />

      <About />

      <Featuring />

      <MonthStyle />

      <Services />
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
          className={`w-fit h-[60px] bg-[#555555A6] ${hovered ? 'pl-[22px] pr-[18px]' : 'px-[22px]'} border-[1px] border-white text-white text-[22px] font-semibold flex items-center justify-between gap-[10px]`}>
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
  const interval = 2000;
  const items = ["/images/home/featuring/collection.png", "/images/home/featuring/quality.png", "/images/home/featuring/styles.png", "/images/home/hero_img.png", "/images/home/about.png"];
  const currentIndex = useCarousel(items, interval);


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
            className={`w-fit h-[60px] bg-[#000000] ${hovered ? 'pl-[22px] pr-[18px]' : 'px-[22px]'} text-white text-[20px] font-semibold flex items-center justify-between gap-[10px]`}>
            Learn More
            <FaArrowRight className={`w-[28px] h-[28px] text-white ${hovered ? 'ml-[4px]' : ''}`} />
          </Link>
        </div>

        {items.map((img, index) => (
          <div className="w-[599px] h-[530px] ml-auto"
            style={{ opacity: index === currentIndex ? 1 : 0, display: index === currentIndex ? 'inline-block' : 'none', transition: "opacity 1.5s ease-in-out", }}
            key={index}>
            <img className={`w-full h-full object-cover`}
              src={img} alt="" />
          </div>
        ))}
      </Container>
    </div>
  )
}

function Featuring() {
  const items = [
    { img: "/images/home/featuring/styles.png", title: `STYLE FOR YIU`, desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, eum.` },
    { img: "/images/home/featuring/quality.png", title: `HIGH QUALITY PRODUCT`, desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos?` },
    { img: "/images/home/featuring/collection.png", title: `EXCLUSIVE COLLECTION`, desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos?` },
  ]

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div className="w-full h-fit py-[3vh]">
      <Container className="flex flex-col items-center justify-center gap-[30px] py-[3vh]">
        <span className="text-black text-[40px] font-semibold">FEATURING</span>

        <div className="w-[80%] h-[444px] grid grid-cols-3">
          {items.map(({ img, desc, title }, index) => (
            // <div className="col-span-1 h-full" key={index}>
            <div
              className="col-span-1 h-full relative overflow-hidden"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img className="w-full h-full" src={img} alt="" />

              {hoveredIndex !== index && <div className="text-[22px] font-semibold text-white uppercase text-center w-full absolute top-[85%] left-0 z-[3]">{title}</div>}

              <div
                className={`absolute bottom-0 left-0 w-full h-1/2 bg-[#00000085] text-white flex flex-col gap-[20px]  transition-transform duration-500 p-[2em] ${hoveredIndex === index ? "translate-y-0" : "translate-y-full"
                  }`}
                style={{
                  maskImage: "linear-gradient(to bottom, black, white)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, white)",
                }}
              >
                <div className="text-[22px] font-semibold text-white uppercase">{title}</div>

                <div className="text-[16px] font-semibold text-white">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function MonthStyle() {


  return (
    <div className="w-full h-[689px]">
      <Container className="flex items-center justify-center">
        <div className="w-[80%] h-full relative">
          <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
            style={{ width: '100%', height: '100%', minHeight: '100%', minWidth: '100%' }}
          />

          <div className="text-[22px] font-semibold text-white uppercase text-center w-full absolute top-[85%] left-0 z-[3]">STYLE OF THE MONTH</div>
        </div>
      </Container>
    </div>
  )
}

function Services() {


  return (
    <div className="w-full h-fit bg-[#F3F3F3BF] my-[3em]">
      <Container className=" grid grid-cols-2 gap-[54px] py-[5em]">
        <div className="col-span-1 h-fit text-[40px] font-semibold text-black">
          OUR SERVICES
        </div>

        <div className="text-[24px] font-medium text-black">
          From styling to bespoke services, we've got you <br />
          covered for every occasion.
        </div>
      </Container>
    </div>
  )
}




