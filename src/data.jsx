import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen, FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
    {
        id: 1,
        name: "Home",
        icon: <FaHome className="nav__icon" />,
        path: "/",
    },

    {
        id: 2,
        name: "About",
        icon: <FaUser className="nav__icon" />,
        path: "/about",
    },

    {
        id: 3,
        name: "Portfolio",
        icon: <FaFolderOpen className="nav__icon" />,
        path: "/portfolio",
    },

    {
        id: 4,
        name: "Contact",
        icon: <FaEnvelopeOpen className="nav__icon" />,
        path: "/contact",
    },
];

export const personalInfo = [
    {
        id: 1,
        title: "First Name : ",
        description: "Denzel",
    },

    {
        id: 2,
        title: "Last Name : ",
        description: "Napili",
    },

    {
        id: 3,
        title: "Age : ",
        description: "20 Years",
    },

    {
        id: 4,
        title: "Nationality : ",
        description: "Filipino",
    },

    {
        id: 5,
        title: "Freelance : ",
        description: "Available",
    },

    {
        id: 6,
        title: "Address : ",
        description: "Albay, Philippines",
    },

    {
        id: 7,
        title: "Phone : ",
        description: "+639280004689",
    },

    {
        id: 8,
        title: "Email : ",
        description: "161141denzel@gmail.com",
    },

    {
        id: 9,
        title: "Skype : ",
        description: "denzel.napili",
    },

    {
        id: 10,
        title: "Languages : ",
        description: "English, Filipino",
    },
];

export const stats = [
    {
        id: 1,
        no: "2",
        title: "Years <br /> Web Development",
    },

    {
        id: 2,
        no: "1",
        title: "Year <br /> UI/UX Designer",
    },

    {
        id: 3,
        no: "7+",
        title: "Years <br /> Video Editor",
    },

    {
        id: 4,
        no: "10",
        title: " Satisfied <br /> Clients",
    },
];

export const resume = [
    {
        id: 1,
        category: "experience",
        icon: <FaBriefcase />,
        year: "2022 - Present",
        title: "UI/UX Designer <span> Freelance </span>",
        desc: "College introduced me to UI/UX designing, and it inspired my passion for creating visually stunning and functional digital experiences that perfectly cater to the needs of the audience.",
    },

    {
        id: 2,
        category: "experience",
        icon: <FaBriefcase />,
        year: "2021 - Present",
        title: "Web Developer <span> Freelance </span>",
        desc: "I discovered web development in my first year of college, and what started as a hobby has grown into a love for crafting visually appealing and functional websites.",
    },

    {
        id: 3,
        category: "experience",
        icon: <FaBriefcase />,
        year: "2020 - Present",
        title: "Wi-Fi Outdoor Antenna Installation <span> Freelance </span>",
        desc: "Poor signal at home prompted me to install outdoor antennas for personal use. Interest from others turned it into a pandemic-era business that's still thriving today.",
    },

    {
        id: 4,
        category: "experience",
        icon: <FaBriefcase />,
        year: "2016 - Present",
        title: "Video Editor <span> Freelance </span>",
        desc: "Video editing has been my passion since High School, and I was given the chance to showcase my skills when I was entrusted with the task of creating and editing our school's Virtual Graduation in Senior High.",
    },

    {
        id: 5,
        category: "education",
        icon: <FaGraduationCap />,
        year: "2021 - Present",
        title: "Bachelor Degree <span> Bicol University </span>",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore",
    },

    {
        id: 6,
        category: "education",
        icon: <FaGraduationCap />,
        year: "2019 - 2021",
        title: "Senior High School <span> Camalig National High School </span>",
        desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
    },

    {
        id: 7,
        category: "education",
        icon: <FaGraduationCap />,
        year: "2015 - 2019",
        title: "Junior High School <span> Cotmon National High School </span>",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore",
    },

    {
        id: 8,
        category: "education",
        icon: <FaGraduationCap />,
        year: "2009 - 2015",
        title: "Elementary <span> Maninila Elementary School </span>",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore",
    },
];

export const skills = [
    {
        id: 1,
        title: "HTML",
        percentage: "50",
    },

    {
        id: 2,
        title: "JavaScript",
        percentage: "60",
    },

    {
        id: 3,
        title: "CSS",
        percentage: "70",
    },

    {
        id: 4,
        title: "PHP",
        percentage: "30",
    },

    {
        id: 5,
        title: "JQuery",
        percentage: "40",
    },

    {
        id: 6,
        title: "C",
        percentage: "60",
    },

    {
        id: 7,
        title: "ReactJS",
        percentage: "45",
    },

    {
        id: 8,
        title: "Java",
        percentage: "50",
    },
];

