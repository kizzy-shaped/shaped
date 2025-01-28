export interface IService {
  link: string;
  title: string;
  overview: string;
  desc: {
    title: string;
    desc: string | string[];
    list?: boolean
  };
  heroImage: string;
  galleryImages: string[];
  thumbnail: string;
  formHeadline?: string;
}

export const services: IService[] = [
//   Private & corporate events 
{
  link: "private_coporate_events",
  title: "private & coporate events",
  thumbnail: '/images/home/services/private.png',
  overview: 'We design every detail of your event to perfection, keeping you at the center.',
 desc: {
    title: "Crafting Moments That Last a Lifetime",
    // desc: "From private parties to high-profile corporate events, SHAPED delivers exceptional event management services. Our team works closely with you to create an experience that is perfectly tailored to your needs. Whether it’s sourcing the ideal location, designing the perfect ambiance, or curating unforgettable experiences, we make sure every aspect of your event is executed to perfection, with you at the center of it all.",
    desc: "From private parties to high-profile corporate events, SHAPED delivers exceptional event management services. Our team works closely with you to create an experience that is perfectly tailored to your needs. Whether it’s sourcing the ideal location, designing the perfect ambiance, or curating unforgettable experiences, we make sure every aspect of your event is executed to perfection, with you at the center of it all.",
  },
  heroImage: "/images/services/private/hero_img.png",
  // heroImage: "/images/services_base_imgs/private_corporate.jpg",
  galleryImages: [
    "/images/services/private/gallery1.png",
    "/images/services/private/gallery2.png"
  ],
  formHeadline: 'Crafting Moments That Matter'
},
//   Private & corporate events 
// Travel and Jet services 
{
  link: "travel_jet_services",
  title: "travel & jet services",
  thumbnail: '/images/home/services/travel.png',
  overview: 'We create the perfect travel experience tailored to your needs.',
 desc: {
    title: "Jet-Set in Style",
    // desc: "Experience seamless travel with SHAPED’s luxury travel services. From private jet charters to exclusive holiday planning, we handle every detail of your journey, ensuring it’s as luxurious and effortless as possible. Whether you’re traveling for business or leisure, we create the perfect travel experience tailored to your needs.",
    desc: "Experience seamless travel with SHAPED’s luxury travel services. From private jet charters to exclusive holiday planning, we handle every detail of your journey, ensuring it’s as luxurious and effortless as possible. Whether you’re traveling for business or leisure, we create the perfect travel experience tailored to your needs.",
  },
  heroImage: "/images/services/travel/hero_img.png",
  // heroImage: "/images/services_base_imgs/travel_jet.jpg",
  galleryImages: [
    "/images/services/travel/gallery1.png",
    "/images/services/travel/gallery2.png"
  ],
  formHeadline:'Experience Seamless Luxury Travel'
},
// Travel and Jet services 
// Fashion services 
// {
//   link: "fashion_services",
//   title: "fashion services",
//   thumbnail: '/images/home/services/fashion.png',
//   overview: 'Explore fashion services designed to elevate your style and wardrobe.',
//   desc: {
//     title: "Curated, Bespoke Fashion, Tailored Just for You",
//     desc: "At SHAPED, we believe that your style should be as unique as you are. Our Fashion Services are designed to give you a seamless, luxurious experience—whether you're seeking expert styling, personal shopping, or the perfect bespoke garment. Explore our range of services below, each tailored to elevate your wardrobe and enhance your lifestyle.",
//   },
//   heroImage: "/images/fashion/hero_img.png",
//   // heroImage: "/images/services_base_imgs/fashion.jpg",
//   galleryImages: [
//     "/images/home/services/styling.png",
//     "/images/home/services/personal.png",
//     "/images/home/services/bespoke_garment.png",
//     "/images/home/services/alteration.png",
//   ],
// },

// Fashion services 
// Intimate gathering & celebration 
{
  link: "intimate_gathering_celebration",
  title: "intimate gathering & celebration",
  thumbnail: '/images/home/services/intimate.png',
  overview: 'From venue to final touches, every detail makes your celebration extraordinary.',
 desc: {
    title: "Small Moments, Grand Impact",
    // desc: "For those truly special moments—whether it’s a proposal, an anniversary celebration, or an intimate gathering—SHAPED creates unforgettable experiences with unmatched attention to detail. From the venue selection to the final touches, every element is designed to make your celebration extraordinary.",
    desc: "For those truly special moments—whether it’s a proposal, an anniversary celebration, or an intimate gathering—SHAPED creates unforgettable experiences with unmatched attention to detail. From the venue selection to the final touches, every element is designed to make your celebration extraordinary.",
  },
  heroImage: "/images/services/intimate/hero_img.png",
  // heroImage: "/images/services_base_imgs/intimate.jpg",
  galleryImages: [
  ],
  formHeadline: 'Create Memories, We Handle the Details'
},
// Intimate gathering & celebration 
// Personalisation & gifting 
{
  link: "personalisation_gifting",
  title: "personalisation & gifting",
  thumbnail: '/images/home/services/personalisation.png',
  overview: 'We ensure that every gesture is as unforgettable as the person receiving it—crafted to be cherished forever.',
 desc: {
    title: "Gifts as Unique as You.",
    // desc: "At SHAPED, we take personalised gifting to the next level. From bespoke gifts to curated experiences, we specialise in creating luxurious, one-of-a-kind offerings that are meaningful, exceptional, and crafted with care. Whether you’re seeking the perfect gift for a loved one or designing a memorable experience, we ensure that every gesture is as unforgettable as the person receiving it—crafted to be cherished forever.",
    desc: "At SHAPED, we take personalised gifting to the next level. From bespoke gifts to curated experiences, we specialise in creating luxurious, one-of-a-kind offerings that are meaningful, exceptional, and crafted with care. Whether you’re seeking the perfect gift for a loved one or designing a memorable experience, we ensure that every gesture is as unforgettable as the person receiving it—crafted to be cherished forever.",
  },
  heroImage: "/images/services/personalisation/hero_img.png",
  // heroImage: "/images/services_base_imgs",
  galleryImages: [
    "/images/home/services/styling.png",
    "/images/home/services/personal.png",
    "/images/home/services/bespoke_garment.png",
    "/images/home/services/alteration.png",
  ],
  formHeadline:'Make Every Gift Unforgettable'
},
// Personalisation & gifting 
// Event management 
{
  link: "event_management",
  title: "event management",
  thumbnail: '/images/home/services/event.png',
  overview: 'You can relax and immerse yourself in the moments that matter most, knowing every detail is taken care of.',
 desc: {
    title: "Curated Experiences, Perfectly Executed",
    // desc: "No wardrobe is complete without the perfect fit. SHAPED’s alteration services are designed to ensure your clothes fit you like they were made for you. From simple adjustments to complex tailoring, our expert team will refine every garment to enhance its shape and style, ensuring your clothing is a true reflection of your taste and body. Experience the art of tailoring with precision, care, and a perfect fit.",
    desc: "At SHAPED, we believe every detail counts when it comes to crafting unforgettable experiences. Whether you’re hosting an intimate gathering, a grand celebration, or a corporate event, we specialise in designing bespoke events that perfectly reflect your vision and style. From exclusive venue selection to personalised experiences, we handle every aspect with precision and elegance, ensuring that your event unfolds flawlessly. With SHAPED, you can relax and immerse yourself in the moments that matter most, knowing every detail is taken care of.",
  },
  heroImage: "/images/services/events/hero_img.png",
  // heroImage: "/images/services_base_imgs/event.jpg",
  galleryImages: [
  ],
  formHeadline:'Let’s Bring Your Vision to Life'
},
// Event management 
// Sourcing 
{
  link: "sourcing",
  title: "sourcing",
  thumbnail: '/images/home/services/sourcing.png',
  overview: 'We make the impossible happen—ensuring that you get exactly what you’re looking for, when you want it',
 desc: {
    title: "Access the Unobtainable.",
    // desc: "With SHAPED, you gain access to the inaccessible. Our sourcing & procurement services are designed to find rare, limited-edition, or hard-to-get items that align with your desires. Whether it’s a collector’s item, luxury accessory, or unique experience, we make the impossible happen—ensuring that you get exactly what you’re looking for, when you want it.",
    desc: "With SHAPED, you gain access to the inaccessible. Our sourcing & procurement services are designed to find rare, limited-edition, or hard-to-get items that align with your desires. Whether it’s a collector’s item, luxury accessory, or unique experience, we make the impossible happen—ensuring that you get exactly what you’re looking for, when you want it",
  },
  heroImage: "/images/services/sourcing/hero_img.png",
  galleryImages: [
    "/images/services/sourcing/gallery1.png",
    "/images/services/sourcing/gallery2.png",
  ],
  formHeadline:'Let Us Source the Extraordinary for You'
},
// Sourcing 
// Lifestyle & concierge 
{
  link: "lifestyle_concierge",
  title: "lifestyle concierge",
  thumbnail: '/images/home/services/lifestyle.png',
  overview: 'From family holidays to business travel, no request is too big or small.',
 desc: {
    title: "Effortless Living, Unmatched Luxury",
    // desc: "At SHAPED, our concierge services are crafted to enhance your lifestyle, taking care of the details so you don’t have to. From day-to-day errands to luxury travel arrangements, our team is here to ensure your life runs smoothly, with a level of service that is unparalleled. Whether it’s planning family holidays, organising business travel, or finding exclusive experiences, we ensure that no request is too big or too small.",
    desc: "At SHAPED, our concierge services are crafted to enhance your lifestyle, taking care of the details so you don’t have to. From day-to-day errands to luxury travel arrangements, our team is here to ensure your life runs smoothly, with a level of service that is unparalleled. Whether it’s planning family holidays, organising business travel, or finding exclusive experiences, we ensure that no request is too big or too small.",
  },
  heroImage: "/images/services/lifestyle/hero_img.png",
  // heroImage: "/images/services_base_imgs/lifestyle.jpg",
  galleryImages: [
  ],
  formHeadline: 'Your Every Need, Seamlessly Managed'
},
// Lifestyle & concierge 
// Home management 
{
  link: "home_property_management",
  title: "Home & Property Management",
  thumbnail: '/images/home/services/home.png',
  overview: 'We manage design, maintenance, and renovations to keep your home luxurious and pristine.',
 desc: {
    title: "Your Home, Perfectly Curated.",
    // desc: "SHAPED's home management services offer you peace of mind with a range of personalised services for your home or property. From interior design consultations and landscaping to maintenance and renovation projects, we ensure that your home is always in pristine condition, reflecting your unique style and standards of luxury.",
    desc: "SHAPED's home management services offer you peace of mind with a range of personalised services for your home or property. From interior design consultations and landscaping to maintenance and renovation projects, we ensure that your home is always in pristine condition, reflecting your unique style and standards of luxury.",
  },
  heroImage: "/images/services/home/hero_img.png",
  // heroImage: "/images/services_base_imgs/home_property.jpg",
  galleryImages: [
    "/images/services/home/gallery1.png",
    "/images/services/home/gallery2.png",
    "/images/services/home/gallery3.png",
    "/images/services/home/gallery4.png",
  ],
  formHeadline:'Luxury Living Starts at Home'
},
// Home management 
// Day to day errands 
{
  link: "day_to_day_errands",
  title: "Day-to-Day errands",
  thumbnail: '/images/home/services/errand.png',
  overview: 'Our team offers discreet, efficient service, making your daily life effortless.',
 desc: {
    title: "Luxury in the Everyday.",
    // desc: "AFrom grocery shopping to appointments and everything in between, SHAPED takes care of the small tasks so you can focus on what truly matters. Our team provides discreet, efficient, and thoughtful service, ensuring your daily life runs smoothly without lifting a finger.",
    desc: "From grocery shopping to appointments and everything in between, SHAPED takes care of the small tasks so you can focus on what truly matters. Our team provides discreet, efficient, and thoughtful service, ensuring your daily life runs smoothly without lifting a finger.",
  },
  heroImage: "/images/services/errand/hero_img.png",
  // heroImage: "/images/services_base_imgs/errands.jpg",
  galleryImages: [
  ],
},
// Day to day errands 
// Education
{
  link: "shaped_education",
title: "education",
thumbnail: '/images/home/services/education.png',
overview: 'We are designed to refine the expertise of retail teams in styling, personal shopping, and bespoke experiences.',
desc: {
  title: "Empowering Teams to Redefine Luxury Service",
  desc: [`Education is designed to refine the expertise of retail teams in styling, personal shopping, and bespoke experiences. Our focus is on cultivating the creativity and precision necessary to offer truly personalised services that leave a lasting impression on your most discerning clients. `,

`By perfecting the art of styling and personal shopping, SHAPED Education empowers retail staff to elevate their craft and exceed the highest expectations in luxury service. To learn more about how SHAPED Education can enhance your team's expertise, contact us today and take the first step towards elevating your service.`]
},
heroImage: "/images/services/education/hero_img.png",
galleryImages: [
  "/images/services/education/gallery1.png",
  "/images/services/education/gallery2.png",
  "/images/services/education/gallery3.png",
  "/images/services/education/gallery4.png",
],
formHeadline:'Let’s Shape the Future of Your Team—Contact Us'
}
// Education
  
];

