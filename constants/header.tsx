import { services } from "./services";

export const navigation = [
    { label: 'HOME', link: '/' },
    { label: 'ABOUT US', link: '/about_us' },
    { label: 'FASHION', link: '/fashion',
        dropdown: services.filter((_, index) => index > 0 && index <= 4)
     },
    {
        label: 'SERVICES', link: '/services',
        dropdown: services.filter((_, index) => index > 4)
    },
    { label: 'PORTFOLIO', link: '/portfolio' },
    // { label: 'EDUCATION', link: '/education' },
    { label: 'EDUCATION', link: '/services?serviceId=shaped_education' },
];