import { services } from "./services";

export const navigation = [
    { label: 'HOME', link: '/' },
    { label: 'ABOUT US', link: '/about_us' },
    { label: 'FASHION', link: '/fashion' },
    {
        label: 'SERVICES', link: '/services',
        dropdown: services
    },
];