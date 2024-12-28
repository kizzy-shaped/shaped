'use client';

import Link from "next/link";
import Container from "./container";
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { useModal } from "@/context/modal";
import { EmailSubscribedModal } from "./shared";


function Footer() {
    const { showModal, hideModal } = useModal();

    const submit = () => {
        hideModal();
        showModal(<EmailSubscribedModal />)
    }


    return (
        <footer className="w-full h-fit bg-black">
            <Container className="py-[8vh]">
                <div className="w-full h-fit grid grid-cols-[1fr_1fr_1fr_3fr] gap-[56px]">
                    {/* Company */}
                    <div className="col-span-1 flex flex-col gap-[24px]">
                        <TitleTile text="compnay" />

                        <div className="flex flex-col gap-[24px]">
                            {[
                                { label: 'About Us', link: '/about_us' }, { label: 'Become a Client', link: '/become_client' }
                            ].map(({ label, link }, index) => (<LinkSubtitleTile text={label} link={link} key={index} />))}
                        </div>
                    </div>
                    {/* Company */}

                    {/* Services */}
                    <div className="col-span-1 flex flex-col gap-[24px]">
                        <TitleTile text="services" />

                        <div className="flex flex-col gap-[24px]">
                            {[
                                { label: 'Fashion', link: '/about_us' },
                                { label: 'Styling', link: '/become_client' },
                                { label: 'Personal Shopping', link: '/become_client' },
                                { label: 'Bespoke Garment Creation', link: '/become_client' },
                                { label: 'And so on', link: '/become_client' },
                            ].map(({ label, link }, index) => (<SubtitleTile text={label} key={index} />))}
                        </div>
                    </div>
                    {/* Services */}

                    {/* Contact us */}
                    <div className="col-span-1 flex flex-col gap-[24px]">
                        <TitleTile text="contact us" />

                        <div className="flex flex-col gap-[24px]">
                            {[
                                { label: 'info@shapedservices.com', link: 'mailto:info@shapedservices.com' },
                                {
                                    label: `128 City Road,London, EC1V 2NX, UK`, link: '/become_client'
                                },
                            ].map(({ label, link }, index) => (<SubtitleTile text={label} key={index} />))}

                            <div className="flex gap-[7px]">
                                <FaInstagram className="w-[26px] h-[26px]" color="#AFAFAF" />

                                <FiFacebook className="w-[26px] h-[26px]" color="#AFAFAF" />
                            </div>
                        </div>
                    </div>
                    {/* Contact us */}

                    {/* Subscribe to newsletter */}
                    <div className="col-span-1 flex flex-col gap-[24px]">
                        <div className="w-full flex justify-center">
                            <TitleTile text="subscribe to newsletter" />
                        </div>

                        <SubtitleTile text={'Sign up with your email to receive our news and updates'} />

                        <div className="w-full h-[60px] bg-transparent grid grid-cols-[6.3fr_0.5fr_3.7fr] grid-rows-1">
                            <input
                                className="col-start-1 col-end-3 row-start-1 row-end-2 h-full bg-[#282828] px-[16px] border-none outline-none focus:border-none focus:outline-none"
                                type="text"
                                placeholder="Email Address"
                            />

                            <button onClick={submit} className="col-start-2 -col-end-1 row-start-1 row-end-2 h-full bg-white text-black text-center rounded-[20px] font-semibold">SUBSCRIBE</button>
                        </div>
                    </div>
                    {/* Subscribe to newsletter */}
                </div>

                <div className="w-full h-fit flex justify-between mt-[4vh] border-t-[1.5px] border-t-[#D3D3D3] pt-[16px]">
                    <div className="flex gap-[56px]">
                        <SubtitleTile text="Terms & Conditions" />
                        <SubtitleTile text="Privacy Policy" />
                    </div>

                    <SubtitleTile text="Shaped 2024 All Right Reserved" />
                </div>

                <div className="w-full h-fit mt-[4vh] relative">
                    <img className="w-full h-auto" src="/images/shared/dark_footer_logo.png" alt="Footer Logo" />
                    {/* <img className="w-full h-auto" src="/images/shared/footer_logo.png" alt="Footer Logo" /> */}
                    {/* <img className="w-full h-[127px] max-h-[100px] absolute bottom-0 left-0 z-[3]" src="/images/shared/footer_clip_path.png" alt="Footer Logo" /> */}
                </div>
            </Container>
        </footer>
    )
}

export default Footer;

function TitleTile({ text }: { text: string }) {


    return (
        <div className="text-[28px] font-semibold text-white uppercase">{text}</div>
    )
}

function SubtitleTile({ text }: { text: string }) {


    return (
        <div className="text-[20px] font-medium text-[#AFAFAF]">{text}</div>
    )
}

function LinkSubtitleTile({ text, link }: { text: string, link: string }) {


    return (
        <Link href={link} className="text-[20px] font-medium text-[#AFAFAF]">{text}</Link>
    )
}
