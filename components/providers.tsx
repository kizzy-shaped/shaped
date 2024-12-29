'use client';

import "../app/globals.css";
import Footer from "@/components/footer";
import { ModalProvider } from "@/context/modal";
import HeaderProvider from "@/context/header";
import { useState } from "react";
import Loader from "@/app/loader";
import Header from "./header";
import { raleway } from "@/app/layout";

export default function Providers({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [loading, setLoading] = useState(true);


    return (
        <html lang="en">
            {loading ? (
                <body className="w-full h-full">
                    <Loader onFinish={() => setLoading(false)} />
                </body>
            ) : (
                <body
                    className={`w-full h-screen antialiased relative wmin_390:pt-[132px] wmax_390:pt-[100px] ${raleway.className}`}
                >
                    <ModalProvider>
                        <HeaderProvider>
                            <Header className="bg-white wmax_390:h-[100px] wmin_390:h-[132px] fixed top-0 left-0 z-[40]" />
                            {children}
                            <Footer />
                        </HeaderProvider>
                    </ModalProvider>
                </body>)}
        </html>
    );
}