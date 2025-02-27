import React from "react";
import "../app/globals.css";
import Footer from "@/components/footer";
import { ModalProvider } from "@/context/modal";
import HeaderProvider from "@/context/header";
import Header from "./header";
import { ToastContainer } from "react-toastify";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ToastContainer />
      <ModalProvider>
        <HeaderProvider>
          <Header className="bg-black wmax_390:h-[65px] wmin_390:h-[80px] fixed top-0 left-0 z-[40]" />
          {children}
          <Footer />
        </HeaderProvider>
      </ModalProvider>
    </>
  );
}
