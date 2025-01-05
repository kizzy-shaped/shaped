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
    <div className="w-full wmin_390:h-[calc(100vh-80px)] wmax_360:!h-[65vh] wmin_360:wmax_md:!h-[70vh] bg-[#373737] wmax_lg:relative bg-[url(/images/fashion/hero_img.png)] bg-cover bg-no-repeat wmax_lg:bg-center">
      <div className="wmin_xl:w-full wmax_xl:w-[90%] h-fit flex flex-col items-center gap-[15px] absolute bottom-[4%] left-0 wmax_xl:left-[5%] z-[3]">
        <span className="text-white wmax_xl:text-[20px] wmin_xl:text-[48px] font-black text-center">
          FASHION SERVICES
        </span>
      </div>
    </div>
  );
}

function AboutDesc() {
  return (
    <div className="w-full h-fit bg-black">
      <Container className="wmin_lg:py-[6vh] wmax_lg:py-[3vh] flex flex-col wmin_lg:gap-[28px] wmax_lg:gap-[14px]">
        <div className="wmin_xl:w-[65%] wmin_lg:text-[40px] wmax_lg:text-[20px] font-bold text-white">
          Curated, Bespoke Fashion, Tailored Just 
          for You.
        </div>

        <div className="wmin_lg:w-[80%] wmax_lg:w-full wmin_lg:text-[18px] wmax_lg:text-[14px] font-bold text-white">
          At SHAPED, we believe that your style should be as unique as you are.
          Our Fashion Services are designed to give you a seamless, luxurious
          experience—whether you're seeking expert styling, personal shopping,
          or the perfect bespoke garment. Explore our range of services below,
          each tailored to elevate your wardrobe and enhance your lifestyle.
        </div>
      </Container>
    </div>
  );
}

function Gallery() {
  const services = [
    {
      link: "styling_services",
      title: "styling services",
      desc: {
        title: "Unleash Your Signature Style.",
        desc: "At SHAPED, we believe that your style should be as unique as you are. Our Fashion Services are designed to give you a seamless, luxurious experience—whether you're seeking expert styling, personal shopping, or the perfect bespoke garment. Explore our range of services below, each tailored to elevate your wardrobe and enhance your lifestyle.",
      },
      heroImage: "/images/fashion/hero_img.png",
      galleryImages: [
        "/images/home/featuring/collection.png",
        "/images/home/featuring/quality.png",
        "/images/home/featuring/quality.png",
        "/images/home/featuring/styles.png",
      ],
    },
    {
      link: "personal_shopping",
      title: "personal shopping",
     desc: {
        title: "Unleash Your Signature Style.",
        desc: "Let SHAPED help you unlock your personal style with our exclusive styling services. Whether you're looking to refine your look, update your wardrobe, or experiment with new trends, our expert stylists curate outfits that reflect your individuality and bring out the best in you. From casual chic to formal elegance, we ensure every look is crafted to perfection, leaving you confident and effortlessly stylish.",
      },
      heroImage: "/images/fashion/hero_img.png",
      galleryImages: [
        "/images/home/featuring/collection.png",
        "/images/home/featuring/quality.png",
        "/images/home/featuring/quality.png",
        "/images/home/featuring/styles.png",
      ],
    },
    {
      link: "bespoke_garment_creation",
      title: "The Perfect Piece, Every Time.",
     desc: {
        title: "Unleash Your Signature Style.",
        desc: "At SHAPED, we believe that your style should be as unique as you are. Our Fashion Services are designed to give you a seamless, luxurious experience—whether you're seeking expert styling, personal shopping, or the perfect bespoke garment. Explore our range of services below, each tailored to elevate your wardrobe and enhance your lifestyle.",
      },
      heroImage: "/images/fashion/hero_img.png",
      galleryImages: [
        "/images/home/featuring/collection.png",
        "/images/home/featuring/quality.png",
        "/images/home/featuring/quality.png",
        "/images/home/featuring/styles.png",
      ],
    },
    {
      link: "alteration_services",
      title: "alteration_services",
     desc: {
        title: "One-of-a-Kind, Just for You.",
        desc: "When off-the-rack doesn’t cut it, SHAPED offers bespoke garment creation that is tailored to your exact specifications. From luxurious fabrics to custom silhouettes, we craft each garment to fit your body and your vision. Whether it’s for a wedding, a corporate event, or a milestone celebration, we create one-of-a-kind pieces designed to make you stand out. Every stitch, every detail, made just for you.",
      },
      heroImage: "/images/fashion/hero_img.png",
      galleryImages: [
        "/images/home/featuring/collection.png",
        "/images/home/featuring/quality.png",
        "/images/home/featuring/quality.png",
        "/images/home/featuring/styles.png",
      ],
    },
  ]

  return (
    <div className="w-full h-fit bg-white">
      <div className="w-full h-fit flex flex-col">
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
              <div className="wmin_md:text-[2.5rem] wmax_md:text-[1.5rem] font-black text-white uppercase">
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
      </div>
    </div>
  );
}
