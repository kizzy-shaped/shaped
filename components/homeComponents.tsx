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
            } text-white text-[20px] font-semibold flex items-center justify-between gap-[10px]`}
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
            className="w-[599px] h-[530px] ml-auto animate-fadeIn ease-in-out transition-all"
            style={{
              // opacity: index === currentIndex ? 1 : 0,
              display: index === currentIndex ? "inline-block" : "none",
              transition: "all 1.5s ease-in-out",
            }}
            key={index}
          >
            <img
              className={`w-full h-full object-cover animate-fadeIn ease-in-out transition-all`}
              style={{
                display: index === currentIndex ? "inline-block" : "none",
                transition: "all 1.5s ease-in-out",
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

        <div className="w-[80%] h-[444px] grid grid-cols-3">
          {items.map(({ img, desc, title }, index) => (
            <div
              className="col-span-1 h-full relative overflow-hidden"
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
                className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#00000000] to-[#000000] text-white flex flex-col gap-[20px]  transition-transform duration-500 p-[2em] ${
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
            className="col-span-1 h-[684px] relative overflow-hidden"
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
    <div className="w-full h-fit bg-black pl-[7.5%]">
      <div className="w-[calc(100% - 7.5%)] h-fit py-[7vh] flex flex-col gap-[3vh]">
        <div className="text-[40px] text-white font-semibold text-center">
          CLIENTS' FEEDBACK
        </div>

        <div className="w-full h-fit">
          <Marquee
            loop={0}
            speed={50}
            className="w-full h-fit flex"
            style={{ height: "fit-content" }}
            pauseOnHover={true}
          >
            {items.map(({ img, comments, name, rating }, index) => (
              <div
                className="w-[689px] h-[374px] grid grid-cols-[3.5fr_6.5fr] border-[1px] border-[#ADADAD] mr-[28px]"
                key={index}
              >
                <div className="col-span-1 h-full">
                  <img className="w-[100%] h-[100%]" src={img} alt="" />
                </div>

                <div className="col-span-1 h-full bg-white flex flex-col justify-center gap-[12px] p-[2em]">
                  <div className="flex flex-col gap-[0px]">
                    {comments.map((comment, index) => (
                      <div
                        className="text-black text-[14px] font-semibold"
                        key={index}
                      >
                        {comment}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-[4px]">
                    {Array.from({ length: rating }).map((_, index) => (
                      <FaStar className="text-black" key={index} />
                    ))}
                  </div>

                  <div className="text-black text-[20px] font-semibold uppercase">
                    {name}
                  </div>
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
    <div className="w-full h-fit bg-black pl-[7.5%]">
      <div className="w-[calc(100% - 7.5%)] h-fit py-[7vh] flex flex-col gap-[3vh]">
        <div className="w-[calc(92.5%)] h-fit flex flex-col gap-[12px] mt-[8vh] mr-auto">
          <div className="flex flex-col gap-[12px]">
            <div className="text-[40px] font-semibold text-white uppercase">
              Ready to elevate your style?
            </div>
            <div className="text-[28px] font-medium text-white">
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
