export interface IService {
  link: string;
  title: string;
  overview: string;
  desc: {
    title: string;
    desc: string;
  };
  heroImage: string;
  galleryImages: string[];
  thumbnail: string;
}

export const services: IService[] = [
  {
    link: "fashion_services",
    title: "fashion services",
    thumbnail: '/images/home/services/fashion.png',
    overview: 'Explore fashion services designed to elevate your style and wardrobe.',
    desc: {
      title: "Curated, Bespoke Fashion, Tailored Just for You",
      desc: "At SHAPED, we believe that your style should be as unique as you are. Our Fashion Services are designed to give you a seamless, luxurious experience—whether you're seeking expert styling, personal shopping, or the perfect bespoke garment. Explore our range of services below, each tailored to elevate your wardrobe and enhance your lifestyle.",
    },
    heroImage: "/images/fashion/hero_img.png",
    galleryImages: [
      "/images/home/services/styling.png",
      "/images/home/services/personal.png",
      "/images/home/services/bespoke_garment.png",
      "/images/home/services/alteration.png",
    ],
  },
  {
    link: "styling_services",
    title: "styling services",
    thumbnail: '/images/home/services/styling.png',
    overview: 'From casual to elegant, we craft looks that exude confidence and style.',
    desc: {
      title: "Unleash Your Signature Style.",
      desc: "At SHAPED, we believe that your style should be as unique as you are. Our Fashion Services are designed to give you a seamless, luxurious experience—whether you're seeking expert styling, personal shopping, or the perfect bespoke garment. Explore our range of services below, each tailored to elevate your wardrobe and enhance your lifestyle.",
    },
    heroImage: "/images/fashion/hero_img.png",
    galleryImages: [
      "/images/home/services/styling.png",
      "/images/home/services/personal.png",
      "/images/home/services/bespoke_garment.png",
      "/images/home/services/alteration.png",
    ],
  },
  {
    link: "personal_shopping",
    title: "personal shopping",
    thumbnail: '/images/home/services/personal.png',
    overview: 'From essentials to statement pieces, we keep you ahead of the trends.',
   desc: {
      title: "Unleash Your Signature Style.",
      desc: "Let SHAPED help you unlock your personal style with our exclusive styling services. Whether you're looking to refine your look, update your wardrobe, or experiment with new trends, our expert stylists curate outfits that reflect your individuality and bring out the best in you. From casual chic to formal elegance, we ensure every look is crafted to perfection, leaving you confident and effortlessly stylish.",
    },
    heroImage: "/images/fashion/hero_img.png",
    galleryImages: [
      "/images/home/services/styling.png",
      "/images/home/services/personal.png",
      "/images/home/services/bespoke_garment.png",
      "/images/home/services/alteration.png",
    ],
  },
  {
    link: "bespoke_garment_creation",
    // title: "The Perfect Piece, Every Time.",
    title: "Bespoke Garment Creation",
    thumbnail: '/images/home/services/bespoke_garment.png',
    overview: 'Unique pieces crafted to make you stand out, tailored to every detail.',
   desc: {
      title: "Unleash Your Signature Style.",
      desc: "At SHAPED, we believe that your style should be as unique as you are. Our Fashion Services are designed to give you a seamless, luxurious experience—whether you're seeking expert styling, personal shopping, or the perfect bespoke garment. Explore our range of services below, each tailored to elevate your wardrobe and enhance your lifestyle.",
    },
    heroImage: "/images/fashion/hero_img.png",
    galleryImages: [
      "/images/home/services/styling.png",
      "/images/home/services/personal.png",
      "/images/home/services/bespoke_garment.png",
      "/images/home/services/alteration.png",
    ],
  },
  {
    link: "alteration_services",
    title: "alteration services",
    thumbnail: '/images/home/services/alteration.png',
    overview: 'Experience the art of tailoring with precision, care, and a perfect fit.',
   desc: {
      title: "One-of-a-Kind, Just for You.",
      desc: "When off-the-rack doesn’t cut it, SHAPED offers bespoke garment creation that is tailored to your exact specifications. From luxurious fabrics to custom silhouettes, we craft each garment to fit your body and your vision. Whether it’s for a wedding, a corporate event, or a milestone celebration, we create one-of-a-kind pieces designed to make you stand out. Every stitch, every detail, made just for you.",
    },
    heroImage: "/images/fashion/hero_img.png",
    galleryImages: [
      "/images/home/services/styling.png",
      "/images/home/services/personal.png",
      "/images/home/services/bespoke_garment.png",
      "/images/home/services/alteration.png",
    ],
  },
  {
    link: "event_management",
    title: "event management",
    thumbnail: '/images/home/services/event.png',
    overview: 'You can relax and immerse yourself in the moments that matter most, knowing every detail is taken care of.',
   desc: {
      title: "Flawless Fit, Every Time.",
      desc: "No wardrobe is complete without the perfect fit. SHAPED’s alteration services are designed to ensure your clothes fit you like they were made for you. From simple adjustments to complex tailoring, our expert team will refine every garment to enhance its shape and style, ensuring your clothing is a true reflection of your taste and body. Experience the art of tailoring with precision, care, and a perfect fit.",
    },
    heroImage: "/images/fashion/hero_img.png",
    galleryImages: [
      "/images/home/services/styling.png",
      "/images/home/services/personal.png",
      "/images/home/services/bespoke_garment.png",
      "/images/home/services/alteration.png",
    ],
  },
  {
    link: "private_coporation_events",
    title: "private & coporation events",
    thumbnail: '/images/home/services/prvate_corporate_event.png',
    overview: 'We design every detail of your event to perfection, keeping you at the center.',
   desc: {
      title: "Crafting Moments That Last a Lifetime.",
      desc: "From private parties to high-profile corporate events, SHAPED delivers exceptional event management services. Our team works closely with you to create an experience that is perfectly tailored to your needs. Whether it’s sourcing the ideal location, designing the perfect ambiance, or curating unforgettable experiences, we make sure every aspect of your event is executed to perfection, with you at the center of it all.",
    },
    heroImage: "/images/fashion/hero_img.png",
    galleryImages: [
      "/images/home/services/styling.png",
      "/images/home/services/personal.png",
      "/images/home/services/bespoke_garment.png",
      "/images/home/services/alteration.png",
    ],
  },
  {
    link: "intimate_gathering_celebration",
    title: "intimate gathering & celebration",
    thumbnail: '/images/home/services/intimate_gathering.png',
    overview: 'From venue to final touches, every detail makes your celebration extraordinary.',
   desc: {
      title: "Small Moments, Grand Impact.",
      desc: "For those truly special moments—whether it’s a proposal, an anniversary celebration, or an intimate gathering—SHAPED creates unforgettable experiences with unmatched attention to detail. From the venue selection to the final touches, every element is designed to make your celebration extraordinary.",
    },
    heroImage: "/images/fashion/hero_img.png",
    galleryImages: [
      "/images/home/services/styling.png",
      "/images/home/services/personal.png",
      "/images/home/services/bespoke_garment.png",
      "/images/home/services/alteration.png",
    ],
  },
  {
    link: "lifestyle_concierge",
    title: "lifestyle concierge",
    thumbnail: '/images/home/services/lifestyle.png',
    overview: 'From family holidays to business travel, no request is too big or small.',
   desc: {
      title: "Effortless Living, Unmatched Luxury.",
      desc: "At SHAPED, our concierge services are crafted to enhance your lifestyle, taking care of the details so you don’t have to. From day-to-day errands to luxury travel arrangements, our team is here to ensure your life runs smoothly, with a level of service that is unparalleled. Whether it’s planning family holidays, organising business travel, or finding exclusive experiences, we ensure that no request is too big or too small.",
    },
    heroImage: "/images/fashion/hero_img.png",
    galleryImages: [
      "/images/home/services/styling.png",
      "/images/home/services/personal.png",
      "/images/home/services/bespoke_garment.png",
      "/images/home/services/alteration.png",
    ],
  },
  {
    link: "travel_jet_services",
    title: "travel & jet services",
    thumbnail: '/images/home/services/fashion.png',
    overview: 'We create the perfect travel experience tailored to your needs.',
   desc: {
      title: "Jet-Set in Style.",
      desc: "Experience seamless travel with SHAPED’s luxury travel services. From private jet charters to exclusive holiday planning, we handle every detail of your journey, ensuring it’s as luxurious and effortless as possible. Whether you’re traveling for business or leisure, we create the perfect travel experience tailored to your needs.",
    },
    heroImage: "/images/fashion/hero_img.png",
    galleryImages: [
      "/images/home/services/styling.png",
      "/images/home/services/personal.png",
      "/images/home/services/bespoke_garment.png",
      "/images/home/services/alteration.png",
    ],
  },
  {
    link: "day_to_day_errands",
    title: "Day-to-Day errands",
    thumbnail: '/images/home/services/fashion.png',
    overview: 'Our team offers discreet, efficient service, making your daily life effortless.',
   desc: {
      title: "Luxury in the Everyday.",
      desc: "AFrom grocery shopping to appointments and everything in between, SHAPED takes care of the small tasks so you can focus on what truly matters. Our team provides discreet, efficient, and thoughtful service, ensuring your daily life runs smoothly without lifting a finger.",
    },
    heroImage: "/images/fashion/hero_img.png",
    galleryImages: [
      "/images/home/services/styling.png",
      "/images/home/services/personal.png",
      "/images/home/services/bespoke_garment.png",
      "/images/home/services/alteration.png",
    ],
  },
  {
    link: "home_property_management",
    title: "Home & Property Management",
    thumbnail: '/images/home/services/home_and_property.png',
    overview: 'We manage design, maintenance, and renovations to keep your home luxurious and pristine.',
   desc: {
      title: "Luxury in the Everyday.",
      desc: "AFrom grocery shopping to appointments and everything in between, SHAPED takes care of the small tasks so you can focus on what truly matters. Our team provides discreet, efficient, and thoughtful service, ensuring your daily life runs smoothly without lifting a finger.",
    },
    heroImage: "/images/fashion/hero_img.png",
    galleryImages: [
      "/images/home/services/styling.png",
      "/images/home/services/personal.png",
      "/images/home/services/bespoke_garment.png",
      "/images/home/services/alteration.png",
    ],
  },
  {
    link: "personalisation_gifting",
    title: "personalisation & gifting",
    thumbnail: '/images/home/services/personalization.png',
    overview: 'We ensure that every gesture is as unforgettable as the person receiving it—crafted to be cherished forever.',
   desc: {
      title: "Gifts as Unique as You.",
      desc: "At SHAPED, we take personalised gifting to the next level. From bespoke gifts to curated experiences, we specialise in creating luxurious, one-of-a-kind offerings that are meaningful, exceptional, and crafted with care. Whether you’re seeking the perfect gift for a loved one or designing a memorable experience, we ensure that every gesture is as unforgettable as the person receiving it—crafted to be cherished forever.",
    },
    heroImage: "/images/fashion/hero_img.png",
    galleryImages: [
      "/images/home/services/styling.png",
      "/images/home/services/personal.png",
      "/images/home/services/bespoke_garment.png",
      "/images/home/services/alteration.png",
    ],
  },
  {
    link: "sourcing_procurement",
    title: "sourcing & procurement",
    thumbnail: '/images/home/services/sourcing.png',
    overview: 'We make the impossible happen—ensuring that you get exactly what you’re looking for, when you want it',
   desc: {
      title: "Access the Unobtainable.",
      desc: "With SHAPED, you gain access to the inaccessible. Our sourcing & procurement services are designed to find rare, limited-edition, or hard-to-get items that align with your desires. Whether it’s a collector’s item, luxury accessory, or unique experience, we make the impossible happen—ensuring that you get exactly what you’re looking for, when you want it.",
    },
    heroImage: "/images/fashion/hero_img.png",
    galleryImages: [
      "/images/home/services/styling.png",
      "/images/home/services/personal.png",
      "/images/home/services/bespoke_garment.png",
      "/images/home/services/alteration.png",
    ],
  },
];

export const shaped_education = {
  link: "shaped_education",
  title: "shaped education",
  thumbnail: '/images/home/services/sourcing.png',
  overview: 'We are designed to refine the expertise of retail teams in styling, personal shopping, and bespoke experiences.',
 desc: {
    title: "Access the Unobtainable.",
    desc: "With SHAPED, you gain access to the inaccessible. Our sourcing & procurement services are designed to find rare, limited-edition, or hard-to-get items that align with your desires. Whether it’s a collector’s item, luxury accessory, or unique experience, we make the impossible happen—ensuring that you get exactly what you’re looking for, when you want it.",
  },
  heroImage: "/images/fashion/hero_img.png",
  galleryImages: [
    "/images/home/services/styling.png",
    "/images/home/services/personal.png",
    "/images/home/services/bespoke_garment.png",
    "/images/home/services/alteration.png",
  ],
};
