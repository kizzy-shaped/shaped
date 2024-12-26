"use client";

import Link from "next/link";
import {FaChevronDown } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import Container from "./container";
import { useState } from "react";
import { raleway } from "@/app/layout";



function Header({ className = '' }: { className?: string }) {
    const [hovered, setHovered] = useState(false);
    const [dropdownState, setDropdownState] = useState<{hovered: boolean, index: null| number}>({
        hovered: false,
        index: null
    })

    return (
        <header className={`w-full  ${className}`}>
            <Container className="flex items-center justify-between">
                <img className="w-auto h-[48px]" src='/images/shared/header_logo.png' alt="Shaped logo" />

                <div className="flex gap-[15px] wmin_xl:gap-[20px] wmin_3xl:gap-[40px]">
                    <div className="flex items-center gap-[15px] wmin_xl:gap-[20px] wmin_3xl:gap-[40px]">
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
                            <span 
                            onClick={() => setDropdownState({hovered: !dropdownState.hovered, index: dropdownState.index === id?null:id})}
                            className={`flex items-center gap-[7px] cursor-pointer ${raleway.className} relative`} key={id}>
                                {!dropdown ? (<Link href={link} className={`text-[#000000] font-semibold text-[22px]`}>{label}</Link>) : (<span className={`text-[#000000] font-semibold text-[22px]`}>{label}</span>)}

                                {dropdown && <FaChevronDown className="w-[16px] h-[16px] text-black" />}

                                {/* Dropdown */}
                                {(dropdownState.hovered && dropdownState.index === id) && (
                                    <div className="w-[100%] bg-black p-[2em] fixed top-[132px] left-[0vw]">
                                        <div className="w-fit grid grid-cols-3 gap-x-[2em]">
                                            {[
                                                {name: 'name', link:'link'},
                                                {name: 'name', link:'link'},
                                                {name: 'name', link:'link'},
                                                {name: 'name', link:'link'},
                                                {name: 'name', link:'link'},
                                                {name: 'name', link:'link'},
                                                {name: 'name', link:'link'},
                                            ].map(({link, name}, index) => (
                                                <Link className={`col-span-1 w-fit text-[20px] text-white font-semibold capitalize pt-[0.5em] pb-[1em] border-b-[1px] border-b-transparent hover:border-b-white`} href={link} key={index}>{name}</Link>
                                            ))}
                                        </div>
                                    </div>
                                    )}
                                {/* Dropdown */}
                            </span>
                        ))}
                    </div>
                    <Link href={''}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className={`w-fit h-[60px] bg-[#000000] ${hovered ? 'pl-[22px] pr-[18px]' : 'px-[22px]'} text-white text-[20px] font-semibold flex items-center justify-between gap-[10px] rounded-[24px]`}>
                        BECOME A CLIENT
                        <FiArrowRight className={`w-[28px] h-[28px] text-white ${hovered ? 'ml-[4px]' : ''}`} />
                    </Link>
                </div>
            </Container>
        </header>
    )
}

export default Header;