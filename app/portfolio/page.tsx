"use client";

import Container from "@/components/container";
import { ContactForm, MonthStyle, Partners } from "@/components/homeComponents";

function Page() {
  return (
    <div className="bg-black">
      <Hero />

      <MonthStyle />

      {/* <Gallery /> */}

      <Partners />

      <ContactForm />
    </div>
  );
}

export default Page;

function Hero() {
  return (
    <div
      className="w-full wmin_390:h-[calc(100vh-80px)] wmax_360:!h-[65vh] wmin_360:wmax_md:!h-[70vh] bg-[#373737] wmax_lg:relative bg-cover bg-no-repeat wmax_lg:bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(/images/portfolio/hero_img.png)` }}
    >
      {/* <div className="wmin_xl:w-full wmax_xl:w-[90%] h-fit flex flex-col items-center gap-[15px]">
        <span className="text-white wmax_xl:text-[20px] wmin_xl:text-[48px] font-bold text-center uppercase">
          our portfolio
        </span>
      </div> */}

      <div className="wmin_xl:w-full wmax_xl:w-[90%] h-fit flex flex-col items-center gap-[15px] absolute wmin_lg:bottom-[20%] bottom-[30%] left-0 wmax_xl:left-[5%] z-[3]">
        <span className="text-white wmax_xl:text-[26px] wmin_xl:text-[48px] font-bold text-center uppercase" style={{fontWeight:'bolder'}}>
        our portfolio
        </span>
        </div>
    </div>
  );
}

function Gallery() {
  const galleryImages = [
    "/images/services/styling/hero_img.png",
    "/images/home/showcase_img.png",
    "/images/services/alteration/gallery2.png",
    "/images/services/styling/gallery1.png",
    "/images/services/alteration/gallery1.png",
    "/images/fashion/image2.png",
  ];

  return (
    <div className="w-full h-fit bg-black">
      <Container className="w-full h-fit flex flex-col gap-[1em]">
        <div className="w-full h-fit grid wmin_md:grid-cols-[4fr_6fr] wmax_md:grid-cols-1">
          <div className="col-span-1 wmin_390:h-[430px] wmax_390:h-[350px] relative">
            <img
              className="w-full h-full object-cover"
              src={galleryImages[0]}
              alt=""
            />
          </div>
          <div className="col-span-1 wmin_390:h-[430px] wmax_390:h-[350px] relative">
            <img
              className="w-full h-full object-cover"
              src={galleryImages[1]}
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-fit grid wmin_md:grid-cols-[4fr_6fr] wmax_md:grid-cols-1">
          <div className="col-span-1 wmin_390:h-[430px] wmax_390:h-[350px] relative">
            <img
              className="w-full h-full object-cover"
              src={galleryImages[2]}
              alt=""
            />
          </div>
          <div className="col-span-1 wmin_390:h-[430px] wmax_390:h-[350px] relative">
            <img
              className="w-full h-full object-cover"
              src={galleryImages[3]}
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-fit grid wmin_md:grid-cols-[6fr_4fr] wmax_md:grid-cols-1">
          <div className="col-span-1 wmin_390:h-[430px] wmax_390:h-[350px] relative">
            <img
              className="w-full h-full object-cover"
              src={galleryImages[4]}
              alt=""
            />
          </div>
          <div className="col-span-1 wmin_390:h-[430px] wmax_390:h-[350px] relative">
            <img
              className="w-full h-full object-cover"
              src={galleryImages[5]}
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