export const portfolio = [
    {
        id: 1,
        img: Work1,
        title: "Photo Editing",
        details: [
            {
                icon: <FiFileText />,
                title: "Project : ",
                desc: "Photo",
            },
            {
                icon: <FiUser />,
                title: "Client : ",
                desc: "Dribble",
            },
            {
                icon: <FaCode />,
                title: "Language : ",
                desc: "Adobe Photoshop",
            },
            {
                icon: <FiExternalLink />,
                title: "Preview : ",
                desc: "www.dribble.com",
            },
        ],
    },

    {
        id: 2,
        img: Work2,
        title: "Website Design",
        details: [
            {
                icon: <FiFileText />,
                title: "Project : ",
                desc: "Website",
            },
            {
                icon: <FiUser />,
                title: "Client : ",
                desc: "Dribble",
            },
            {
                icon: <FaCode />,
                title: "Language : ",
                desc: "React JS",
            },
            {
                icon: <FiExternalLink />,
                title: "Preview : ",
                desc: "www.dribble.com",
            },
        ],
    },

    {
        id: 3,
        img: Work3,
        title: "Video Editing",
        details: [
            {
                icon: <FiFileText />,
                title: "Project : ",
                desc: "Video",
            },
            {
                icon: <FiUser />,
                title: "Client : ",
                desc: "Dribble",
            },
            {
                icon: <FaCode />,
                title: "Language : ",
                desc: "Adobe Premium",
            },
            {
                icon: <FiExternalLink />,
                title: "Preview : ",
                desc: "www.dribble.com",
            },
        ],
    },

    {
        id: 4,
        img: Work4,
        title: "Video Editing",
        details: [
            {
                icon: <FiFileText />,
                title: "Project : ",
                desc: "Video",
            },
            {
                icon: <FiUser />,
                title: "Client : ",
                desc: "Dribble",
            },
            {
                icon: <FaCode />,
                title: "Language : ",
                desc: "Adobe Premium",
            },
            {
                icon: <FiExternalLink />,
                title: "Preview : ",
                desc: "www.dribble.com",
            },
        ],
    },

    {
        id: 5,
        img: Work5,
        title: "Landing Page",
        details: [
            {
                title: "Project : ",
                desc: "Website",
            },
            {
                title: "Client : ",
                desc: "Dribble",
            },
            {
                title: "Language : ",
                desc: "React JS, Node JS",
            },
            {
                title: "Preview : ",
                desc: "www.dribble.com",
            },
        ],
    },

    {
        id: 6,
        img: Work6,
        title: "Photo Editing",
        details: [
            {
                icon: <FiFileText />,
                title: "Project : ",
                desc: "Photo",
            },
            {
                icon: <FiUser />,
                title: "Client : ",
                desc: "Dribble",
            },
            {
                icon: <FaCode />,
                title: "Language : ",
                desc: "Adobe Photoshop",
            },
            {
                icon: <FiExternalLink />,
                title: "Preview : ",
                desc: "www.dibble.com",
            },
        ],
    },
];

export const themes = [
    {
        id: 1,
        img: Theme1,
        color: "hsl(252, 35%, 51%)",
    },

    {
        id: 2,
        img: Theme2,
        color: "hsl(4, 93%, 54%)",
    },

    {
        id: 3,
        img: Theme3,
        color: "hsl(271, 76%, 53%)",
    },

    {
        id: 4,
        img: Theme4,
        color: "hsl(225, 73%, 57%)",
    },

    {
        id: 5,
        img: Theme5,
        color: "hsl(43, 74%, 49%)",
    },

    {
        id: 6,
        img: Theme6,
        color: "hsl(339, 81%, 66%)",
    },

    {
        id: 7,
        img: Theme7,
        color: "hsl(80, 61%, 50%)",
    },

    {
        id: 8,
        img: Theme8,
        color: "hsl(19, 96%, 52%)",
    },

    {
        id: 9,
        img: Theme9,
        color: "hsl(88, 65%, 43%)",
    },

    {
        id: 10,
        img: Theme10,
        color: "hsl(42, 100%, 50%)",
    },
];
