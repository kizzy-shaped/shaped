import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import Container from "@/components/container";
import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  MouseEventHandler,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { useCarousel } from "@/components/carousel";
import ReactPlayer from "react-player";
import { useFormik } from "formik";
import { number, ObjectSchema, string } from "yup";
import { IoIosCloseCircle } from "react-icons/io";
import { useModal } from "@/context/modal";
import { MessageSentModal } from "./shared";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { services } from "@/constants/services";
import AnimationHandler from "@/utils/animations";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import { useMultiRevealOnScroll } from "./hooks/useMultiRevealOnScroll";
import is from "@/utils/viewport";
import { clients_feedbacks } from "@/constants/clients_feedbacks";
import Modal from "./modal";

export function Partners() {
  return (
    <div className="w-full wmin_lg:h-[196px] wmax_lg:h-[110px] bg-black">
      <Container className="flex items-center">
        <Marquee loop={0} speed={50} className="w-full h-fit flex">
          {[
            { img: "/images/home/partners/caf.png" },
            { img: "/images/home/partners/nta.png" },
            { img: "/images/home/partners/teen_awards.png" },
            { img: "/images/home/partners/rocnation.png" },
            { img: "/images/home/partners/made_in_america.png" },
            { img: "/images/home/partners/pepsi.png" },
            { img: "/images/home/partners/smart.png" },
          ].map(({ img }, index) => (
            <img
              className="w-auto wmin_lg:h-[72px] wmax_lg:h-[48px] wmin_lg:mr-[72px] wmax_lg:mr-[20px]"
              src={img}
              alt=""
              key={index}
            />
          ))}
        </Marquee>
      </Container>
    </div>
  );
}

