import { fashion_services, services } from "./services";

export const navigation = [
    { label: 'HOME', link: '/' },
    { label: 'ABOUT US', link: '/about_us' },
    { label: 'FASHION', link: '/fashion',
        dropdown: fashion_services
     },
    {
        label: 'SERVICES', link: '/services',
        dropdown: services.filter(service => service.link !== 'education')
    },
    { label: 'PORTFOLIO', link: '/portfolio' },
    { label: 'EDUCATION', link: '/education' },
    // { label: 'EDUCATION', link: '/services?serviceId=education' },
];