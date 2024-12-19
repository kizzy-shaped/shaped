"use client";

import Link from "next/link";
import { FaArrowRight, FaChevronDown } from "react-icons/fa6";
import Container from "./container";
import { useState } from "react";



function Header({ className = '' }: { className?: string }) {
    const [hovered, setHovered] = useState(false);
    const [dropdownState, setDropdownState] = useState({
        hovered: false,

    })

    return (
        <header className={`w-full  ${className}`}>
            <Container className="flex items-center justify-between">
                <img className="w-auto h-[48px]" src='/images/shared/header_logo.png' alt="Shaped logo" />

                <div className="flex gap-[40px]">
                    <div className="flex items-center gap-[40px]">
                        {[
                            { label: 'HOME', link: '/' },
                            { label: 'ABOUT US', link: '/about_us' },
                            {
                                label: 'SERVICES', link: '/services',
                                dropdown: [
                                    {}
                                ]
                            },
                        ].map(({ label, link, dropdown }, index) => (
                            <span className="flex items-center gap-[7px] relative" key={index}>
                                {!dropdown ? (<Link href={link} className={`text-[#000000] font-semibold text-[22px] font-[family-name:var(--raleway)]`}>{label}</Link>) : (<span className={`text-[#000000] font-semibold text-[22px] font-[family-name:var(--raleway)]`}>{label}</span>)}

                                {dropdown && <FaChevronDown className="w-[16px] h-[16px] text-black" />}

                                {/* Dropdown */}
                                {dropdownState.hovered && <div className=""></div>}
                                {/* Dropdown */}
                            </span>
                        ))}
                    </div>
                    <Link href={''}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className={`w-fit h-[60px] bg-[#000000] ${hovered ? 'pl-[22px] pr-[18px]' : 'px-[22px]'} text-white text-[20px] font-semibold flex items-center justify-between gap-[10px]`}>
                        BECOME A CLIENT
                        <FaArrowRight className={`w-[28px] h-[28px] text-white ${hovered ? 'ml-[4px]' : ''}`} />
                    </Link>
                </div>
            </Container>
        </header>
    )
}

export default Header;