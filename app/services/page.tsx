"use client";

import Container from "@/components/container";
import { ContactForm, MonthStyle } from "@/components/homeComponents";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { IService, services, shaped_education } from "@/constants/services";

const Service = () => {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("serviceId") as keyof typeof services;

  const service = services.concat([shaped_education]).find(
    (service) => service.link === serviceId
  ) as IService;

  return (
    <div className="bg-black">
      <Hero service={service} />

      <AboutDesc service={service} />

      {serviceId == ("styling_services" as any) && <MonthStyle />}

      {serviceId == ("styling_services" as any) && (
        <div className="w-full wmin_md:h-[3em] wmax_md:h-[1.5em] bg-black"></div>
      )}

      <Gallery service={service} />

      <ContactForm />
    </div>
  );
};

export default Service;

function Hero({ service }: { service: IService }) {
  return (
    // <div className="w-full wmin_390:h-[calc(100vh-80px)] wmax_360:!h-[65vh] wmin_360:wmax_md:!h-[70vh] bg-[#373737] wmax_lg:relative bg-[url(/images/fashion/hero_img.png)] bg-cover bg-no-repeat wmax_lg:bg-center">
    <div className="w-full wmin_390:h-[calc(100vh-80px)] wmax_360:!h-[65vh] wmin_360:wmax_md:!h-[70vh] bg-[#373737] wmax_lg:relative bg-cover bg-no-repeat wmax_lg:bg-center" style={{backgroundImage: `url(${service?.heroImage})`}}>
      <div className="wmin_xl:w-full wmax_xl:w-[90%] h-fit flex flex-col items-center gap-[15px] absolute bottom-[4%] left-0 wmax_xl:left-[5%] z-[3]">
        <span className="text-white wmax_xl:text-[20px] wmin_xl:text-[48px] font-black text-center uppercase">
          {service?.title}
        </span>
      </div>
    </div>
  );
}

function AboutDesc({ service }: { service: IService }) {
  return (
    <div className="w-full h-fit bg-black">
      <Container className="wmin_lg:py-[6vh] wmax_lg:py-[3vh] flex flex-col wmin_lg:gap-[28px] wmax_lg:gap-[14px]">
        <div className="wmin_xl:w-[65%] wmin_lg:text-[40px] wmax_lg:text-[20px] font-bold text-white">
          {service?.desc.title}
        </div>

        {!service?.desc?.list ? (<div className="wmin_lg:w-[80%] wmax_lg:w-full wmin_lg:text-[18px] wmax_lg:text-[14px] font-bold text-white">
          {service?.desc.desc}
        </div>) : (service?.desc?.desc as string[])?.map((text, index) => (<div
         className="wmin_lg:w-[80%] wmax_lg:w-full wmin_lg:text-[18px] wmax_lg:text-[14px] font-bold text-white"
         key={index}
         >
          {text}
        </div>))}
      </Container>
    </div>
  );
}

function Gallery({ service }: { service: IService }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div className="w-full h-fit bg-black">
      <Container className="w-full h-fit grid wmin_md:grid-cols-2 wmax_md:grid-cols-1 wmin_md:grid-rows-2">
        {service?.galleryImages.map((item, index) => (
          <div
            className="col-span-1 wmin_390:h-[430px] wmax_390:h-[350px] relative"
            key={index}
          >
            <img className="w-full h-full object-cover" src={item} alt="" />
          </div>
        ))}
      </Container>
    </div>
  );
}
