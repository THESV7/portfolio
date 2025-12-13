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
    antigravity
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, React.js, Next.js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.E. in Computer Engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built 10+ projects' }
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