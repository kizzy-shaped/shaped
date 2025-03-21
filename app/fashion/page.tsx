"use client";

// import styles from './fashion.module.css';
import "./fashion.module.css";

import Container from "@/components/container";
import { ContactForm, MonthStyle } from "@/components/homeComponents";
import { useMultiRevealOnScroll } from "@/components/hooks/useMultiRevealOnScroll";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Suspense, useState } from "react";


function Fashion() {
  

   return (
      <Suspense fallback={<div className="w-0 h-0" />}>
      <FashionPage />
      </Suspense>
    );
}

const FashionPage = () => {
  return (
    <div className="bg-white">
      <Hero />

      <AboutDesc />

      <Gallery />

      <AboutUs />

      {/* <MonthStyle /> */}

      <ContactForm />
    </div>
  );
};

export default Fashion;

function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    // <div className="w-full wmin_390:h-[calc(100vh-80px)] wmax_360:!h-[65vh] wmin_360:wmax_md:!h-[70vh] bg-[#373737] wmax_lg:relative bg-[url(/images/fashion/showcase_img.png)] bg-cover bg-no-repeat wmax_lg:bg-center">
    <div className="w-full wmin_390:h-[calc(100vh-80px)] wmax_360:!h-[65vh] wmin_360:wmax_md:!h-[70vh] bg-[#373737] relative bg-[url(/images/fashion/showcase_img.png)] bg-cover bg-no-repeat wmax_lg:bg-center">
      <div className="wmin_xl:w-full wmax_xl:w-[90%] h-fit flex flex-col items-center gap-[15px] absolute wmin_lg:bottom-[20%] bottom-[30%] left-0 wmax_xl:left-[5%] z-[3]">
        <span className="text-white wmax_xl:text-[20px] wmin_xl:text-[48px] font-bold text-center">
          FASHION SERVICES
        </span>
      </div>

       {/* Overlay */}
       <div className="w-full h-full bg-black bg-opacity-50"></div>
      {/* Overlay */}
    </div>
  );
}

const TransitionConatiner = ({
  condion,
  text,
  link
}: {
  condion?: boolean;
  text: string;
  link: string;
}) => (
  <div
    className="transition-container w-full h-1/2 flex flex-col items-center justify-end pb-[2.5em] absolute bottom-0 left-0 z-10 bg-gradient-to-b from-[#00000010] to-[#000000] transition-all duration-75 ease-in"
    style={{
      opacity: condion ? 1 : 0,
      bottom: condion ? 0 : -30,
    }}
  >
    <span className="w-fit h-fit text-white font-bold text-[22px] wmin_lg:text-[32px]">
      {text}
    </span>
    <Link href={`/services?serviceId=${link}`} className="w-fit h-fit flex items-center gap-[0.5em] text-white font-medium text-[18px] wmin_lg:text-[24px]">
      <ArrowRight className="text-white" /> Learn More
    </Link>
  </div>
);

function AboutDesc() {
  return (
    <div className="w-full h-fit bg-black">
      <Container className="wmin_lg:py-[6vh] wmax_lg:py-[3vh] flex flex-col wmin_lg:gap-[28px] wmax_lg:gap-[14px]">
        <div className="wmin_xl:w-[65%] wmin_lg:text-[40px] wmax_lg:text-[20px] font-medium text-white">
          Curated, Bespoke Fashion, Tailored Just for You
        </div>

        <div className="w-full flex flex-col gap-3 wmin_lg:gap-3">
        <div className="wmin_lg:w-[80%] wmax_lg:w-full wmin_lg:text-[18px] wmax_lg:text-[14px] font-medium text-[#9c9c9c]">
        At SHAPED, we believe that your style should be as unique as you are. Our Fashion Services are designed to give you a seamless, luxurious experience whether you're seeking expert styling, personal shopping, or the perfect bespoke garment. Explore our range of services below, each tailored to elevate your wardrobe and enhance your lifestyle.
        </div>
        {/* <div className="wmin_lg:w-[80%] wmax_lg:w-full wmin_lg:text-[18px] wmax_lg:text-[14px] font-medium text-[#9c9c9c]">
        With over a decade of global expertise in fashion management, SHAPED has established itself as a premier luxury concierge service, renowned for its impeccable styling and tailored experiences.
        We specialise in curating extraordinary moments for a discerning clientele, including award-winning musicians, internationally acclaimed actors, and influential figures in music, entertainment, and fashion.
        </div>
        <div className="wmin_lg:w-[80%] wmax_lg:w-full wmin_lg:text-[18px] wmax_lg:text-[14px] font-medium text-[#9c9c9c]">
        Our work has been featured digitally in Vogue and showcased at the world's most exclusive events, including London Fashion Week, where we have had the privilege of being part of the must-have show, Burberry, as well as Paris Fashion Week and the British Fashion Awards.
        SHAPED has also contributed to historic occasions such as the King's Coronation, executed prestigious campaigns such as Pepsi, and been part of iconic events such as the Made in America festival.
        </div>
        <div className="wmin_lg:w-[80%] wmax_lg:w-full wmin_lg:text-[18px] wmax_lg:text-[14px] font-medium text-[#9c9c9c]">
        SHAPED has built a reputation for discreet elegance, offering tailored luxury with unrivalled service, curating one-of-a-kind moments that define an elevated lifestyle.
        </div> */}
        </div>
      </Container>
    </div>
  );
}