export const fashion_services: IService[] = [
  // Styling
  {
    link: "styling_services",
    title: "styling services",
    thumbnail: '/images/home/services/styling.png',
    overview: 'From casual to elegant, we craft looks that exude confidence and style.',
    desc: {
      title: "Unleash Your Signature Style.",
      // desc: "At SHAPED, we believe that your style should be as unique as you are. Our Fashion Services are designed to give you a seamless, luxurious experience—whether you're seeking expert styling, personal shopping, or the perfect bespoke garment. Explore our range of services below, each tailored to elevate your wardrobe and enhance your lifestyle.",
      desc: "Let SHAPED help you unlock your personal style with our exclusive styling services. Whether you're looking to refine your look, update your wardrobe, or experiment with new trends, our expert stylists curate outfits that reflect your individuality and bring out the best in you. From casual chic to formal elegance, we ensure every look is crafted to perfection, leaving you confident and effortlessly stylish.",
    },
    heroImage: "/images/services/styling/hero_img.png",
    galleryImages: [
      "/images/services/styling/gallery1.png",
      // "/images/home/showcase_img.png",
      "/images/services/styling/gallery3.png",
      // "/images/services/styling/gallery4.png",
    ],
  },
  // Styling
  // Personal Shopping
  {
    link: "personal_shopping",
    title: "personal shopping",
    thumbnail: '/images/services/personal/hero_img.png',
    overview: 'From essentials to statement pieces, we keep you ahead of the trends.',
   desc: {
      title: "The Perfect Piece, Every Time",
      // desc: "Let SHAPED help you unlock your personal style with our exclusive styling services. Whether you're looking to refine your look, update your wardrobe, or experiment with new trends, our expert stylists curate outfits that reflect your individuality and bring out the best in you. From casual chic to formal elegance, we ensure every look is crafted to perfection, leaving you confident and effortlessly stylish.",
      desc: "With SHAPED’s personal shopping service, finding the perfect item has never been easier. Our team of experts will guide you through the latest collections, sourcing everything from high-end pieces to exclusive fashion finds that align with your unique taste and lifestyle. Whether you're shopping for everyday essentials or a statement piece for a special occasion, we ensure you’re always a step ahead of the trends.",
    },
    // heroImage: "/images/services/personal/hero_img.png",
    heroImage: "/images/services_base_imgs/personalisation.jpg",
    galleryImages: [
      "/images/home/showcase_img.png",
      "/images/services/personal/hero_img.png",
      "/images/services/personal/gallery3.png",
      "/images/services/personal/gallery4.png",
    ],
    formHeadline: 'Find Your Perfect Style Match Today'
  },
  // Personal Shopping
  // Bespoke
  {
    link: "bespoke_garment_creation",
    // title: "The Perfect Piece, Every Time.",
    title: "Bespoke Garment Creation",
    thumbnail: '/images/home/services/bespoke_garment.png',
    overview: 'Unique pieces crafted to make you stand out, tailored to every detail.',
   desc: {
      title: "One-of-a-Kind, Just for You",
      desc: "When off-the-rack doesn’t cut it, SHAPED offers bespoke garment creation that is tailored to your exact specifications. From luxurious fabrics to custom silhouettes, we craft each garment to fit your body and your vision. Whether it’s for a wedding, a corporate event, or a milestone celebration, we create one-of-a-kind pieces designed to make you stand out. Every stitch, every detail, made just for you.",
    },
    heroImage: "/images/services/bespoke/hero_img.png",
    galleryImages: [
      "/images/services/bespoke/gallery1.png",
      "/images/services/bespoke/gallery2.png",
      "/images/services/bespoke/hero_img.png",
      "/images/services/bespoke/gallery4.png",
    ],
    formHeadline: 'Step into Style with Custom Creations'
  },
  // Bespoke
  // Alteration
  {
    link: "alteration_services",
    title: "alteration services",
    thumbnail: '/images/home/services/alteration.png',
    overview: 'Experience the art of tailoring with precision, care, and a perfect fit.',
   desc: {
      title: "Flawless Fit, Every Time",
      // desc: "When off-the-rack doesn’t cut it, SHAPED offers bespoke garment creation that is tailored to your exact specifications. From luxurious fabrics to custom silhouettes, we craft each garment to fit your body and your vision. Whether it’s for a wedding, a corporate event, or a milestone celebration, we create one-of-a-kind pieces designed to make you stand out. Every stitch, every detail, made just for you.",
      desc: "No wardrobe is complete without the perfect fit. SHAPED’s alteration services are designed to ensure your clothes fit you like they were made for you. From simple adjustments to complex tailoring, our expert team will refine every garment to enhance its shape and style, ensuring your clothing is a true reflection of your taste and body. Experience the art of tailoring with precision, care, and a perfect fit.",
    },
    heroImage: "/images/services/alteration/hero_img.png",
    galleryImages: [
      "/images/services/alteration/gallery1.png",
      "/images/services/alteration/gallery2.png",
      "/images/services/bespoke/hero_img.png",
      "/images/services/alteration/gallery4.png",
    ],
  },
  // Alteration
]

