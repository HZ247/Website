import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { braclet1, braclet2, braclet3, braclet4, braclet5, braclet6, braclet7, braclet8, braclet9, customer1, customer2 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#footer", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: braclet1,
        bigShoe: braclet1,
    },
    {
        thumbnail: braclet2,
        bigShoe: braclet2,
    },
    {
        thumbnail: braclet3,
        bigShoe: braclet3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '50+', label: 'Items' },
    { value: '250+', label: 'Customers' },
];

export const products = [
    {
        imgURL: braclet4,
        name: "Amethyst",
        price: "$200.20",
    },
    {
        imgURL: braclet5,
        name: "Citrine",
        price: "$210.20",
    },
    {
        imgURL: braclet6,
        name: "Red Jasper",
        price: "$220.20",
    },
    {
        imgURL: braclet7,
        name: "Tiger Eye",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Aura Quartz", link: "#" },
            { name: "Rose Quartz", link: "#" },
            { name: "Lapis Lazuli", link: "#" },
            { name: "Turquoise", link: "#about-us" },
            { name: "Lava", link: "#special-offer" },
            { name: "Others", link: "#products" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "Home", link: "#" },
            { name: "About us", link: "#about-us" },
            { name: "Products", link: "#products" },
            { name: "Contact Us", link: "#footer" },
            { name: "For More Details", link: "#footer" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "thecrystallounge373@gmail.com", link: "mailto:thecrystallounge373@gmail.com" },
            { name: "The_Crystal_Lounge", link: "instagram:@The_Crystal_Lounge" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];