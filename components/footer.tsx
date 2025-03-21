"use client";

import Link from "next/link";
import Container from "./container";
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { useModal } from "@/context/modal";
import { EmailSubscribedModal } from "./shared";
import { toast } from "react-toastify";
import { ObjectSchema, string } from "yup";
import { useFormik } from "formik";

function Footer() {
  const { showModal, hideModal } = useModal();

  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: new ObjectSchema({
      email: string().required("Email is required"),
    }),
    onSubmit: async ({ email }) => {
      try {
        const response = await fetch("/api/newsLetter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          hideModal();
          showModal(<EmailSubscribedModal />);
        } else {
          toast.error("Not subscribed yet!");
        }
      } catch (error: any) {
        toast.error(error?.message);
      }
    },
  });

  return (
    <footer className="w-full h-fit bg-black">
      <Container className="wmin_md:py-[8vh] wmax_md:py-[4vh]">
        <div className="w-full h-fit grid wmin_md:grid-cols-[1fr_1fr_1fr_3fr] wmax_md:grid-cols-2 wmax_md:grid-rows-3 wmin_md:gap-[56px] wmax_md:gap-y-[1.5em]">
          {/* Company */}
          <div className="wmin_lg:col-span-1 wmax_lg:col-start-1 wmax_lg:col-end-2 flex flex-col gap-[24px]">
            <TitleTile text="company" />

            <div className="flex flex-col gap-[24px]">
              {[
                { label: "About Us", link: "/about_us" },
                { label: "Become a Member", link: "#contact_us" },
              ].map(({ label, link }, index) => (
                <LinkSubtitleTile text={label} link={link} key={index} />
              ))}
            </div>
          </div>
          {/* Company */}

          {/* Services */}
          <div className="wmin_lg:col-span-1 wmax_lg:col-start-2 wmax_lg:col-end-3 flex flex-col gap-[24px]">
            <TitleTile text="services" />

            <div className="flex flex-col gap-[24px]">
              {[
                { label: "Fashion", link: "/fashion" },
                { label: "Portfolio", link: "/portfolio" },
                { label: "Education", link: "/services?serviceId=education" },
                // { label: 'Bespoke Garment Creation', link: 'bespoke_garment_creation' },
                // { label: 'And so on', link: 'fashion_services' },
              ].map(({ label, link }, index) => (
                <LinkSubtitleTile link={link} text={label} key={index} />
              ))}
            </div>
          </div>
          {/* Services */}

          {/* Contact us */}
          <div className="wmin_lg:col-span-1 wmax_lg:col-start-1 wmax_lg:col-end-3 flex flex-col gap-[24px]">
            <TitleTile text="contact us" />

            <div className="flex flex-col gap-[24px]">
              {[
                {
                  label: "info@shapedservices.com",
                  link: "mailto:info@shapedservices.com",
                },
                {
                  label: `128 City Road,London, EC1V 2NX, UK`,
                  link: "#contact_us",
                },
              ].map(({ label, link }, index) => (
                <LinkSubtitleTile link={`${link}`} text={label} key={index} />
              ))}

              <div className="flex gap-[7px]">
                <Link
                  href={"https://www.instagram.com/shapedservices/"}
                  target="_blank"
                >
                  <FaInstagram className="w-[26px] h-[26px]" color="#AFAFAF" />
                </Link>

                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=61559023511089&mibextid=wwXIfr"
                  }
                  target="_blank"
                >
                  <FiFacebook className="w-[26px] h-[26px]" color="#AFAFAF" />
                </Link>
              </div>
            </div>
          </div>
          {/* Contact us */}

          {/* Subscribe to newsletter */}
          <div className="wmin_lg:col-span-1 wmax_lg:col-start-1 wmax_lg:col-end-3 flex flex-col gap-[24px]">
            <div className="w-full flex justify-center">
              <TitleTile text="subscribe to newsletter" />
            </div>

            <SubtitleTile
              text={"Sign up with your email to receive our news and updates"}
            />

            <div className="w-full wmin_md:h-[60px] wmax_md:h-[40px] bg-transparent grid grid-cols-[6.3fr_0.5fr_3.7fr] grid-rows-1">
              <input
                value={values.email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                className={`col-start-1 col-end-3 row-start-1 row-end-2 h-full bg-[#1a1a1a] px-[16px] border-[1px] border-transparent outline-none focus:border-none focus:outline-none focus:text-white  ${errors?.email ? "border-b-red-600 placeholder:text-red-500" : "border-b-[#D5D5D5] placeholder:text-white"}`}
                type="text"
                placeholder="Email Address"
              />

              <button
                onClick={() => handleSubmit()}
                className="col-start-2 -col-end-1 row-start-1 row-end-2 h-full bg-white text-black text-center rounded-[20px] font-semibold"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
          {/* Subscribe to newsletter */}
        </div>

        <div className="w-full h-fit flex wmin_lg:justify-between wmax_lg:justify-center wmax_lg:gap-[20px] mt-[4vh] border-t-[1.5px] border-t-[#D3D3D3] pt-[16px]">
          <div className="flex gap-[56px]">
{/*             <LinkSubtitleTile
              link="/terms_conditions"
              text="Terms & Conditions"
            /> */}
            <LinkSubtitleTile link="/privacy_policy" text="Privacy Policy" />
          </div>
          &copy;{" "}
          <SubtitleTile
            className="wmax_lg:hidden"
            text="Shaped 2025 All Right Reserved"
          />
        </div>

        <div className="wmin_lg:hidden flex items-center justify-center gap-[3px]">
          &copy; <SubtitleTile text="Shaped 2025 All Right Reserved" />
        </div>

        <div className="w-full h-fit mt-[4vh] relative wmax_lg:hidden">
          <img
            className="w-full h-auto"
            src="/images/shared/dark_footer_logo.png"
            alt="Footer Logo"
          />
          {/* <img className="w-full h-auto" src="/images/shared/footer_logo.png" alt="Footer Logo" /> */}
          {/* <img className="w-full h-[127px] max-h-[100px] absolute bottom-0 left-0 z-[3]" src="/images/shared/footer_clip_path.png" alt="Footer Logo" /> */}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

function TitleTile({ text }: { text: string }) {
  return (
    <div className="wmin_lg:text-[22px] wmax_lg:text-[16px] font-medium text-white uppercase">
      {text}
    </div>
  );
}

function SubtitleTile({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`wmin_lg:text-[17px] wmax_lg:text-[12px] font-normal text-[#AFAFAF] ${className}`}
    >
      {text}
    </div>
  );
}

function LinkSubtitleTile({ text, link }: { text: string; link: string }) {
  return (
    <Link
      href={link}
      className="wmin_lg:text-[17px] wmax_lg:text-[12px] font-normal text-[#AFAFAF]"
    >
      {text}
    </Link>
  );
}
