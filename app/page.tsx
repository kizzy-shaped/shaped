"use client"

import Link from "next/link";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import Container from "@/components/container";
import { ChangeEventHandler, HTMLInputTypeAttribute, InputHTMLAttributes, useEffect, useState } from "react";
import { useCarousel } from "@/components/carousel";
import ReactPlayer from 'react-player'
import { useFormik } from 'formik';
import { ObjectSchema, string } from 'yup'
import { About, ClientsFeedbackContactForm, ContactForm, ContactFormModal, Featuring, MonthStyle, Partners, Services } from "@/components/homeComponents";
import Modal from "@/components/modal";
import { IoCloseSharp } from "react-icons/io5";
import { useModal } from "@/context/modal";



export default function Home() {
  const { showModal, hideModal } = useModal();


  useEffect(() => {
    setTimeout(() => {
      showModal(<ContactFormModal />)
    }, 3000)
  },[])

  return (
    <div className="bg-white">
      <Hero />

      <Partners />

      <About />

      <Featuring />

      <MonthStyle />

      <Services />

      <ClientsFeedbackContactForm />

      {/* //!Modals */}
      <Modal containerClassName="w-[680px] rounded-[0px]" closeBtn={<IoCloseSharp onClick={hideModal} className="w-[30px] h-[30px] text-white" />} />
                {/* //!Modals */}
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







