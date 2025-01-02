"use client";

import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import Container from "./container";
import { useState } from "react";
import { raleway } from "@/app/layout";
import { useHeaderContext } from "@/context/header";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { navigation } from "@/constants/header";


function Header({ className = '' }: { className?: string }) {
    const { dropdownVisible, setDropdownVisible } = useHeaderContext()
    const [hovered, setHovered] = useState(false);
    const [dropdownState, setDropdownState] = useState<{ hovered: boolean, index: null | number }>({
        hovered: false,
        index: null
    })
    const [mobiledropdownVisible, setMobiledropdownVisible] = useState(false);

    return (
        <header className={`w-full  ${className}`}>
            <Container className="wmax_390:!w-[90%] flex items-center justify-between">
                <Link href={'/'}>
                    <img className="w-auto wmax_xl:h-[20px] wmin_xl:h-[35px]" src='/images/shared/header_logo.png' alt="Shaped logo" />
                </Link>
                {/* Desktop Navigation */}
                <div className="h-full flex gap-[15px] items-center wmin_xl:gap-[20px] wmin_3xl:gap-[40px] wmax_xl:hidden">
                    <div className="h-full flex items-center gap-[15px] wmin_xl:gap-[20px] wmin_3xl:gap-[40px]">
                        {navigation.map(({ label, link, dropdown }, id) => (
                            <div
                                onMouseEnter={() => {
                                    if (dropdown) {
                                        setDropdownVisible(true);
                                        setDropdownState(prev => ({ ...prev, index: id }))
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (dropdown) {
                                        setDropdownVisible(false);
                                        setDropdownState(prev => ({ ...prev, index: null }))
                                    }
                                }}
                                className={`${dropdown ? 'h-full' : 'h-fit'} flex items-center gap-[7px] cursor-pointer ${raleway.className} relative`} key={id}>
                                {!dropdown ? (<Link href={link} className={`text-[#000000] font-black text-[18px]`}>{label}</Link>) : (<div
                                    className={`h-full flex items-center text-[#000000] font-black text-[18px]`}>{label}</div>)}

                                {dropdown && <FaChevronDown className="w-[16px] h-[16px] text-black" />}

                                {/* Dropdown */}
                                {/* {(dropdownState.hovered && dropdownState.index === id) && ( */}
                                {(dropdownVisible && dropdownState.index === id) && (
                                    <div className="w-[100%] bg-black p-[2em] fixed top-[80px] left-[0vw]">
                                        <div className="w-fit grid grid-cols-3 gap-x-[2em]">
                                            {dropdown?.map(({ link, title }, index) => (
                                                <Link className={`col-span-1 w-fit font-black text-[18px] text-white  capitalize pt-[0.5em] pb-[1em] border-b-[1px] border-b-transparent hover:border-b-white`} href={`/services?serviceId=${link}`} key={index}>{title}</Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {/* Dropdown */}
                            </div>
                        ))}
                    </div>
                    <Link href={'#contact_us'}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className={`w-fit h-[50px] bg-[#000000] ${hovered ? 'pl-[22px] pr-[18px]' : 'px-[22px]'} text-white text-[18px] font-black flex items-center justify-between gap-[10px] rounded-[24px]`}>
                        Contact Us
                        <FiArrowRight className={`w-[28px] h-[28px] text-white ${hovered ? 'ml-[4px]' : ''}`} />
                    </Link>
                </div>
                {/* Desktop Navigation */}

                {/* Mobile Navigation */}
                <div className="wmin_xl:hidden">
                   {mobiledropdownVisible && <Sheet>
                        <SheetTrigger>
                            <button className="w-[50px] h-[48px]">
                                <svg className="w-full h-full" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect className="w-full h-full" fill="#F0F0F0" />
                                    <line x1="17.5" y1="17.5" x2="42.5" y2="17.5" stroke="black" stroke-width="3" stroke-linecap="round" />
                                    <line x1="17.5" y1="31.5" x2="42.5" y2="31.5" stroke="black" stroke-width="3" stroke-linecap="round" />
                                </svg>

                            </button>
                        </SheetTrigger>
                        <SheetContent side={'top'}>
                            <div className="h-fit flex flex-col wmin_lg:gap-[15px] wmax_lg:gap-[20px] wmin_xl:gap-[20px] wmin_3xl:gap-[40px] wmax_md:relative">
                                <div className="h-full flex flex-col wmin_lg:gap-[15px] wmax_lg:gap-[20px] wmin_xl:gap-[20px] wmin_3xl:gap-[40px]">
                                    {navigation.map(({ label, link, dropdown }, id) => (
                                        <div
                                            onMouseEnter={() => {
                                                if (dropdown) {
                                                    setDropdownVisible(true);
                                                    setDropdownState(prev => ({ ...prev, index: id }))
                                                }
                                            }}
                                            onMouseLeave={() => {
                                                if (dropdown) {
                                                    setDropdownVisible(false);
                                                    setDropdownState(prev => ({ ...prev, index: null }))
                                                }
                                            }}
                                            onClick={() => setMobiledropdownVisible(false)}
                                            className={`${dropdown ? 'wmin_lg:h-full wmax_lg:h-fit' : 'h-fit'} flex items-center gap-[7px] cursor-pointer ${raleway.className} relative`} key={id}>
                                            {!dropdown ? (<Link href={link} className={`text-[#000000] font-semibold wmin_lg:text-[22px] wmax_lg:text-[18px]`}>{label}</Link>) : (<div
                                                className={`wmax_md:w-full h-full flex items-center wmax_md:justify-between text-[#000000] font-semibold wmin_lg:text-[22px] wmax_lg:text-[18px] ${dropdown ? 'wmax_lg:relativ' : ''}`}>{label}</div>)}

                                            {dropdown && <FaChevronDown className="w-[16px] h-[16px] text-black" />}

                                            {/* Dropdown */}
                                            {/* {(dropdownState.hovered && dropdownState.index === id) && ( */}
                                            {(dropdownVisible && dropdownState.index === id) && (
                                                <div className="w-[100%] bg-black p-[2em] fixed wmin_lg:top-[100%] wmax_lg:top-[100px] left-[0vw]">
                                                    <div className="w-fit grid wmin_md:grid-cols-3 wmax_md:grid-cols-1 gap-x-[2em] wmax_lg:overflow-hidden">
                                                        {dropdown?.map(({ link, title }, index) => (
                                                            <Link onClick={() => setMobiledropdownVisible(false)} className={`col-span-1 w-fit wmin_lg:text-[20px] wmax_lg:text-[16px] text-white font-semibold capitalize pt-[0.5em] pb-[1em] border-b-[1px] border-b-transparent hover:border-b-white`} href={`/services?serviceId=${link}`} key={index}>{title}</Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            {/* Dropdown */}
                                        </div>
                                    ))}
                                </div>
                                <Link href={'#contact_us'}
                                    onMouseEnter={() => setHovered(true)}
                                    onMouseLeave={() => setHovered(false)}
                                    className={`w-full wmin_md:h-[60px] wmax_md:h-[40px] bg-[#000000] ${hovered ? 'pl-[22px] pr-[18px]' : 'px-[22px]'} text-white wmax_xl:text-[16px] wmin_xl:text-[22px] font-semibold flex items-center wmin_lg:justify-between gap-[10px] rounded-[24px]`}>
                                    Contact Us
                                    <FiArrowRight className={`wmin_xl:w-[28px] wmin_xl:h-[28px] wmax_xl:w-[22px] wmax_xl:h-[22px] text-white ${hovered ? 'ml-[4px]' : ''}`} />
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>}

                </div>
                {/* Mobile Navigation */}
            </Container>
        </header>
    )
}

export default Header;