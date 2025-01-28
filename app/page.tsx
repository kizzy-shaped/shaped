"use client";

import Link from "next/link";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import Container from "@/components/container";
import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { useCarousel } from "@/components/carousel";
import ReactPlayer from "react-player";
import { useFormik } from "formik";
import { ObjectSchema, string } from "yup";
import {
  About,
  ClientsFeedback,
  ClientsFeedbackContactForm,
  ContactForm,
  ContactFormModal,
  Featuring,
  MonthStyle,
  Partners,
} from "@/components/homeComponents";
import Modal from "@/components/modal";
import { IoCloseSharp } from "react-icons/io5";
import { useModal } from "@/context/modal";
import { FiArrowRight } from "react-icons/fi";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { services } from "@/constants/services";
import AnimationHandler from "@/utils/animations";
import { useMultiRevealOnScroll } from "@/components/hooks/useMultiRevealOnScroll";

export default function Home() {
  const { showModal, hideModal } = useModal();
  const timeout = 20000;

  const [title, setTitle] = useState("Shaped | Home");
  const [description, setDescription] = useState(
    "Shaped is a fashion and lifestyle brand that offers curated experiences tailored for you."
  );

  useEffect(() => {
    setTimeout(() => {
      showModal(<ContactFormModal />);
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
      <div className="bg-black">
        <Hero />

        {/* <Partners /> */}

        <About />

        {/* <Featuring /> */}

        {/* <MonthStyle /> */}

        <Services />

        {/* <ClientsFeedbackContactForm /> */}
        <ClientsFeedback />
        <ContactForm />

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

  const videoRef = useRef<HTMLVideoElement>();

  useEffect(() => {
    if (videoRef?.current?.paused) {
      videoRef?.current?.play();
    }
  }, []);

  return (
    <div className="w-full wmin_390:h-[calc(100vh-80px)] wmax_360:!h-[65vh] wmin_360:wmax_md:!h-[70vh] bg-[#373737] relative wmax_lg:flex wmax_lg:items-center wmax_lg:justify-center">
      {/* Using Hero Img */}
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
      {/* Using Hero Img */}

      {/* Using Showcase Img */}
      {/* Mobile */}
      {/* <img
        className="w-full h-full mx-auto mt-auto z-[2] object-cover absolute bottom-0 left-[0%] wmin_xl:hidden"
        src="/images/home/showcase_img_mobile.png"
        alt=""
      /> */}
      {/* Mobile */}
      {/* Desktop */}
      {/* <img className="w-full h-full z-[2] object-cover bg-no-repeat absolute left-[0%] bottom-[0] wmax_xl:hidden" src="/images/home/showcase_img.png" alt="" /> */}
      {/* Desktop */}
      {/* Using Showcase Img */}

      {/* Video */}
      <div className="w-full h-full relative">
        <video
          className="w-full h-full absolute top-0 left-0 object-cover"
          autoPlay={true}
          playsInline={true}
          loop
          preload="none"
          muted
          ref={videoRef as MutableRefObject<HTMLVideoElement>}
          // src="/videos/hero.mp4"
        >
          <source src="/videos/hero_vid.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Video */}

      {/* <div className="wmin_xl:w-full wmax_xl:w-[90%] h-fit flex flex-col items-center gap-[15px] absolute bottom-[7%] left-0 wmax_xl:left-[5%] z-[3]">
        <span className="text-white wmax_xl:text-[26px] wmin_xl:text-[48px] font-bold text-center" style={{fontWeight:'bolder'}}>
          Curated Experiences, Tailored for You
        </span>

        <Link
          href={"#services"}
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
      </div> */}
      <div className="w-full h-full flex items-center justify-center absolute top-0 left-0">
        <div className="wmin_xl:w-full wmax_xl:w-[90%] h-fit flex flex-col items-center gap-[15px] wmin_lg:absolute wmin_lg:bottom-[20%] wmin_lg:left-0 wmax_xl:left-[5%] wmin_lg:z-[3]">
          <span
            className="text-white wmax_xl:text-[26px] wmin_xl:text-[48px] font-bold text-center"
            style={{ fontWeight: "bolder" }}
          >
            Curated Experiences, Tailored for You
          </span>

          <Link
            href={"#services"}
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
    </div>
  );
}

// function Hero() {

//   const [hovered, setHovered] = useState(false);

//   return (
//     <div className="w-full wmin_390:h-[calc(100vh-80px)] wmax_360:!h-[65vh] wmin_360:wmax_md:!h-[70vh] bg-[#373737] relative ">
//       <img className="w-auto h-full mx-auto  z-[2] object-contain" src="/images/home/hero_img.png" alt="" />

//       <div className="wmin_xl:w-full wmax_xl:w-[90%] h-fit flex flex-col items-center gap-[15px] absolute bottom-[4%] left-0 wmax_xl:left-[5%] z-[3]">
//         <span className="text-white wmax_xl:text-[20px] wmin_xl:text-[48px] font-bold text-center">
//           Curated Experiences, Tailored for You
//         </span>

//         <Link
//           href={""}
//           onMouseEnter={() => setHovered(true)}
//           onMouseLeave={() => setHovered(false)}
//           className={`w-fit wmin_md:h-[60px] wmax_md:h-[40px] bg-[white] ${
//             hovered ? "pl-[22px] pr-[18px]" : "px-[22px]"
//           } text-black wmax_xl:text-[16px] wmin_xl:text-[22px] font-semibold flex items-center justify-between gap-[10px] rounded-[24px]`}
//         >
//           Explore Our Services
//           <FiArrowRight
//             className={`wmin_xl:w-[28px] wmin_xl:h-[28px] wmax_xl:w-[22px] wmax_xl:h-[22px] text-black ${
//               hovered ? "ml-[4px]" : ""
//             }`}
//           />
//         </Link>
//       </div>
//     </div>
//   )
// }

function Services() {
  const isVisible = useMultiRevealOnScroll({
    threshold: 0.1, // Trigger reveal when 50% of an element is visible
    offset: 0, // No offset
    rootMargin: "0px", // Default margin
  });

  const [hovered, setHovered] = useState<null | number>(null);

  return (
    <div
      id="services"
      className="w-full h-fit bg-black wmin_lg:bg-whit wmax_lg:bg-[#F3F3F3BF wmin_lg:my-[3em] wmax_lg:mt-[0em]"
    >
      {/* Deskop */}
      <Container className="wmax_md:hidden grid wmin_lg:grid-cols-3 wmin_3xl:gap-[32px] wmin_lg:wmax_3xl:gap-x-[16px] wmin_lg:wmax_3xl:gap-y-[20px] wmax_lg:grid-cols-1 wmax_lg:gap-[8px] wmin_lg:py-[5em] wmax_lg:py-[3em]">
        <div className="col-span-full flex wmin_md:flex-row wmax_md:flex-col wmin_md:justify-between wmax_md:gap-[8px]">
          <div className="col-span-1 h-fit wmin_md:text-[40px] wmax_md:text-[24px] font-medium text-white">
            OUR SERVICES
          </div>

          {/* <div className="wmin_md:text-[24px] wmax_md:text-[14px] font-medium text-[#9C9C9C]">
            From styling to bespoke services, we've got you <br />
            covered for every occasion.
          </div> */}
        </div>

        {services.map(
          (
            {
              desc,
              galleryImages,
              heroImage,
              link,
              title,
              overview,
              thumbnail,
            },
            index
          ) => (
            <div
              className={`col-span-1 wmin_md:h-[77vh] wmax_md:h-[55vh] wmax_lg:mt-[20px] grid grid-cols-1 grid-rows-[4.5_5.5fr] relative overflow-hidden rounded-[24px]`}
              key={index}
              id={`service-${index}`}
              data-reveal-on-scroll
              style={{
                opacity: isVisible[`service-${index}`] ? 1 : 0.85,
                transform: isVisible[`service-${index}`]
                  ? "translateY(0)"
                  : "translateY(20px)",
                transition:
                  "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
              }}
            >
              <div className="w-full h-full overflow-hidden col-span-1 row-start-1 row-end-2">
                <img
                  className="w-full h-ful max-h-full object-cover"
                  src={thumbnail}
                  alt=""
                />
              </div>

              <div className="w-full h-full col-span-1 row-start-2 row-end-3 bg-[#1a1a1a] flex flex-col justify-between py-[1em] px-[2em]">
                <div className="w-full h-fit flex flex-col gap-[4px] justify-end relative">
                  <div className="wmin_3xl:text-[24px] wmin_lg:wmax_3xl:text-[22px] font-bold text-white uppercase">
                    {title}
                  </div>

                  <div className="wmin_3xl:text-[20px] wmin_lg:wmax_3xl:text-[18px] font-bold text-[#9C9C9C]">
                    {overview}
                  </div>
                </div>

                <Link
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  href={`/services?serviceId=${link}`}
                  className="wmin_3xl:text-[22px] wmin_lg:wmax_3xl:text-[20px] font-bold bg-gradien-to-b from-[#00000000] to-[#000000] text-white capitalize w-fit h-fit flex items-center gap-[10px]"
                >
                  Learn More
                  <FiArrowRight
                    className={`w-[28px] h-[28px] ${
                      hovered == index ? "ml-[7px]" : ""
                    } text-white`}
                  />
                </Link>
              </div>
            </div>
          )
        )}
      </Container>
      {/* Deskop */}

      {/* Mobile */}
      <Container className="wmin_md:hidden grid wmin_lg:grid-cols-3 wmin_lg:gap-[32px] wmax_lg:grid-cols-1 wmax_lg:gap-[8px] wmin_lg:py-[5em] wmax_lg:py-[3em]">
        {" "}
        <div className="col-span-full flex wmin_md:flex-row wmax_md:flex-col wmin_md:justify-between wmax_md:gap-[8px]">
          <div className="col-span-1 h-fit wmin_md:text-[40px] wmax_md:text-[24px] font-bold text-white">
            OUR SERVICES
          </div>

          <div className="wmin_md:text-[24px] wmax_xl:text-[14px] font-medium text-white">
            From styling to bespoke services, we've got you <br />
            covered for every occasion.
          </div>
        </div>
        <div className="w-full h-fit  overflow-scroll pb-[1.5em]">
          <div className="w-fit h-fit flex gap-[20px]">
            {services.map(
              (
                { desc, galleryImages, thumbnail, link, title, overview },
                index
              ) => (
                <div
                  className={`w-[90vw] h-[27em] wmax_lg:mt-[20px] grid grid-cols-1 grid-rows-[0.5fr_1fr] relative overflow-hidden rounded-[24px]`}
                  key={index}
                  id={`service-${index}`}
                  data-reveal-on-scroll
                  style={{
                    opacity: isVisible[`service-${index}`] ? 1 : 0.85,
                    transition:
                      "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                  }}
                >
                  <div className="w-full h-full overflow-hidden col-span-1 row-start-1 row-end-2">
                    <img
                      className="w-full h-full max-h-full object-cover"
                      src={thumbnail}
                      alt=""
                    />
                  </div>

                  <div className="w-full h-full col-span-1 row-start-2 row-end-3 bg-[#1a1a1a] flex flex-col gap-[1em] justify-between py-[1em] px-[1.5em]">
                    <div className="w-full h-fit flex flex-col gap-[4px] justify-end relative">
                      <div className="text-[20px] font-bold text-white uppercase">
                        {title}
                      </div>

                      <div className="text-[14px] font-bold text-[#9C9C9C]">
                        {overview}
                      </div>
                    </div>

                    <Link
                      onMouseEnter={() => setHovered(index)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() =>
                        setHovered(hovered == index ? null : index)
                      }
                      href={`/services?serviceId=${link}`}
                      className="text-[22px] font-bold bg-gradien-to-b from-[#00000000] to-[#000000] text-white capitalize w-fit h-fit flex items-center gap-[10px]"
                    >
                      Learn More
                      <FiArrowRight
                        className={`w-[28px] h-[28px] text-white ${
                          hovered == index ? "ml-[4px]" : ""
                        }`}
                      />
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Container>
      {/* Mobile */}
    </div>
  );
}
