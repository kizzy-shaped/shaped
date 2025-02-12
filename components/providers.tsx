"use client";

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
import { ToastContainer } from "react-toastify";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  const path = usePathname();

  useEffect(() => {
    path != "/" && setLoading(false);
  }, [path]);

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
          <title>Shaped Services</title>
          <meta name="description" content="Your luxury concierge" />

          <meta property="og:url" content="https://www.shapedservices.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Shaped Services" />
          <meta property="og:description" content="Your luxury concierge" />
          <meta property="og:image" content="https://www.shapedservices.com/image.png" />
          <meta property="og:domain" content="shapedservices.com" />
          <meta
            property="og:url"
            content="https://www.shapedservices.com"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="shapedservices.com" />
          <meta
            property="twitter:url"
            content="https://www.shapedservices.com"
          />
          <meta name="twitter:title" content="Shaped Services" />
          <meta name="twitter:description" content="Your luxury concierge" />
          <meta name="twitter:image" content="https://www.shapedservices.com/image.png" />
        </Head>
        <ToastContainer />
        <ModalProvider>
          <HeaderProvider>
            <Header className="bg-black wmax_390:h-[65px] wmin_390:h-[80px] fixed top-0 left-0 z-[40]" />
            {children}
            <Footer />
          </HeaderProvider>
        </ModalProvider>
      </body>
      ){/* } */}
    </html>
  );
}