export function About() {
  let isMobile = is("max", 769);
  // const [thresold, setThresold] = useState(0.1)

  // useEffect(() => {
  //   isMobile ? setThresold(0.01): setThresold(0.25)
  // }, [isMobile])

  const isVisible = useMultiRevealOnScroll({
    threshold: 0.1,  // Trigger reveal when 50% of an element is visible
    offset: 0,       // No offset
    rootMargin: '0px', // Default margin
  });
 
  const [hovered, setHovered] = useState(false);
  const interval = 2000;
  const items = [
    "/images/home/about/intro1.png",
    "/images/home/about/intro2.png",
    "/images/home/about/intro3.png",
    "/images/home/about/intro4.png",
  ];
  const currentIndex = useCarousel(items, interval);

  return (
    <div className={`w-full wmin_lg:h-fit bg-black`} id="about" data-reveal-on-scroll 
    style={{
      opacity: isVisible[`about`] ? 1 : 0.85,
      transform: isVisible[`about`] ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
    }}
    >
      <Container className="h-fit wmin_lg:grid wmin_lg:grid-cols-2 gap-[3em] wmax_lg:flex wmax_lg:flex-col wmin_lg:pt-[11vh] wmax_lg:pt-[3vh]">
        <div className="col-span-1 h-full flex flex-col gap-[32px] justify-center">
          <div className="wmin_xl:text-[22px] wmax_xl:text-[14px] font-bold text-white">
            At SHAPED, we are redefining what it means to experience true luxury
            in the modern world. Our singular mission is to return to you the
            one thing that matters most—your time. Through unparalleled service
            and an exclusive network, we create exceptional experiences that
            allow you to enjoy life at its fullest, without the effort.
          </div>

          <Link
            href={"/about_us"}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`w-fit wmin_md:h-[60px] wmax_md:h-[40px] bg-white ${
              hovered ? "pl-[22px] pr-[18px]" : "px-[22px]"
            } text-black wmax_xl:text-[16px] wmin_xl:text-[22px] font-semibold flex items-center justify-between gap-[10px] rounded-[24px]`}
          >
            Learn More
            <FiArrowRight
              className={`wmin_xl:w-[28px] wmin_xl:h-[28px] wmax_xl:w-[22px] wmax_xl:h-[22px] text-black ${
                hovered ? "ml-[4px]" : ""
              }`}
            />
          </Link>
        </div>

        <div className="col-span-1 wmin_lg:h-[530px] wmax_lg:h-[309px]">
          {items.map((img, index) => (
            <div
              className="w-full h-full ml-auto"
              style={{
                // opacity: index === currentIndex ? 1 : 0,
                display: index === currentIndex ? "inline-block" : "none",
                transition: "all 0.35s ease-in-out",
              }}
              key={index}
            >
              <img
                className={`w-full h-full object-cover ${index === currentIndex?'animate-fadeIn':'animate-fadeOut'} ease-in-out delay-0 transition-all rounded-[24px]`}
                style={{
                  display: index === currentIndex ? "inline-block" : "none",
                  transition: "all 0.35 ease-in-out",
                }}
                src={img}
                alt=""
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export function Featuring() {
  const items = [
    {
      img: "/images/home/featuring/styles.png",
      title: `STYLE FOR YIU`,
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, eum.`,
    },
    {
      img: "/images/home/featuring/quality.png",
      title: `HIGH QUALITY PRODUCT`,
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos?`,
    },
    {
      img: "/images/home/featuring/collection.png",
      title: `EXCLUSIVE COLLECTION`,
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos?`,
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div className="w-full h-fit wmin_lg:pt-[15vh] wmax_lg:pt-[3vh] wmin_lg:pb-[5vh] wmax_lg:pb-[2vh] bg-white">
      <Container className="flex flex-col items-center justify-center wmin_md:gap-[4em] wmax_md:gap-[2.5em] py-[3vh]">
        <span className="text-black wmin_md:text-[40px] wmax_md:text-[24px] font-black">
          FEATURING
        </span>

        {/* <div className="w-[96%] h-[444px] grid grid-cols-[366px_366px_366px] justify-between"> */}
        <div className="w-[97%] wmin_lg:h-[444px] wmax_lg:h-fit grid wmin_lg:grid-cols-3 wmax_lg:grid-cols-1 wmin_md:gap-x-[1.3em] wmin_3xl:gap-[3.5em] wmax_md:gap-y-[1.5em]">
          {items.map(({ img, desc, title }, index) => (
            <div
              className="col-span-1 wmin_lg:h-full wmax_375:h-[350px] wmin_375:wmax_lg:h-[389px] relative overflow-hidden rounded-[24px]"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() =>
                setHoveredIndex(index == hoveredIndex ? null : index)
              }
            >
              <img className="w-full h-full" src={img} alt="" />

              {hoveredIndex !== index && (
                <div className="text-[22px] font-semibold bg-gradient-to-b from-[#00000000] to-[#000000] text-white pl-[24px] pb-[2em] uppercase w-full h-fit absolute bottom-0 left-0 z-[3]">
                  {title}
                </div>
              )}

              <div
                className={`absolute bottom-0 left-0 w-full h-fit bg-gradient-to-b from-[#00000000] to-[#000000] text-white flex flex-col gap-[20px]  transition-transform duration-500 p-[24px] ${
                  hoveredIndex === index ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <div className="text-[22px] font-semibold text-white uppercase">
                  {title}
                </div>

                <div className="text-[16px] font-semibold text-white">
                  {desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

function PlayBtn({
  className = "",
  onPress,
}: {
  className?: string;
  onPress: MouseEventHandler<HTMLSpanElement> | undefined;
}) {
  return (
    <span
      onClick={onPress}
      className={`wmin_md:w-[90px] wmin_md:h-[90px] wmax_md:w-[60px] wmax_md:h-[60px] ${className}`}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="60" cy="60" r="60" fill="white" />
        <g filter="url(#filter0_d_165_729)">
          <path
            d="M71 54.8038C75 57.1132 75 62.8868 71 65.1962L59 72.1244C55 74.4338 50 71.547 50 66.9282V53.0718C50 48.453 55 45.5662 59 47.8756L71 54.8038Z"
            fill="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_165_729"
            x="26"
            y="39.0628"
            width="72"
            height="73.8743"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="8"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_165_729"
            />
            <feOffset dy="16" />
            <feGaussianBlur stdDeviation="16" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_165_729"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_165_729"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </span>
  );
}

// export function MonthStyle() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   const handlePlayPause = () => {
//     if (isPlaying) {
//       (videoRef as any)?.current.pause();
//     } else {
//       (videoRef as any)?.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="w-full wmin_lg:h-[689px] wmax_lg:h-[60vh] bg-whit wmin_lg:py-[7.5vh] wmax_lg:py-[3vh] bg-black">
//       <Container className="flex items-center justify-center">
//         <div className="wmin_md:w-[80%] wmax_md:w-full h-full relative">
//           <div className="w-full h-full relative">
//             {!isPlaying && (
//               <div className="absolute z-[4] top-0 left-0 w-full h-full flex items-center justify-center">
//                 <PlayBtn onPress={() => handlePlayPause()} className="" />
//               </div>
//             )}

//             <video
//               ref={videoRef}
//               controls={isPlaying}
//               onPause={() => setIsPlaying(false)}
//               onPlay={() => setIsPlaying(true)}
//               loop
//               className="w-full h-full absolute top-0 left-0 object-cover"
//             >
//               <source src="/videos/fashion.mp4" />
//             </video>
//           </div>

//           {!isPlaying && (
//             <div className="wmin_md:text-[22px] wmax_md:text-[18px] font-black text-white uppercase text-center w-full h-fit absolute bottom-[4%] left-0 z-[3]">
//               STYLE OF THE MONTH
//             </div>
//           )}
//         </div>
//       </Container>
//     </div>
//   );
// }
export function MonthStyle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      (videoRef as any)?.current.pause();
    } else {
      (videoRef as any)?.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full wmin_lg:h-[689px] wmax_lg:h-[60vh] bg-whit wmin_lg:py-[7.5vh] wmax_lg:py-[3vh] bg-white">
      <Container className="flex items-center justify-center">
        <div className="wmin_md:w-[80%] wmax_md:w-full h-full wmax_md:px-[1em] relative">
          <div className="w-full h-full relative">
            {!isPlaying && (
              <div className="absolute z-[4] top-0 left-0 w-full h-full flex items-center justify-center">
                <PlayBtn onPress={() => handlePlayPause()} className="" />
              </div>
            )}

            <video
              ref={videoRef}
              controls={isPlaying}
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              loop
              className="w-full h-full absolute top-0 left-0 object-cover"
            >
              <source src="/videos/fashion.mp4" />
            </video>
          </div>

          {!isPlaying && (
            <div className="wmin_md:text-[22px] wmax_md:text-[18px] font-black text-white uppercase text-center w-full h-fit absolute bottom-[4%] left-0 z-[3]">
              STYLE OF THE MONTH
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export function Services() {
  const router = useRouter();
  const isVisible = useMultiRevealOnScroll({
    threshold: 0.5,  // Trigger reveal when 50% of an element is visible
    offset: 0,       // No offset
    rootMargin: '0px', // Default margin
  });

 
  return (
    <div className="w-full h-fit bg-black wmin_lg:bg-whit wmax_lg:bg-[#F3F3F3BF wmin_lg:my-[3em] wmax_lg:mt-[0em]">
      {/* Deskop */}
      <Container className="wmax_md:hidden grid wmin_lg:grid-cols-3 wmin_lg:gap-[32px] wmax_lg:grid-cols-1 wmax_lg:gap-[8px] wmin_lg:py-[5em] wmax_lg:py-[3em]">
        <div className="col-span-full flex wmin_md:flex-row wmax_md:flex-col wmin_md:justify-between wmax_md:gap-[8px]">
          <div className="col-span-1 h-fit wmin_md:text-[40px] wmax_md:text-[24px] font-black text-white">
            OUR SERVICES
          </div>

          <div className="wmin_md:text-[24px] wmax_md:text-[14px] font-bold text-white">
            From styling to bespoke services, we've got you <br />
            covered for every occasion.
          </div>
        </div>

        {services.map(
          ({ desc, galleryImages, heroImage, link, title, overview, thumbnail }, index) => (
            <div
              className={`col-span-1 wmin_md:h-[75vh] wmax_md:h-[55vh] wmax_lg:mt-[20px] grid grid-cols-1 grid-rows-[4.5fr_5.5fr] relative overflow-hidden rounded-[24px]`}
              key={index}
              id={`service-${index}`}
              data-reveal-on-scroll 
              style={{
                opacity: isVisible[`service-${index}`] ? 1 : 0,
                transform: isVisible[`service-${index}`] ? 'translateY(0)' : 'translateY(50px)',
                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
              }}
            >
              <div className="w-full h-full overflow-hidden col-span-1 row-start-1 row-end-2">
                <img
                  className="w-full h-ful max-h-full object-cover"
                  src={thumbnail}
                  alt=""
                />
              </div>

              <div className="w-full h-full col-span-1 row-start-2 row-end-3 bg-[#1a1a1a] flex flex-col justify-between py-[1.5em] px-[2em]">
                <div className="w-full h-fit flex flex-col gap-[4px] justify-end relative">
                  <div className="text-[24px] font-bold text-white uppercase">
                    {title}
                  </div>

                  <div className="text-[20px] font-bold text-[#9C9C9C]">
                    {overview}
                  </div>
                </div>

                <Link
                  href={`/services?serviceId=${link}`}
                  className="text-[22px] font-bold bg-gradien-to-b from-[#00000000] to-[#000000] text-white capitalize w-fit h-fit flex items-center gap-[10px]"
                >
                  Learn More
                  <FiArrowRight className={`w-[28px] h-[28px] text-white`} />
                </Link>
              </div>
            </div>
          )
        )}
      </Container>
      {/* Deskop */}

      {/* Mobile */}
      <Container className="wmin_md:hidden grid wmin_lg:grid-cols-3 wmin_lg:gap-[32px] wmax_lg:grid-cols-1 wmax_lg:gap-[8px] wmin_lg:py-[5em] wmax_lg:py-[3em]">]        <div className="col-span-full flex wmin_md:flex-row wmax_md:flex-col wmin_md:justify-between wmax_md:gap-[8px]">
          <div className="col-span-1 h-fit wmin_md:text-[40px] wmax_md:text-[24px] font-black text-white">
            OUR SERVICES
          </div>

          <div className="wmin_md:text-[24px] wmax_md:text-[14px] font-bold text-white">
            From styling to bespoke services, we've got you <br />
            covered for every occasion.
          </div>
        </div>

        <div className="w-full h-fit  overflow-scroll pb-[1.5em]">
          <div className="w-fit h-fit flex gap-[20px]">
            {services.map(
              ({ desc, galleryImages, heroImage, link, title }, index) => (
                <div
                  className={`w-[90vw] h-[fit] bg-green-700 wmax_lg:mt-[20px] grid grid-cols-1 grid-rows-[30vh_30vh] relative overflow-hidden rounded-[24px]`}
                  key={index}
                >
                  <div className="w-full h-full overflow-hidden col-span-1 row-start-1 row-end-2">
                    <img
                      className="w-full h-full max-h-full object-cover"
                      src={heroImage}
                      alt=""
                    />
                  </div>

                  <div className="w-full h-full col-span-1 row-start-2 row-end-3 bg-[#1a1a1a] flex flex-col gap-[3em] py-[1em] px-[1.5em]">
                    <div className="w-full h-fit flex flex-col gap-[4px] justify-end relative">
                      <div className="text-[20px] font-bold text-white uppercase">
                        {title}
                      </div>

                      <div className="text-[14px] font-bold text-[#9C9C9C]">
                        {desc?.title}
                      </div>
                    </div>

                    <Link
                      href={`/services?serviceId=${link}`}
                      className="text-[22px] font-bold bg-gradien-to-b from-[#00000000] to-[#000000] text-white capitalize w-fit h-fit flex items-center gap-[10px]"
                    >
                      Learn More
                      <FiArrowRight
                        className={`w-[28px] h-[28px] text-white`}
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

interface IInputTile {
  id: number;
  input: {
    value: string;
    handleChange: ChangeEventHandler<HTMLInputElement> | undefined;
  };
  placeholder: string;
  type: HTMLInputTypeAttribute | undefined;
}

export function ClientsFeedback() {
  
  const isVisible = useMultiRevealOnScroll({
    threshold: 0.25,  // Trigger reveal when 50% of an element is visible
    offset: 0,       // No offset
    rootMargin: '0px', // Default margin
  });

  return (
    <div className="w-full h-fit bg-black">
      <div className="w-full h-fit wmin_md:py-[7vh] wmax_md:pt-[3vh] wmax_md:pb-[1vh] flex flex-col wmin_md:gap-[5vh] wmax_md:gap-[3vh]">
        <div className="wmin_md:text-[40px] wmax_md:text-[24px] text-white font-black text-center">
          CLIENTS' FEEDBACK
        </div>

        {/* Desktop */}
        <div className="wmax_md:hidden w-full h-fit">
          <Marquee
            loop={0}
            speed={50}
            className="w-full h-fit flex py-[2em]"
            style={{ height: "fit-content" }}
            pauseOnHover={true}
          >
            {clients_feedbacks.map(({ img, comments, name, rating }, index) => (
              <div
                className="wmin_md:w-[529px] wmax_md:w-[calc(90vw-20px)] wmin_md:h-[570px] h-fit bg-[#1a1a1a] flex flex-col wmin_md:gap-[32px] wmax_md:gap-[20px] items-center justify-center wmin_md:p-[3em] wmax_md:p-[1.5em] rounded-[24px] shadow-l shadow-[#B6B6B633 wmin_md:mr-[28px] wmax_md:mr-[20px]"
                key={index}
                data-reveal-on-scroll 
                id={`client-${index}`}
              style={{
                opacity: isVisible[`client-${index}`] ? 1 : 0.85,
                transform: isVisible[`client-${index}`] ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
              }}
              >
                {/* <div className="col-span-1 h-full">
                  <img className="w-[100%] h-[100%]" src={img} alt="" />
                </div> */}
                <div className="wmin_md:w-[48px] wmax_md:w-[40px] wmin_md:h-[48px] wmax_md:h-[40px]">
                  <svg
                    className={"w-full h-full"}
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.9996 36C36.7952 36 37.5583 35.6839 38.1209 35.1213C38.6835 34.5587 38.9996 33.7956 38.9996 33V25.674C38.9996 24.8783 38.6835 24.1153 38.1209 23.5527C37.5583 22.9901 36.7952 22.674 35.9996 22.674H31.8356C31.8356 21.62 31.8976 20.566 32.0216 19.512C32.2076 18.396 32.5176 17.404 32.9516 16.536C33.3856 15.668 33.9446 14.985 34.6286 14.487C35.3086 13.929 36.1766 13.65 37.2326 13.65V9C35.4966 9 33.9766 9.372 32.6726 10.116C31.3776 10.8506 30.265 11.8679 29.4176 13.092C28.5644 14.4394 27.9362 15.9168 27.5576 17.466C27.1747 19.1752 26.9875 20.9225 26.9996 22.674V33C26.9996 33.7956 27.3156 34.5587 27.8783 35.1213C28.4409 35.6839 29.2039 36 29.9996 36H35.9996ZM17.9996 36C18.7952 36 19.5583 35.6839 20.1209 35.1213C20.6835 34.5587 20.9996 33.7956 20.9996 33V25.674C20.9996 24.8783 20.6835 24.1153 20.1209 23.5527C19.5583 22.9901 18.7952 22.674 17.9996 22.674H13.8356C13.8356 21.62 13.8976 20.566 14.0216 19.512C14.2096 18.396 14.5196 17.404 14.9516 16.536C15.3856 15.668 15.9446 14.985 16.6286 14.487C17.3086 13.929 18.1766 13.65 19.2326 13.65V9C17.4966 9 15.9766 9.372 14.6726 10.116C13.3776 10.8506 12.265 11.8679 11.4176 13.092C10.5644 14.4394 9.93619 15.9168 9.55757 17.466C9.17472 19.1752 8.98752 20.9225 8.99957 22.674V33C8.99957 33.7956 9.31564 34.5587 9.87825 35.1213C10.4409 35.6839 11.2039 36 11.9996 36H17.9996Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div className="flex flex-col gap-[0px] wmin_md:items-center wmax_md:text-justify">
                  {comments.map((comment, index) => (
                    <div
                      className="text-white wmin_md:text-[14px] wmax_md:text-[12px] font-bold text-center"
                      key={index}
                    >
                      {comment}
                    </div>
                  ))}
                </div>

                <div className="text-white wmin_lg:text-[20px] wmax_lg:text-[18px] font-semibold uppercase">
                  {name}
                </div>
              </div>
            ))}
          </Marquee>
        </div>
        {/* Desktop */}

        {/* Mobile */}
        <div className="wmin_md:hidden w-full h-fit overflow-scroll pb-[1.5em]">
          <div className="w-fit h-fit flex gap-[20px]">
            {clients_feedbacks.map(({ img, comments, name, rating }, index) => (
              <div
                className="wmin_md:w-[529px] wmax_md:w-[calc(90vw-20px)] h-[33em] bg-[#1a1a1a] flex flex-col wmin_md:gap-[32px] wmax_md:gap-[20px] items-center justify-center wmin_md:p-[3em] wmax_md:p-[1.5em] rounded-[24px] shadow-l shadow-[#B6B6B633 wmin_md:mr-[28px] wmax_md:mr-[20px]"
                key={index}
                id={`client-${index}`}
                data-reveal-on-scroll 
              style={{
                opacity: isVisible[`client-${index}`] ? 1 : 0.85,
                // fontSize: isVisible[`client-${index}`] ? '1rem' : '0.8rem',
                // transform: isVisible[`client-${index}`] ? 'scale(1)' : 'scale(0.98)',
                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
              }}
              >
                {/* <div className="col-span-1 h-full">
                  <img className="w-[100%] h-[100%]" src={img} alt="" />
                </div> */}
                <div className="wmin_md:w-[48px] wmax_md:w-[40px] wmin_md:h-[48px] wmax_md:h-[35px]">
                  <svg
                    className={"w-full h-full"}
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.9996 36C36.7952 36 37.5583 35.6839 38.1209 35.1213C38.6835 34.5587 38.9996 33.7956 38.9996 33V25.674C38.9996 24.8783 38.6835 24.1153 38.1209 23.5527C37.5583 22.9901 36.7952 22.674 35.9996 22.674H31.8356C31.8356 21.62 31.8976 20.566 32.0216 19.512C32.2076 18.396 32.5176 17.404 32.9516 16.536C33.3856 15.668 33.9446 14.985 34.6286 14.487C35.3086 13.929 36.1766 13.65 37.2326 13.65V9C35.4966 9 33.9766 9.372 32.6726 10.116C31.3776 10.8506 30.265 11.8679 29.4176 13.092C28.5644 14.4394 27.9362 15.9168 27.5576 17.466C27.1747 19.1752 26.9875 20.9225 26.9996 22.674V33C26.9996 33.7956 27.3156 34.5587 27.8783 35.1213C28.4409 35.6839 29.2039 36 29.9996 36H35.9996ZM17.9996 36C18.7952 36 19.5583 35.6839 20.1209 35.1213C20.6835 34.5587 20.9996 33.7956 20.9996 33V25.674C20.9996 24.8783 20.6835 24.1153 20.1209 23.5527C19.5583 22.9901 18.7952 22.674 17.9996 22.674H13.8356C13.8356 21.62 13.8976 20.566 14.0216 19.512C14.2096 18.396 14.5196 17.404 14.9516 16.536C15.3856 15.668 15.9446 14.985 16.6286 14.487C17.3086 13.929 18.1766 13.65 19.2326 13.65V9C17.4966 9 15.9766 9.372 14.6726 10.116C13.3776 10.8506 12.265 11.8679 11.4176 13.092C10.5644 14.4394 9.93619 15.9168 9.55757 17.466C9.17472 19.1752 8.98752 20.9225 8.99957 22.674V33C8.99957 33.7956 9.31564 34.5587 9.87825 35.1213C10.4409 35.6839 11.2039 36 11.9996 36H17.9996Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div className="flex flex-col gap-[0px] wmin_md:items-center wmax_md:text-justify">
                  {comments.map((comment, index) => (
                    <div
                      className="text-white wmin_md:text-[14px] wmax_md:text-[10px] font-bold text-center"
                      key={index}
                    >
                      {comment}
                    </div>
                  ))}
                </div>

                <div className="text-white wmin_lg:text-[20px] wmax_lg:text-[14px] font-semibold uppercase">
                  {name}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile */}
      </div>
    </div>
  );
}

export function ContactForm({headline = 'Ready to elevate your style?'}:{headline?: string}) {
  const { showModal, hideModal } = useModal();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      country: "",
      favouriteBrand: "",
    },
    validationSchema: new ObjectSchema({
      name: string().required("Name is required"),
      email: string().required("Email is required"),
      phoneNumber: number(),
      country: string().required("Country is required"),
      favouriteBrand: string(),
    }),
    onSubmit: (data) => {
      console.log({data})
      // hideModal();
      showModal(<MessageSentModal />);
    },
  });

  const [hovered, setHovered] = useState(false);


  return (
    <div id="contact_us" className="w-full h-fit bg-black pl-[7.5%]">
      <div className="w-[calc(100% - 7.5%)] h-fit wmin_md:pt-[7vh] wmin_md:pb-[10vh] wmax_md:pt-[0vh] wmax_md:pb-[3vh] flex flex-col gap-[3vh]">
        <div className="w-[calc(92.5%)] h-fit flex flex-col gap-[12px] mt-[8vh] mr-auto">
          <div className="flex flex-col gap-[12px]">
            <div className="wmin_md:text-[40px] wmax_md:text-[24px] font-semibold text-white uppercase">
              {headline}
            </div>
          </div>

          <div className="flex flex-col wmin_md:gap-[12px] wmax_md:gap-[9px]">
            <input
              onChange={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              className="w-full h-[55px] bg-transparent text-[#373737] font-semibold border-b-[0.5px] border-b-[#D5D5D5] outline-none focus:outline-none focus:border-b-[0.5px] focus:border-b-[#D5D5D5] placeholder:text-[#9C9C9C]"
              placeholder={"Your Name *"}
              type="text"
            />
            <input
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              className="w-full h-[55px] bg-transparent text-[#373737] font-semibold border-b-[0.5px] border-b-[#D5D5D5] outline-none focus:outline-none focus:border-b-[0.5px] focus:border-b-[#D5D5D5] placeholder:text-[#9C9C9C]"
              placeholder={"Your Email *"}
              type="email"
            />
            <input
              onChange={handleChange("phoneNumber")}
              onBlur={handleBlur("phoneNumber")}
              value={values.phoneNumber}
              className="w-full h-[55px] bg-transparent text-[#373737] font-semibold border-b-[0.5px] border-b-[#D5D5D5] outline-none focus:outline-none focus:border-b-[0.5px] focus:border-b-[#D5D5D5] placeholder:text-[#9C9C9C]"
              placeholder={"Phone Number"}
              type="number"
            />
            <input
              onChange={handleChange("country")}
              onBlur={handleBlur("country")}
              value={values.country}
              className="w-full h-[55px] bg-transparent text-[#373737] font-semibold border-b-[0.5px] border-b-[#D5D5D5] outline-none focus:outline-none focus:border-b-[0.5px] focus:border-b-[#D5D5D5] placeholder:text-[#9C9C9C]"
              placeholder={"Your Country *"}
              type="text"
            />
            <input
              onChange={handleChange("favouriteBrand")}
              onBlur={handleBlur("favouriteBrand")}
              value={values.favouriteBrand}
              className="w-full h-[55px] bg-transparent text-[#373737] font-semibold border-b-[0.5px] border-b-[#D5D5D5] outline-none focus:outline-none focus:border-b-[0.5px] focus:border-b-[#D5D5D5] placeholder:text-[#9C9C9C]"
              placeholder={"Your Favorite Brand"}
              type="text"
            />

            <button
              onClick={() =>handleSubmit()}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={`w-fit wmin_md:h-[60px] wmax_md:h-[40px] bg-white wmin_md:mt-[6vh] wmax_md:mt-[2vh] ${
                hovered ? "pl-[22px] pr-[18px]" : "px-[22px]"
              } text-black wmax_xl:text-[16px] wmin_xl:text-[22px] font-semibold flex items-center justify-between gap-[10px] rounded-[24px]`}
            >
              Contact Us
              <FiArrowRight
                className={`wmin_xl:w-[28px] wmin_xl:h-[28px] wmax_xl:w-[22px] wmax_xl:h-[22px] text-black ${
                  hovered ? "ml-[4px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <Modal />
    </div>
  );
}

export function ClientsFeedbackContactForm() {
  return (
    <>
      <ClientsFeedback />
      <ContactForm />
    </>
  );
}

export function ContactFormModal() {
  const { showModal, hideModal } = useModal();

  const { values, errors, touched, handleChange, handleBlur } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      country: "",
      favouriteBrand: "",
    },
    validationSchema: new ObjectSchema({
      name: string().required("Name is required"),
      email: string().required("Email is required"),
      phoneNumber: number(),
      country: string().required("Country is required"),
      favouriteBrand: string(),
    }),
    onSubmit: (data) => {},
  });

  const [hovered, setHovered] = useState(false);

  const submit = () => {
    hideModal();
    showModal(<MessageSentModal />);
  };

  return (
    <div className="wmin_md:w-[680px] wmax_md:w-full h-fit bg-black">
      <div className="w-full h-fit pb-[3vh] flex flex-col gap-[3vh]">
        <div className="w-full h-fit wmin_md:px-[4vh] wmax_md:px-[2vh] wmax_md:pt-[1.5vh] flex flex-col gap-[12px] wmin_md:mt-[8vh] mr-auto">
          <div className="flex flex-col gap-[12px]">
            <div className="w-full flex items-center justify-between">
              <div className="wmin_md:text-[28px] wmax_md:text-[20px]  font-semibold text-white uppercase">
                Ready to elevate your style?
              </div>

              <IoIosCloseCircle
                onClick={hideModal}
                className="text-white w-[40px] h-[40px]"
              />
            </div>
            <div className="text-[20px] font-medium text-white">
              Become our client today.
            </div>
          </div>

          <div className="flex flex-col gap-[12px]">
            <input
              onChange={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              className="w-full h-[55px] bg-transparent text-[#D5D5D5] font-semibold border-b-[0.5px] border-b-[#D5D5D5] outline-none focus:outline-none focus:border-b-[0.5px] focus:border-b-[#D5D5D5]"
              placeholder={"Your Name *"}
              type="text"
            />
            <input
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              className="w-full h-[55px] bg-transparent text-[#D5D5D5] font-semibold border-b-[0.5px] border-b-[#D5D5D5] outline-none focus:outline-none focus:border-b-[0.5px] focus:border-b-[#D5D5D5]"
              placeholder={"Your Email *"}
              type="email"
            />
            <input
              onChange={handleChange("phoneNumber")}
              onBlur={handleBlur("phoneNumber")}
              value={values.phoneNumber}
              className="w-full h-[55px] bg-transparent text-[#D5D5D5] font-semibold border-b-[0.5px] border-b-[#D5D5D5] outline-none focus:outline-none focus:border-b-[0.5px] focus:border-b-[#D5D5D5]"
              placeholder={"Your Phone Number"}
              type="number"
            />
            <input
              onChange={handleChange("country")}
              onBlur={handleBlur("country")}
              value={values.country}
              className="w-full h-[55px] bg-transparent text-[#D5D5D5] font-semibold border-b-[0.5px] border-b-[#D5D5D5] outline-none focus:outline-none focus:border-b-[0.5px] focus:border-b-[#D5D5D5]"
              placeholder={"Your Country *"}
              type="text"
            />
            <input
              onChange={handleChange("favouriteBrand")}
              onBlur={handleBlur("favouriteBrand")}
              value={values.favouriteBrand}
              className="w-full h-[55px] bg-transparent text-[#D5D5D5] font-semibold border-b-[0.5px] border-b-[#D5D5D5] outline-none focus:outline-none focus:border-b-[0.5px] focus:border-b-[#D5D5D5]"
              placeholder={"Your Favorite Brand (Optional)"}
              type="text"
            />

            <button
              onClick={submit}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={`wmax_md:w-full wmin_md:w-fit wmin_md:h-[60px] wmax_md:h-[40px] bg-white wmin_md:mt-[6vh] wmax_md:mt-[3vh] ${
                hovered ? "pl-[22px] pr-[18px]" : "px-[22px]"
              } text-black text-[20px] font-semibold flex items-center justify-between gap-[10px] rounded-[24px]`}
            >
              Contact Us
              <FiArrowRight
                className={`w-[28px] h-[28px] text-black ${
                  hovered ? "ml-[4px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
