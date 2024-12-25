import Link from "next/link";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import Container from "@/components/container";
import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useState,
} from "react";
import { useCarousel } from "@/components/carousel";
import ReactPlayer from "react-player";
import { useFormik } from "formik";
import { ObjectSchema, string } from "yup";

export function Partners() {
  return (
    <div className="w-full h-[196px] bg-white">
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
              className="w-auto h-[72px] mr-[72px]"
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
    <div className="w-full h-[530px] bg-white">
      <Container className="grid grid-cols-2">
        <div className="col-span-1 h-full flex flex-col gap-[32px] justify-center">
          <div className="text-[22px] font-medium text-black">
            At SHAPED, we are redefining what it means to experience true luxury
            in the modern world. Our singular mission is to return to you the
            one thing that matters most—your time. Through unparalleled service
            and an exclusive network, we create exceptional experiences that
            allow you to enjoy life at its fullest, without the effort.
          </div>

          <Link
            href={""}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`w-fit h-[60px] bg-[#000000] ${
              hovered ? "pl-[22px] pr-[18px]" : "px-[22px]"
            } text-white text-[20px] font-semibold flex items-center justify-between gap-[10px] rounded-[24px]`}
          >
            Learn More
            <FaArrowRight
              className={`w-[28px] h-[28px] text-white ${
                hovered ? "ml-[4px]" : ""
              }`}
            />
          </Link>
        </div>

        {items.map((img, index) => (
          <div
            className="w-[599px] h-[530px] ml-auto"
            style={{
              // opacity: index === currentIndex ? 1 : 0,
              display: index === currentIndex ? "inline-block" : "none",
              transition: "all 0.35s ease-in-out",
            }}
            key={index}
          >
            <img
              className={`w-full h-full object-cover animate-fadeIn ease-in-out transition-all rounded-[24px]`}
              style={{
                display: index === currentIndex ? "inline-block" : "none",
                transition: "all 0.35 ease-in-out",
              }}
              src={img}
              alt=""
            />
          </div>
        ))}
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
    <div className="w-full h-fit py-[3vh] bg-white">
      <Container className="flex flex-col items-center justify-center gap-[30px] py-[3vh]">
        <span className="text-black text-[40px] font-semibold">FEATURING</span>

        <div className="w-[96%] h-[444px] grid grid-cols-[366px_366px_366px] justify-between">
          {items.map(({ img, desc, title }, index) => (
            <div
              className="col-span-1 h-full relative overflow-hidden rounded-[24px]"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img className="w-full h-full" src={img} alt="" />

              {hoveredIndex !== index && (
                <div className="text-[22px] font-semibold bg-gradient-to-b from-[#00000000] to-[#000000] text-white pl-[24px] uppercase w-full h-[25%] absolute bottom-0 left-0 z-[3]">
                  {title}
                </div>
              )}

              <div
                className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#00000000] to-[#000000] text-white flex flex-col gap-[20px]  transition-transform duration-500 p-[24px] ${
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

export function MonthStyle() {
  return (
    <div className="w-full h-[689px] bg-white">
      <Container className="flex items-center justify-center">
        <div className="w-[80%] h-full relative">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "100%",
              minWidth: "100%",
            }}
          />

          <div className="text-[22px] font-semibold text-white uppercase text-center w-full absolute top-[85%] left-0 z-[3]">
            STYLE OF THE MONTH
          </div>
        </div>
      </Container>
    </div>
  );
}

export function Services() {
  const items = [
    {
      img: "/images/home/services/alteration.png",
      title: `STYLE FOR YIU`,
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, eum.`,
    },
    {
      img: "/images/home/services/errands.png",
      title: `HIGH QUALITY PRODUCT`,
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos?`,
    },
    {
      img: "/images/home/services/event.png",
      title: `EXCLUSIVE COLLECTION`,
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos?`,
    },
    {
      img: "/images/home/services/fashion.png",
      title: `EXCLUSIVE COLLECTION`,
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos?`,
    },
    {
      img: "/images/home/services/garment.png",
      title: `EXCLUSIVE COLLECTION`,
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos?`,
    },
    {
      img: "/images/home/services/gathering_celebration.png",
      title: `EXCLUSIVE COLLECTION`,
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos?`,
    },
    {
      img: "/images/home/services/lifestyle_concierge.png",
      title: `EXCLUSIVE COLLECTION`,
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos?`,
    },
    {
      img: "/images/home/services/personal.png",
      title: `EXCLUSIVE COLLECTION`,
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos?`,
    },
    {
      img: "/images/home/services/travel_jet.png",
      title: `EXCLUSIVE COLLECTION`,
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos?`,
    },
    {
      img: "/images/home/services/styling.png",
      title: `EXCLUSIVE COLLECTION`,
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos?`,
    },
    {
      img: "/images/home/services/private_corperate.png",
      title: `EXCLUSIVE COLLECTION`,
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos?`,
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

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

        {items.map(({ desc, img, title }, index) => (
          <div
            className="col-span-1 h-[684px] relative overflow-hidden rounded-[24px]"
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img className="w-full h-full" src={img} alt="" />

            {hoveredIndex !== index && (
              <div className="text-[22px] font-semibold bg-gradient-to-b from-[#00000000] to-[#000000] text-white uppercase text-center w-full h-[25%] absolute bottom-0 left-0 z-[3]">
                {title}
              </div>
            )}

            <div
              className={`absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-[#00000000] to-[#000000] text-white  transition-transform duration-500 p-[2em] ${
                hoveredIndex === index ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <div className="w-full h-full flex flex-col gap-[20px] justify-end relative">
              <div className="w-full h-fit flex justify-center absolute top-[30%]">
                <Link href={'/services/1'} className="w-[96px] h-[96px] block cursor-pointer">
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

              <div className="text-[22px] font-semibold text-white uppercase">
                {title}
              </div>

              <div className="text-[16px] font-semibold text-white">{desc}</div>
            </div>
            </div>
          </div>
        ))}
      </Container>
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
  const items = [
    {
      img: "/images/home/clients_feedback/client_tiwa.png",
      name: "SYED AZAM",
      rating: 5,
      comments: [
        `I've contacted SHAPED on a number of occasions to source items that were incredibly hard to find in any of the London boutiques.`,
        ` Once I sent across the items, they were quick to respond confirming they would be able to help and provided an approximate lead time, with this they were also transparent about the fee for the service.
       Once I agreed they got to work! And my items were ready for collection.`,
        `I was very happy with the service and am I repeat customer thank you guys so much!`,
      ],
    },
    {
      img: "/images/home/clients_feedback/client_wizkid.png",
      name: "DON MADEGA",
      rating: 4,
      comments: [
        `I've contacted SHAPED on a number of occasions to source items that were incredibly hard to find in any of the London boutiques.`,
        ` Once I sent across the items, they were quick to respond confirming they would be able to help and provided an approximate lead time, with this they were also transparent about the fee for the service.
       Once I agreed they got to work! And my items were ready for collection.`,
        `I was very happy with the service and am I repeat customer thank you guys so much!`,
      ],
    },
    {
      img: "/images/home/clients_feedback/client_tiwa.png",
      name: "SYED AZAM",
      rating: 3,
      comments: [
        `I've contacted SHAPED on a number of occasions to source items that were incredibly hard to find in any of the London boutiques.`,
        ` Once I sent across the items, they were quick to respond confirming they would be able to help and provided an approximate lead time, with this they were also transparent about the fee for the service.
       Once I agreed they got to work! And my items were ready for collection.`,
        `I was very happy with the service and am I repeat customer thank you guys so much!`,
      ],
    },
    {
      img: "/images/home/clients_feedback/client_tiwa.png",
      name: "DON MADEGA",
      rating: 5,
      comments: [
        `I've contacted SHAPED on a number of occasions to source items that were incredibly hard to find in any of the London boutiques.`,
        ` Once I sent across the items, they were quick to respond confirming they would be able to help and provided an approximate lead time, with this they were also transparent about the fee for the service.
       Once I agreed they got to work! And my items were ready for collection.`,
        `I was very happy with the service and am I repeat customer thank you guys so much!`,
      ],
    },
  ];

  return (
    <div className="w-full h-fit bg-[#F3F3F3]">
      <div className="w-full h-fit py-[7vh] flex flex-col gap-[5vh]">
        <div className="text-[40px] text-white font-semibold text-center">
          CLIENTS' FEEDBACK
        </div>

        <div className="w-full h-fit">
          <Marquee
            loop={0}
            speed={50}
            className="w-full h-fit flex py-[2em]"
            style={{ height: "fit-content" }}
            pauseOnHover={true}
          >
            {items.map(({ img, comments, name, rating }, index) => (
              <div
                className="w-[529px] h-[448px] bg-white flex flex-col gap-[32px] items-center justify-center p-[3em] rounded-[24px] shadow-lg shadow-[#B6B6B633] mr-[28px]"
                key={index}
              >
                {/* <div className="col-span-1 h-full">
                  <img className="w-[100%] h-[100%]" src={img} alt="" />
                </div> */}
                <div className="w-[48px] h-[48px]">
                <svg className={'w-full h-full'} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.9996 36C36.7952 36 37.5583 35.6839 38.1209 35.1213C38.6835 34.5587 38.9996 33.7956 38.9996 33V25.674C38.9996 24.8783 38.6835 24.1153 38.1209 23.5527C37.5583 22.9901 36.7952 22.674 35.9996 22.674H31.8356C31.8356 21.62 31.8976 20.566 32.0216 19.512C32.2076 18.396 32.5176 17.404 32.9516 16.536C33.3856 15.668 33.9446 14.985 34.6286 14.487C35.3086 13.929 36.1766 13.65 37.2326 13.65V9C35.4966 9 33.9766 9.372 32.6726 10.116C31.3776 10.8506 30.265 11.8679 29.4176 13.092C28.5644 14.4394 27.9362 15.9168 27.5576 17.466C27.1747 19.1752 26.9875 20.9225 26.9996 22.674V33C26.9996 33.7956 27.3156 34.5587 27.8783 35.1213C28.4409 35.6839 29.2039 36 29.9996 36H35.9996ZM17.9996 36C18.7952 36 19.5583 35.6839 20.1209 35.1213C20.6835 34.5587 20.9996 33.7956 20.9996 33V25.674C20.9996 24.8783 20.6835 24.1153 20.1209 23.5527C19.5583 22.9901 18.7952 22.674 17.9996 22.674H13.8356C13.8356 21.62 13.8976 20.566 14.0216 19.512C14.2096 18.396 14.5196 17.404 14.9516 16.536C15.3856 15.668 15.9446 14.985 16.6286 14.487C17.3086 13.929 18.1766 13.65 19.2326 13.65V9C17.4966 9 15.9766 9.372 14.6726 10.116C13.3776 10.8506 12.265 11.8679 11.4176 13.092C10.5644 14.4394 9.93619 15.9168 9.55757 17.466C9.17472 19.1752 8.98752 20.9225 8.99957 22.674V33C8.99957 33.7956 9.31564 34.5587 9.87825 35.1213C10.4409 35.6839 11.2039 36 11.9996 36H17.9996Z" fill="black"/>
</svg>

                </div>

                  <div className="flex flex-col gap-[0px] items-center">
                    {comments.map((comment, index) => (
                      <div
                        className="text-black text-[14px] font-semibold text-center"
                        key={index}
                      >
                        {comment}
                      </div>
                    ))}
                  </div>

                  {/* <div className="flex gap-[4px]">
                    {Array.from({ length: rating }).map((_, index) => (
                      <FaStar className="text-black" key={index} />
                    ))}
                  </div> */}

                  <div className="text-black text-[20px] font-semibold uppercase">
                    {name}
                  </div>
                </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export function ContactForm() {

  const { values, errors, touched, handleChange, handleBlur } = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      favouriteBrand: "",
    },
    validationSchema: new ObjectSchema({
      name: string().required("Name is required"),
      email: string().required("Email is required"),
      country: string().required("Country is required"),
      favouriteBrand: string(),
    }),
    onSubmit: (data) => {},
  });

  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full h-fit bg-[#F3F3F3] pl-[7.5%]">
      <div className="w-[calc(100% - 7.5%)] h-fit py-[7vh] flex flex-col gap-[3vh]">
        <div className="w-[calc(92.5%)] h-fit flex flex-col gap-[12px] mt-[8vh] mr-auto">
          <div className="flex flex-col gap-[12px]">
            <div className="text-[40px] font-semibold text-black uppercase">
              Ready to elevate your style?
            </div>
            {/* <div className="text-[28px] font-medium text-white">
              Become our client today.
            </div> */}
          </div>

          <div className="flex flex-col gap-[12px]">
            <input
              onChange={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              className="w-full h-[55px] bg-transparent text-[#373737] text-[24px] font-semibold border-b-[0.5px] border-b-[#D5D5D5] outline-none focus:outline-none focus:border-b-[0.5px] focus:border-b-[#D5D5D5]"
              placeholder={"Your Name *"}
              type="text"
            />
            <input
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              className="w-full h-[55px] bg-transparent text-[#373737] text-[24px] font-semibold border-b-[0.5px] border-b-[#D5D5D5] outline-none focus:outline-none focus:border-b-[0.5px] focus:border-b-[#D5D5D5]"
              placeholder={"Your Email *"}
              type="email"
            />
            <input
              onChange={handleChange("country")}
              onBlur={handleBlur("country")}
              value={values.country}
              className="w-full h-[55px] bg-transparent text-[#373737] text-[24px] font-semibold border-b-[0.5px] border-b-[#D5D5D5] outline-none focus:outline-none focus:border-b-[0.5px] focus:border-b-[#D5D5D5]"
              placeholder={"Your Country *"}
              type="text"
            />
            <input
              onChange={handleChange("favouriteBrand")}
              onBlur={handleBlur("favouriteBrand")}
              value={values.favouriteBrand}
              className="w-full h-[55px] bg-transparent text-[#373737] text-[24px] font-semibold border-b-[0.5px] border-b-[#D5D5D5] outline-none focus:outline-none focus:border-b-[0.5px] focus:border-b-[#D5D5D5]"
              placeholder={"Your Favorite Brand"}
              type="text"
            />

            <Link
              href={""}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={`w-fit h-[60px] bg-black mt-[6vh] ${
                hovered ? "pl-[22px] pr-[18px]" : "px-[22px]"
              } text-white text-[20px] font-semibold flex items-center justify-between gap-[10px] rounded-[24px]`}
            >
              Contact Us
              <FaArrowRight
                className={`w-[28px] h-[28px] text-white ${
                  hovered ? "ml-[4px]" : ""
                }`}
              />
            </Link>
          </div>
        </div>
      </div>
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

  const { values, errors, touched, handleChange, handleBlur } = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      favouriteBrand: "",
    },
    validationSchema: new ObjectSchema({
      name: string().required("Name is required"),
      email: string().required("Email is required"),
      country: string().required("Country is required"),
      favouriteBrand: string(),
    }),
    onSubmit: (data) => {},
  });

  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-[680px] h-fit bg-black pl-[7.5%]">
      <div className="w-[calc(100% - 7.5%)] h-fit py-[7vh] flex flex-col gap-[3vh]">
        <div className="w-[calc(92.5%)] h-fit flex flex-col gap-[12px] mt-[8vh] mr-auto">
          <div className="flex flex-col gap-[12px]">
            <div className="text-[28px] font-semibold text-white uppercase">
              Ready to elevate your style?
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
              className="w-full h-[55px] bg-transparent text-white border-b-[0.5px] border-b-[#D5D5D5] outline-none focus:outline-none focus:border-b-[0.5px] focus:border-b-[#D5D5D5]"
              placeholder={"Your Name"}
              type="text"
            />
            <input
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              className="w-full h-[55px] bg-transparent text-white border-b-[0.5px] border-b-[#D5D5D5] outline-none focus:outline-none focus:border-b-[0.5px] focus:border-b-[#D5D5D5]"
              placeholder={"Your Email"}
              type="email"
            />
            <input
              onChange={handleChange("country")}
              onBlur={handleBlur("country")}
              value={values.country}
              className="w-full h-[55px] bg-transparent text-white border-b-[0.5px] border-b-[#D5D5D5] outline-none focus:outline-none focus:border-b-[0.5px] focus:border-b-[#D5D5D5]"
              placeholder={"Your Country"}
              type="text"
            />
            <input
              onChange={handleChange("favouriteBrand")}
              onBlur={handleBlur("favouriteBrand")}
              value={values.favouriteBrand}
              className="w-full h-[55px] bg-transparent text-white border-b-[0.5px] border-b-[#D5D5D5] outline-none focus:outline-none focus:border-b-[0.5px] focus:border-b-[#D5D5D5]"
              placeholder={"Your Favorite Brand (Optional)"}
              type="text"
            />

            <Link
              href={""}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={`w-fit h-[60px] bg-white mt-[6vh] ${
                hovered ? "pl-[22px] pr-[18px]" : "px-[22px]"
              } text-black text-[20px] font-semibold flex items-center justify-between gap-[10px]`}
            >
              Contact Us
              <FaArrowRight
                className={`w-[28px] h-[28px] text-black ${
                  hovered ? "ml-[4px]" : ""
                }`}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
