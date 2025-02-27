"use client";

import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import Container from "./container";
import { LegacyRef, useEffect, useRef, useState } from "react";
import { raleway } from "@/app/layout";
import { useHeaderContext } from "@/context/header";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation } from "@/constants/header";
import { RxHamburgerMenu } from "react-icons/rx";

function Header({ className = "" }: { className?: string }) {
  const { dropdownVisible, setDropdownVisible } = useHeaderContext();
  const [hovered, setHovered] = useState(false);
  const [dropdownState, setDropdownState] = useState<{
    hovered: boolean;
    index: null | number;
  }>({
    hovered: false,
    index: null,
  });
  const [mobiledropdownVisible, setMobiledropdownVisible] = useState(false);
  const [drawerVisible, setdDrawerVisible] = useState(false);

  const closeBtnContainer = useRef<HTMLDivElement>();
  const closeBtn = closeBtnContainer.current?.querySelector(
    "button.data-[state=open]:bg-secondary"
  );

  if (closeBtn) console.log({ closeBtn });

  return (
    <header className={`w-full bg-black ${className}`}>
      <Container className="wmax_390:!w-[90%] flex items-center justify-between">
        <Link href={"/"}>
          <img
            className="w-auto wmax_xl:h-[20px] wmin_xl:h-[35px]"
            src="/images/shared/header_logo_dark.png"
            alt="Shaped logo"
          />
        </Link>
        {/* Desktop Navigation */}
        <div className="h-full flex gap-[15px] items-center wmin_xl:gap-[20px] wmin_3xl:gap-[40px] wmax_xl:hidden">
          <div className="h-full flex items-center gap-[15px] wmin_xl:gap-[20px] wmin_3xl:gap-[40px]">
            {navigation.map(({ label, link, dropdown }, id) => (
              <div
                onMouseEnter={() => {
                  if (dropdown) {
                    setDropdownVisible(true);
                    setDropdownState((prev) => ({ ...prev, index: id }));
                  }
                }}
                onMouseLeave={() => {
                  if (dropdown) {
                    setDropdownVisible(false);
                    setDropdownState((prev) => ({ ...prev, index: null }));
                  }
                }}
                className={`${
                  dropdown ? "h-full" : "h-fit"
                } flex items-center gap-[7px] cursor-pointer ${
                  raleway.className
                } relative`}
                key={id}
              >
                {!dropdown ? (
                  <Link
                    href={link}
                    className={`text-white font-bold text-[18px]`}
                  >
                    {label}
                  </Link>
                ) : dropdown && label.toLowerCase() == "fashion" ? (
                  <Link
                    href={"/fashion"}
                    className={`h-full flex items-center text-white font-bold text-[18px]`}
                  >
                    {label}
                  </Link>
                ) : (
                  <div
                    className={`h-full flex items-center text-white font-bold text-[18px]`}
                  >
                    {label}
                  </div>
                )}

                {dropdown && (
                  <FaChevronDown className="w-[16px] h-[16px] text-white" />
                )}

                {/* Dropdown */}
                {/* {(dropdownState.hovered && dropdownState.index === id) && ( */}
                {dropdownVisible && dropdownState.index === id && (
                  <div className="w-[100%] bg-black p-[2em] fixed top-[80px] left-[0vw]">
                    <div
                      className={`w-full ${
                        label.toLowerCase() == "fashion"
                          ? "flex flex-row gap-[1em]"
                          : "grid grid-cols-4 wmin_3xl:gap-x-[2em] wmin_xl:wmax_3xl:gap-x-[1.5em]"
                      } justify-between`}
                    >
                      {dropdown?.map(({ link, title }, index) => (
                        <Link
                          className={`col-span-1 w-fit font-bold text-[18px] text-white  capitalize pt-[0.5em] pb-[1em] border-b-[1px] border-b-transparent hover:border-b-white`}
                          href={`/services?serviceId=${link}`}
                          key={index}
                        >
                          {title}
                        </Link>
                      ))}

                      {dropdown && label.toLowerCase() == "fashion" && (
                        <Link
                          className={`col-span-1 w-fit font-bold text-[18px] text-white  capitalize pt-[0.5em] pb-[1em] border-b-[1px] border-b-transparent hover:border-b-white`}
                          href={`/fashion#about_us`}
                        >
                          {"about us"}
                        </Link>
                      )}
                    </div>
                  </div>
                )}
                {/* Dropdown */}
              </div>
            ))}
          </div>
          <Link
            href={"#contact_us"}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`w-fit h-[50px] bg-white ${
              hovered ? "pl-[22px] pr-[18px]" : "px-[22px]"
            } text-black text-[18px] font-bold flex items-center justify-between gap-[10px] rounded-[24px]`}
          >
            Contact Us
            <FiArrowRight
              className={`w-[28px] h-[28px] text-black ${
                hovered ? "ml-[4px]" : ""
              }`}
            />
          </Link>
        </div>
        {/* Desktop Navigation */}

        {/* Mobile Navigation */}
        <div className="wmin_xl:hidden">
          <Sheet
            onOpenChange={(data) => {
              if (data == false) setdDrawerVisible(false);
            }}
            open={drawerVisible}
          >
            <SheetTrigger
              onClick={(event) => {
                setdDrawerVisible(true);
                setDropdownState((prev) => ({ ...prev, index: null }));
              }}
              className="flex "
            >
              {/* <button className="w-[50px] h-[48px]"> */}
              <button className="w-[35px] h-[35px]">
                <RxHamburgerMenu className="text-white w-full h-full" />
                {/* <svg
                  className="w-full h-full"
                  viewBox="0 0 60 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect className="w-full h-full" fill="#F0F0F0" />
                  <line
                    x1="17.5"
                    y1="17.5"
                    x2="42.5"
                    y2="17.5"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="17.5"
                    y1="31.5"
                    x2="42.5"
                    y2="31.5"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg> */}
              </button>
            </SheetTrigger>
            <SheetContent className="bg-black text-white" side={"top"}>
              <div className="h-fit flex flex-col wmin_lg:gap-[15px] wmax_lg:gap-[20px] wmin_xl:gap-[20px] wmin_3xl:gap-[40px] wmax_md:relative">
                <div className="h-full flex flex-col wmin_lg:gap-[15px] wmax_lg:gap-[20px] wmin_xl:gap-[20px] wmin_3xl:gap-[40px]">
                  {navigation.map(({ label, link, dropdown }, id) => (
                    <div
                      // onMouseEnter={() => {
                      //   if (dropdown) {
                      //     // dropdown && setdDrawerVisible(true)
                      //     setDropdownVisible(true);
                      //     setDropdownState((prev) => ({ ...prev, index: id }));
                      //   }
                      // }}
                      // onMouseLeave={() => {
                      //   if (dropdown) {
                      //     // dropdown && setdDrawerVisible(false)
                      //     setDropdownVisible(false);
                      //     setDropdownState((prev) => ({
                      //       ...prev,
                      //       index: null,
                      //     }));
                      //   }
                      // }}
                      // onClick={() => {
                      //   !dropdown && setdDrawerVisible(false);
                      //   dropdown && setDropdownVisible(!dropdownVisible);
                      // }}
                      className={`${
                        dropdown ? "wmin_lg:h-full wmax_lg:h-fit" : "h-fit"
                      } flex items-center gap-[7px] cursor-pointer ${
                        raleway.className
                      } relative`}
                      key={id}
                    >
                      {!dropdown ? (
                        <Link
                          onClick={() => setdDrawerVisible(false)}
                          href={link}
                          className={`text-white font-semibold wmin_lg:text-[22px] wmax_lg:text-[18px]`}
                        >
                          {label}
                        </Link>
                      ) : dropdown && label.toLowerCase() == "fashion" ? (
                        <Link
                          href="/fashion"
                          className={`wmax_md:w-full h-full flex items-center wmax_md:justify-between text-white font-semibold wmin_lg:text-[22px] wmax_lg:text-[18px] wmax_lg:relative}`}
                        >
                          {label}
                        </Link>
                      ) : (
                        <div
                          className={`wmax_md:w-full h-full flex items-center wmax_md:justify-between text-white font-semibold wmin_lg:text-[22px] wmax_lg:text-[18px] ${
                            dropdown ? "wmax_lg:relative" : ""
                          }`}
                        >
                          {label}
                        </div>
                      )}

                      {dropdown && (
                        <FaChevronDown
                          onClick={() => {
                            // !dropdown && setdDrawerVisible(false);
                            // dropdown && setDropdownVisible(!dropdownVisible);
                            // setDropdownVisible(!dropdownVisible);
                            setDropdownVisible(true);
                            setDropdownState((prev) => ({
                              ...prev,
                              index: id === dropdownState.index ? null : id,
                            }));
                          }}
                          className="w-[16px] h-[16px] text-white"
                        />
                      )}

                      {/* Dropdown */}
                      {/* {(dropdownState.hovered && dropdownState.index === id) && ( */}
                      {/* {(dropdownVisible && dropdownState.index === id) && (
                                                // <div className="w-[100%] bg-black p-[2em] fixed wmin_lg:top-[100%] wmax_lg:top-[100px] left-[0vw]">
                                                <div className="w-[100%] h-[75vh] pb-[1.5em] overflow-y-scroll bg-black p-[1em] fixed wmin_lg:top-[100%] wmax_lg:top-[185px] left-[0vw]">
                                                    <div className="w-fit grid wmin_md:grid-cols-3 wmax_md:grid-cols-1 gap-x-[2em] wmax_lg:overflow-hidden">
                                                        {dropdown?.map(({ link, title }, index) => (
                                                            <Link onClick={() => setdDrawerVisible(false)} className={`col-span-1 w-fit wmin_lg:text-[20px] wmax_lg:text-[16px] text-white font-semibold capitalize pt-[0.5em] pb-[1em] border-b-[1px] border-b-transparent hover:border-b-white`} href={`/services?serviceId=${link}`} key={index}>{title}</Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )} */}
                      {dropdownVisible && dropdownState.index === id && (
                        // <div className="w-[100%] bg-black p-[2em] fixed wmin_lg:top-[100%] wmax_lg:top-[100px] left-[0vw]">
                        <div
                          className={`w-[100%] h-[75vh] pb-[1.5em] overflow-y-scroll bg-black p-[1em] pt-0 fixed ${
                            label.toLowerCase() == "fashion"
                              ? "wmin_lg:top-[0%]"
                              : "wmin_lg:top-[100%]"
                          } wmax_lg:top-[185px] left-[0vw] wmax_lg:z-10`}
                          style={{
                            top:
                              label.toLowerCase() == "fashion"
                                ? "150px"
                                : "200px",
                          }}
                        >
                          <div className="w-fit grid wmin_md:grid-cols-3 wmax_md:grid-cols-1 gap-x-[2em] wmax_lg:overflow-hidden">
                            {dropdown?.map(({ link, title }, index) => (
                              <Link
                                onClick={() => setdDrawerVisible(false)}
                                className={`col-span-1 w-fit wmin_lg:text-[20px] wmax_lg:text-[16px] text-white font-semibold capitalize pt-[0.5em] pb-[1em] border-b-[1px] border-b-transparent hover:border-b-white`}
                                href={`/services?serviceId=${link}`}
                                key={index}
                              >
                                {title}
                              </Link>
                            ))}

                            {dropdown && label.toLowerCase() == "fashion" && (
                              <Link
                                onClick={() => setdDrawerVisible(false)}
                                className={`col-span-1 w-fit wmin_lg:text-[20px] wmax_lg:text-[16px] text-white font-semibold capitalize pt-[0.5em] pb-[1em] border-b-[1px] border-b-transparent hover:border-b-white`}
                                href={`/fashion#about_us`}
                              >
                                about us
                              </Link>
                            )}
                          </div>
                        </div>
                      )}
                      {/* Dropdown */}
                    </div>
                  ))}
                </div>
                <Link
                  href={"#contact_us"}
                  onClick={() => setdDrawerVisible(false)}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className={`w-full wmin_md:h-[60px] wmax_md:h-[40px] bg-white ${
                    hovered ? "pl-[22px] pr-[18px]" : "px-[22px]"
                  } text-black wmax_xl:text-[16px] wmin_xl:text-[22px] font-bold flex items-center wmin_lg:justify-between gap-[10px] rounded-[24px]`}
                >
                  Contact Us
                  <FiArrowRight
                    className={`wmin_xl:w-[28px] wmin_xl:h-[28px] wmax_xl:w-[22px] wmax_xl:h-[22px] text-black ${
                      hovered ? "ml-[4px]" : ""
                    }`}
                  />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        {/* Mobile Navigation */}
      </Container>
    </header>
  );
}

export default Header;