function Gallery() {
  const [currentGalleyIndex, setCurrentGalleyIndex] = useState<null | number>(
    null
  );

  const isVisible = useMultiRevealOnScroll({
    threshold: 0.1, // Trigger reveal when 50% of an element is visible
    offset: 0, // No offset
    rootMargin: "0px", // Default margin
  });

  return (
    <div className="w-full h-fit bg-black">
      {/* Desktop */}
      <Container className="w-full h-fit grid grid-rows-[400px_400px] wmin_1920:grid-rows-[540px_540px] 1920_1440:grid-rows-[480px_480px] grid-cols-[1fr_0.5fr_0.5fr_1fr] gap-[0.5em] wmax_lg:hidden">
        <div
          onMouseEnter={() => setCurrentGalleyIndex(0)}
          onMouseLeave={() => setCurrentGalleyIndex(null)}
          className="col-span-1 row-span-1 w-full h-full cursor-pointer relative"
        >
          <img
            className="w-full h-full bg-cover"
            src="/images/fashion/gallery1.png"
            alt=""
          />

          <TransitionConatiner
          link="styling_services"
            text="Styling Services"
            condion={currentGalleyIndex == 0}
          />
        </div>
        <div
          onMouseEnter={() => setCurrentGalleyIndex(1)}
          onMouseLeave={() => setCurrentGalleyIndex(null)}
          className="col-span-2 row-span-1 w-full h-full relative"
        >
          <img
            className="w-full h-full bg-cover"
            src="/images/fashion/gallery2.png"
            alt=""
          />

          <TransitionConatiner
            link="personal_shopping"
            text="Personal Shopping"
            condion={currentGalleyIndex == 1}
          />
        </div>
        <div className="col-span-1 row-span-1 w-full h-full flex items-center justify-center">
          <div className="italic font-medium text-white w-[90%] m-auto text-center">
            Elevate your wardrobe with personalised services that blend
            craftsmanship, style, and precision, tailored to bring your vision to
            life.
          </div>
        </div>
        <div
          onMouseEnter={() => setCurrentGalleyIndex(2)}
          onMouseLeave={() => setCurrentGalleyIndex(null)}
          className="col-span-2 row-span-1 w-full h-full relative"
        >
          <img
            className="w-full h-full bg-cover"
            src="/images/fashion/gallery3.png"
            alt=""
          />

          <TransitionConatiner
          link="bespoke_garment_creation"
            text="Bespoke Garment Creation"
            condion={currentGalleyIndex == 2}
          />
        </div>
        <div
          onMouseEnter={() => setCurrentGalleyIndex(3)}
          onMouseLeave={() => setCurrentGalleyIndex(null)}
          className="col-span-2 row-span-1 w-full h-full relative"
        >
          <img
            className="w-full h-full bg-cover"
            src="/images/fashion/gallery4.png"
            alt=""
          />

          <TransitionConatiner
          link="alteration_services"
            text="Alteration Services"
            condion={currentGalleyIndex == 3}
          />
        </div>
      </Container>
      {/* Desktop */}

      {/* Mobile */}
      <Container className="w-fll h-fit overflow-x-scroll wmin_lg:hidden">
        <div className="slide w-fit h-[360px] flex gap-[1em]">
          <div 
          id={`service-0`}
          data-reveal-on-scroll
          className="w-[90vw] h-full relative">
            <img
              className="w-full h-full bg-cover"
              src="/images/fashion/gallery1.png"
              alt=""
            />

            <TransitionConatiner
            link="styling_services"
              text="Styling Services"
              // condion={ isVisible[`service-0`]  as unknown as boolean}
              condion={true  as unknown as boolean}
            />
          </div>
          <div 
          id={`service-1`}
          data-reveal-on-scroll
          className="w-[90vw] h-full relative">
            <img
              className="w-full h-full bg-cover"
              src="/images/fashion/gallery2.png"
              alt=""
            />

            <TransitionConatiner
            link="personal_shopping"
              text="Personal Shopping"
              // condion={ isVisible[`service-1`]  as unknown as boolean}
              condion={true  as unknown as boolean}
            />
          </div>
          <div 
          id={`service-2`}
          data-reveal-on-scroll
          className="w-[90vw] h-full relative">
            <img
              className="w-full h-full bg-cover"
              src="/images/fashion/gallery3.png"
              alt=""
            />

            <TransitionConatiner
            link="bespoke_garment_creation"
              text="Bespoke Garment Creation"
              // condion={ isVisible[`service-2`]  as unknown as boolean}
              condion={true  as unknown as boolean}
            />
          </div>
          <div 
          id={`service-3`}
          data-reveal-on-scroll
          className="w-[90vw] h-full relative">
            <img
              className="w-full h-full bg-cover"
              src="/images/fashion/gallery4.png"
              alt=""
            />

            <TransitionConatiner
            link="alteration_services"
              text="Alteration Services"
              // condion={ isVisible[`service-3`]  as unknown as boolean}
              condion={true  as unknown as boolean}
            />
          </div>
        </div>
      </Container>
      {/* Mobile */}

      {/* <div className="w-full h-fit flex flex-col">
        {services.map(({title, galleryImages, link}, index) => (
          <div
            className="w-full wmin_390:h-[430px] wmax_390:h-[350px] relative"
            key={index}
          >
            <img className="w-full h-full object-cover" src={galleryImages[index]} alt="" />

            <div
              className={`absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-[1] text-white  transition-transform `}
            >
              <div className="w-full h-full duration-1000  hover:animate-fadeOut hover:bg-[#00000099] flex flex-col items-center justify-center gap-[1.7em] relative">
              <div className="wmin_md:text-[2.5rem] wmax_md:text-[1.5rem] font-bold text-white uppercase">
                  {title}
                </div>

                <Link
                  href={`/services?serviceId=${link}`}
                  className="wmin_md:w-[70px] wmin_md:h-[70px] wmax_md:w-[60px] wmax_md:h-[60px] block cursor-pointer overflow-hidden rounded-full duration-500  hover:animate-fadeOut hover:bg-[#00000099]"
                >
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 96 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      className="w-full h-full"
                      rx="47.5"
                      stroke="#F3F3F3"
                    />
                    <path
                      d="M31.6666 48.0001H64.3333M64.3333 48.0001L48 31.6667M64.3333 48.0001L48 64.3334"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

function AboutUs() {
  
  return (
    <div id="about_us" className="w-full h-fit bg-black">
    <Container className="wmin_lg:py-[6vh] wmax_lg:py-[3vh] flex flex-col wmin_lg:gap-[28px] wmax_lg:gap-[14px]">
      <div className="wmin_lg:text-[40px] wmax_lg:text-[20px] font-medium text-white text-center">
        About Us
      </div>

      <div className="w-full flex flex-col gap-3 wmin_lg:gap-3">
      <div className="wmax_lg:w-full wmin_lg:text-[18px] wmax_lg:text-[14px] font-medium text-[#9c9c9c]">
      With over a decade of global expertise in fashion management, SHAPED has established itself as a premier luxury concierge service, renowned for its impeccable styling and bespoke experiences. We specialise in curating extraordinary moments for a discerning clientele, including award-winning musicians, internationally acclaimed actors, and influential figures in fashion, music, and entertainment.
      </div>
      <div className="wmax_lg:w-full wmin_lg:text-[18px] wmax_lg:text-[14px] font-medium text-[#9c9c9c]">
      Our work has been featured in Vogue and showcased at the world’s most exclusive events, including London Fashion Week, where we have been part of the must-see Burberry show, as well as Paris Fashion Week and the British Fashion Awards. SHAPED has also contributed to historic occasions such as the King’s Coronation, orchestrated high-profile brand campaigns, and played a role in iconic events such as the Made in America festival.
      </div>
      <div className="wmax_lg:w-full wmin_lg:text-[18px] wmax_lg:text-[14px] font-medium text-[#9c9c9c]">
      Built on a foundation of discretion and elegance, SHAPED delivers unparalleled luxury with a highly personalised touch, curating one-of-a-kind moments that define an elevated lifestyle.
      </div>
      </div>
    </Container>
  </div>
  )
}

