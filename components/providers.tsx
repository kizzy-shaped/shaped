'use client';

import "../app/globals.css";
import Footer from "@/components/footer";
import { ModalProvider } from "@/context/modal";
import HeaderProvider from "@/context/header";
import { useEffect, useState } from "react";
import Loader from "@/app/loader";
import Header from "./header";
import { raleway } from "@/app/layout";
import { usePathname } from "next/navigation";
import Head from "next/head";

export default function Providers({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [loading, setLoading] = useState(true);
    const path = usePathname()

    useEffect(() => {
        path != '/' && setLoading(false);
    }, [path])

    return (
        <html lang="en">
            {/* {loading ? (
                <body className={`w-full h-full ${path != '/' ? 'animate-pulse' : ''} bg-black`}>
                    {path == '/' && <Loader onFinish={() => setLoading(false)} />}
                </body>
            ) :  */}
            (
                <body
                    className={`w-full h-screen antialiased relative wmin_390:pt-[80px] wmax_390:pt-[65px] ${raleway.className}`}
                >
                     <Head>
        {/* Basic Meta Tags */}
        <title>Shaped Servics</title>
        <meta name="description" content="Delivering bespoke fashion concierge services" />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Shaped Servics" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shapedservices.com" />
        <meta property="og:image" content="/image.jpg" />
        <meta property="og:description" content="Delivering bespoke fashion concierge services" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Shaped Servics" />
        <meta name="twitter:description" content="Delivering bespoke fashion concierge services" />
        <meta name="twitter:image" content="/image.jpg" />
      </Head>
                    <ModalProvider>
                        <HeaderProvider>
                            <Header className="bg-black wmax_390:h-[65px] wmin_390:h-[80px] fixed top-0 left-0 z-[40]" />
                            {children}
                            <Footer />
                        </HeaderProvider>
                    </ModalProvider>
                </body>)
                {/* } */}
        </html>
    );
}