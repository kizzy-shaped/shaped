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




function Header({ className = '' }: { className?: string }) {
    const { dropdownVisible, setDropdownVisible } = useHeaderContext()
    const [hovered, setHovered] = useState(false);
    const [dropdownState, setDropdownState] = useState<{ hovered: boolean, index: null | number }>({
        hovered: false,
        index: null
    })

    return (
        <header className={`w-full  ${className}`}>
            <Container className="wmax_390:!w-[90%] flex items-center justify-between">
                <img className="w-auto wmax_xl:h-[28px] wmin_xl:h-[48px]" src='/images/shared/header_logo.png' alt="Shaped logo" />

                <div className="h-full flex gap-[15px] items-center wmin_xl:gap-[20px] wmin_3xl:gap-[40px] wmax_xl:hidden">
                    <div className="h-full flex items-center gap-[15px] wmin_xl:gap-[20px] wmin_3xl:gap-[40px]">
                        {[
                            { label: 'HOME', link: '/' },
                            { label: 'ABOUT US', link: '/about_us' },
                            { label: 'FASHION', link: '/fashion' },
                            {
                                label: 'SERVICES', link: '/services',
                                dropdown: [
                                    {}
                                ]
                            },
                        ].map(({ label, link, dropdown }, id) => (
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
                                {!dropdown ? (<Link href={link} className={`text-[#000000] font-semibold text-[22px]`}>{label}</Link>) : (<div
                                    className={`h-full flex items-center text-[#000000] font-semibold text-[22px]`}>{label}</div>)}

                                {dropdown && <FaChevronDown className="w-[16px] h-[16px] text-black" />}

                                {/* Dropdown */}
                                {/* {(dropdownState.hovered && dropdownState.index === id) && ( */}
                                {(dropdownVisible && dropdownState.index === id) && (
                                    <div className="w-[100%] bg-black p-[2em] fixed top-[132px] left-[0vw]">
                                        <div className="w-fit grid grid-cols-3 gap-x-[2em]">
                                            {[
                                                { name: 'name', link: 'link' },
                                                { name: 'name', link: 'link' },
                                                { name: 'name', link: 'link' },
                                                { name: 'name', link: 'link' },
                                                { name: 'name', link: 'link' },
                                                { name: 'name', link: 'link' },
                                                { name: 'name', link: 'link' },
                                            ].map(({ link, name }, index) => (
                                                <Link className={`col-span-1 w-fit text-[20px] text-white font-semibold capitalize pt-[0.5em] pb-[1em] border-b-[1px] border-b-transparent hover:border-b-white`} href={link} key={index}>{name}</Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {/* Dropdown */}
                            </div>
                        ))}
                    </div>
                    <Link href={''}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className={`w-fit h-[60px] bg-[#000000] ${hovered ? 'pl-[22px] pr-[18px]' : 'px-[22px]'} text-white text-[20px] font-semibold flex items-center justify-between gap-[10px] rounded-[24px]`}>
                        Contact Us
                        <FiArrowRight className={`w-[28px] h-[28px] text-white ${hovered ? 'ml-[4px]' : ''}`} />
                    </Link>
                </div>

                {/* Moile Navigation */}
                <div className="wmin_xl:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <button className="w-[60px] h-[52px]">
                                <svg className="w-full h-full" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect className="w-full h-full" fill="#F0F0F0" />
                                    <line x1="17.5" y1="17.5" x2="42.5" y2="17.5" stroke="black" stroke-width="3" stroke-linecap="round" />
                                    <line x1="17.5" y1="31.5" x2="42.5" y2="31.5" stroke="black" stroke-width="3" stroke-linecap="round" />
                                </svg>

                            </button>
                        </SheetTrigger>
                        <SheetContent side={'top'}>
                            <SheetHeader>
                                <SheetTitle>Are you absolutely sure?</SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>
                {/* Moile Navigation */}
            </Container>
        </header>
    )
}

export default Header;