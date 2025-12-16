import user_image from './images/user-image.jpg';
import code_icon from './about/code-icon.png';
import code_icon_dark from './about/code-icon-dark.png';
import edu_icon from './about/edu-icon.png';
import edu_icon_dark from './about/edu-icon-dark.png';
import project_icon from './about/project-icon.png';
import project_icon_dark from './about/project-icon-dark.png';
import vscode from './tools/vscode.png';
import firebase from './tools/firebase.png';
import figma from './tools/figma.png';
import git from './tools/git.png';
import mongodb from './tools/mongodb.png';
import right_arrow_white from './ui/right-arrow-white.png';
import logo from './ui/logo.png';
import logo_dark from './ui/logo_dark.png';
import mail_icon from './ui/mail_icon.png';
import mail_icon_dark from './ui/mail_icon_dark.png';
import profile_img from './images/profile-image.jpeg';
import download_icon from './ui/download-icon.png';
import hand_icon from './ui/hand-icon.png';
import header_bg_color from './ui/header-bg-color.png';
import moon_icon from './ui/moon_icon.png';
import sun_icon from './ui/sun_icon.png';
import arrow_icon from './ui/arrow-icon.png';
import arrow_icon_dark from './ui/arrow-icon-dark.png';
import menu_black from './ui/menu-black.png';
import menu_white from './ui/menu-white.png';
import close_black from './ui/close-black.png';
import close_white from './ui/close-white.png';
import web_icon from './services/web-icon.png';
import mobile_icon from './services/mobile-icon.png';
import ui_icon from './services/ui-icon.png';
import graphics_icon from './services/graphics-icon.png';
import right_arrow from './ui/right-arrow.png';
import send_icon from './ui/send-icon.png';
import right_arrow_bold from './ui/right-arrow-bold.png';
import right_arrow_bold_dark from './ui/right-arrow-bold-dark.png';
import web_development from './services/web-development.svg';
import responsive from './services/responsive.svg';
import api_integration from './services/api-integration.svg';
import performance from './services/performance.svg';

import cindefind from './project/cindefind.png';
import dashboard_ui from './project/dashboard_ui.png';
import ecommerce_ui from './project/e-commerce_ui.png';
import nikeshoes_ui from './project/nikeshoes_ui.png';

// New SVG imports
import html from './skills/html.svg';
import css from './skills/css.svg';
import javascript from './skills/javascript.svg';
import typescript from './skills/typescript.svg';
import react from './skills/react.svg';
import nextjs from './skills/nextjs.svg';
import tailwind from './skills/tailwind.svg';
import nodejs from './skills/nodejs.svg';
import mongodb_svg from './skills/mongodb.svg';
import framer_motion from './skills/framer-motion.svg';
import git_svg from './tools/git.svg';
import github from './tools/github.svg';
import vercel from './tools/vercel.svg';
import antigravity from './tools/antigravity.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    html,
    css,
    javascript,
    typescript,
    react,
    nextjs,
    tailwind,
    nodejs,
    mongodb_svg,
    framer_motion,
    git_svg,
    github,
    vercel,
    antigravity,
    web_development,
    responsive,
    api_integration,
    performance,
    cindefind,
    dashboard_ui,
    ecommerce_ui,
    nikeshoes_ui,
};

export const workData = [
    {
        title: 'CineFind Project',
        description: 'A comprehensive movie discovery platform that allows users to search for movies, view detailed information, watch trailers, and save their favorites. The application features a modern, responsive user interface with advanced filtering and sorting options to enhance the user experience. Built with the latest web technologies to ensure fast performance and seamless navigation across all devices.',
        bgImage: assets.cindefind,
        link: '',
        github: '',
        tools: [assets.vscode, assets.firebase, assets.mongodb, assets.git],
    },
    {
        title: 'Dashboard UI',
        description: 'An intuitive and visually appealing admin dashboard designed for managing complex data sets and user activities. It includes interactive charts, real-time data updates, and customizable widgets to provide key insights at a glance. The layout is fully responsive and optimized for both desktop and tablet views, making it easy for administrators to monitor performance on the go.',
        bgImage: assets.dashboard_ui,
        link: '',
        github: '',
        tools: [assets.vscode, assets.firebase, assets.mongodb, assets.git],
    },
    {
        title: 'E-Commerce Platform',
        description: 'A robust e-commerce solution featuring a secure shopping cart, user authentication, and filtered product listings. The platform supports multiple payment gateways and offers a streamlined checkout process. With a focus on user experience, the design ensures easy navigation, quick product search, and mobile compatibility for shoppers accessing the site from their smartphones.',
        bgImage: assets.ecommerce_ui,
        link: '',
        github: '',
        tools: [assets.vscode, assets.firebase, assets.mongodb, assets.git],
    },
    {
        title: 'Nike Shoes Store',
        description: 'A stylish and dynamic online store concept for Nike shoes, highlighting premium products with high-quality imagery and immersive animations. The site features a unique product configurator, allowing users to customize their shoes before purchase. The clean and modern aesthetic reflects the brand\'s identity while providing a smooth and engaging shopping journey for sneaker enthusiasts.',
        bgImage: assets.nikeshoes_ui,
        link: '',
        github: '',
        tools: [assets.vscode, assets.firebase, assets.mongodb, assets.git],
    },
]

export const serviceData = [
    { icon: assets.web_development, title: 'Web Development', description: 'Building high-performance, responsive web apps with React.js and Next.js.', link: '' },
    { icon: assets.responsive, title: 'Responsive Design', description: 'Creating adaptive, mobile-first layouts using Tailwind CSS.', link: '' },
    { icon: assets.api_integration, title: 'API Integration', description: 'Seamlessly connecting frontends with backend services and APIs.', link: '' },
    { icon: assets.performance, title: 'Performance', description: 'Optimizing speed via lazy loading and efficient code.', link: '' },
]

export const infoList = [
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Experience', description: 'Fresher' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.E. in Computer Engineering' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Projects', description: 'Built 10+ projects' }
];

export const toolsData = [
    { icon: assets.vscode, title: 'VS Code' },
    { icon: assets.git_svg, title: 'Git' },
    { icon: assets.github, title: 'GitHub', isDark: true },
    { icon: assets.vercel, title: 'Vercel', isDark: true },
    { icon: assets.antigravity, title: 'Antigravity' },
];

export const skillsData = [
    { icon: assets.html, title: 'HTML' },
    { icon: assets.css, title: 'CSS' },
    { icon: assets.javascript, title: 'JavaScript' },
    { icon: assets.typescript, title: 'TypeScript' },
    { icon: assets.react, title: 'React Js' },
    { icon: assets.nextjs, title: 'Next Js', isDark: true },
    { icon: assets.tailwind, title: 'Tailwind CSS' },
    { icon: assets.nodejs, title: 'Node Js' },
    { icon: assets.mongodb_svg, title: 'MongoDB' },
    { icon: assets.framer_motion, title: 'Framer Motion', isDark: true },
];