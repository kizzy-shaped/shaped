"use client";

import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import Container from "@/components/container";
import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { useCarousel } from "@/components/carousel";
import ReactPlayer from "react-player";
import { useFormik } from "formik";
import { ObjectSchema, string } from "yup";
import {
  About,
  ClientsFeedbackContactForm,
  ContactForm,
  ContactFormModal,
  Featuring,
  MonthStyle,
  Partners,
  Services,
} from "@/components/homeComponents";
import Modal from "@/components/modal";
import { IoCloseSharp } from "react-icons/io5";
import { useModal } from "@/context/modal";
import { FiArrowRight } from "react-icons/fi";
import Head from "next/head";

export default function Home() {
  const { showModal, hideModal } = useModal();
  const timeout = 15000;
  // const timeout = 3000;

  const [title, setTitle] = useState("Welcome to My App");
  const [description, setDescription] = useState(
    "This is a dynamic description for my app."
  );

  useEffect(() => {
    setTimeout(() => {
      showModal(<ContactFormModal />)
    }, timeout);
  }, []);

  // useEffect(()=> {
  //   if(typeof window !== 'undefined'){
  //     if (window.scrollY > window.innerHeight) {
  //       showModal(<ContactFormModal />)
  //     }
  //   }
  // }, [window.scrollY])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-white">
        <Hero />

        {/* <Partners /> */}

        <About />

        <Featuring />

        {/* <MonthStyle /> */}

        <Services />

        <ClientsFeedbackContactForm />

        {/* //!Modals */}
        <Modal
          containerClassName="wmin_md:w-[680px] wmax_md:bg-red-700 rounded-[0px]"
          // closeBtnClassName="w-[30px] h-[30px] text-white bg-red-600"
          // closeBtn={<IoCloseSharp onClick={hideModal} className="w-[30px] h-[30px] text-white" />}
        />
        {/* //!Modals */}
      </div>
    </>
  );
}

function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full wmin_390:h-[calc(100vh-80px)] wmax_360:!h-[65vh] wmin_360:wmax_md:!h-[70vh] bg-[#373737] relative ">
      {/* Mobile */}
      {/* <img
        className="w-[90%] h-auto mx-auto mt-auto z-[2] object-cover absolute bottom-0 left-[5%] wmin_xl:hidden"
        src="/images/home/hero_img_mobile.png"
        alt=""
      /> */}
      {/* Mobile */}
      {/* Desktop */}
      {/* <img className="w-[90%] h-[80%] z-[2] object-contain absolute left-[5%] bottom-[0] wmax_xl:hidden" src="/images/home/hero_img.png" alt="" /> */}
      {/* Desktop */}
      <div className="w-full h-full relative">
        <video
          className="w-full h-full absolute top-0 left-0 object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/videos/hero.mp4" />
        </video>
      </div>

      <div className="wmin_xl:w-full wmax_xl:w-[90%] h-fit flex flex-col items-center gap-[15px] absolute bottom-[4%] left-0 wmax_xl:left-[5%] z-[3]">
        <span className="text-white wmax_xl:text-[20px] wmin_xl:text-[48px] font-bold text-center">
          Curated Experiences, Tailored for You
        </span>

        <Link
          href={""}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`w-fit wmin_md:h-[60px] wmax_md:h-[40px] bg-[white] ${
            hovered ? "pl-[22px] pr-[18px]" : "px-[22px]"
          } text-black wmax_xl:text-[16px] wmin_xl:text-[22px] font-semibold flex items-center justify-between gap-[10px] rounded-[24px]`}
        >
          Explore Our Services
          <FiArrowRight
            className={`wmin_xl:w-[28px] wmin_xl:h-[28px] wmax_xl:w-[22px] wmax_xl:h-[22px] text-black ${
              hovered ? "ml-[4px]" : ""
            }`}
          />
        </Link>
      </div>
    </div>
  );
}
