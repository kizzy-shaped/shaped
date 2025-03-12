import { Raleway } from "next/font/google";
import Providers from "@/components/providers"; // Should NOT contain 'use client' directly

const metaTagAttributes: React.MetaHTMLAttributes<HTMLMetaElement> = {
  charSet: "utf-8",
};

export const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta {...metaTagAttributes} />
        <title>
          SHAPED Services – Bespoke Lifestyle & Concierge Experiences
        </title>
        <meta
          name="description"
          content="Tailored luxury experiences and personalised concierge services designed to enhance your lifestyle."
        />
        <meta
          name="keywords"
          content="luxury concierge, lifestyle management, exclusive experiences, private events, corporate events, event planning, travel concierge, jet services, luxury travel, personal concierge, day-to-day errands, bespoke gifting, personalisation services, sourcing luxury goods, home management, property management, intimate gatherings, celebration planning, VIP services, premium lifestyle, high-end concierge, elite experiences, luxury event planning, tailored luxury services, Luxury Lifestyle, VIP Concierge, Bespoke services, Luxury events, Ultra luxury, Wealth Management, London concierge, Uk concierge, Luxury shopping, Discreet services, Executive concierge, Luxury gifting, Five star service, Premium lifestyle, Elite experiences, Ultra luxury, Bespoke gifting, Luxury shopping, Luxury gifting"
        />
        <meta
          property="og:title"
          content="SHAPED Services – Bespoke Lifestyle & Concierge Experiences"
        />
        <meta
          property="og:description"
          content="Tailored luxury experiences and personalised concierge services designed to enhance your lifestyle."
        />
        <meta property="og:url" content="https://www.shapedservices.com/" />
        <meta property="og:site_name" content="Shaped Services" />
        <meta
          property="og:image"
          content="https://www.shapedservices.com/image.png"
        />
        <meta property="og:image:width" content="271" />
        <meta property="og:image:height" content="291" />
        <meta property="og:image:alt" content="Shaped Services Image" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SHAPED Services – Bespoke Lifestyle & Concierge Experiences"
        />
        <meta
          name="twitter:description"
          content="Tailored luxury experiences and personalised concierge services designed to enhance your lifestyle."
        />
        <meta
          name="twitter:image"
          content="https://www.shapedservices.com/image.png"
        />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="271x291"
        />
        <link rel="canonical" href="https://www.shapedservices.com" />
        <meta name="next-size-adjust" />
      </head>

      <body
        className={`w-full h-screen antialiased relative wmin_390:pt-[80px] wmax_390:pt-[65px] ${raleway.className}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
