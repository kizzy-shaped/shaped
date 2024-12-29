// import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Providers from "@/components/providers";

// export const metadata: Metadata = {
//   title: "Shaped | Welcome",
//   description: "Renders different kinds of services",
// };

export const raleway = Raleway({
  // variable: "--raleway",
  weight: ['100', '200', '300'],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}
