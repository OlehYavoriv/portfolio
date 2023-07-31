import { FaHtml5, FaCss3, FaSass, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaNpm, FaYarn, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiRedux, SiPostgresql } from 'react-icons/si';
import { TbBrandNextjs, TbApi } from 'react-icons/tb';

export const aboutData = [
    {
        title: "skills",
        info: [
            {
                title: "Markup and Styling Languages:",
                icons: [
                    {
                        name: "HTML 5",
                        iconLink: <FaHtml5/>,
                    },
                    {
                        name: "CSS 3",
                        iconLink: <FaCss3/>,
                    },
                    {
                        name: "Sass",
                        iconLink: <FaSass/>,
                    },
                ],
            },
            {
                title: "Programming Languages:",
                icons: [
                    {
                        name: "Javascript",
                        iconLink: <SiJavascript/>,
                    },
                    {
                        name: "Typescript",
                        iconLink: <SiTypescript/>,
                    },
                ],
            },
            {
                title: "Frameworks and Libraries:",
                icons: [
                    {
                        name: "React",
                        iconLink: <FaReact/>,
                    },
                    {
                        name: "Redux",
                        iconLink: <SiRedux/>,
                    },
                    {
                        name: "Next.js",
                        iconLink: <TbBrandNextjs/>,
                    }
                ],
            },
            {
                title: "Databases:",
                icons: [
                    {
                        name: "PostgreSQL",
                        iconLink: <SiPostgresql/>,
                    }
                ],
            },
            {
                title: "Other:",
                icons: [
                    {
                        name: "Node.js",
                        iconLink: <FaNodeJs/>,
                    },
                    {
                        name: "Rest APIs",
                        iconLink: <TbApi/>,
                    },
                    {
                        name: "Git",
                        iconLink: <FaGitAlt/>,
                    },
                    {
                        name: "GitHub",
                        iconLink: <FaGithub/>,
                    },
                    {
                        name: "Figma",
                        iconLink: <FaFigma/>,
                    },
                    {
                        name: "Npm",
                        iconLink: <FaNpm/>,
                    },
                    {
                        name: "Yarn",
                        iconLink: <FaYarn/>,
                    },
                ],
            },
        ],
    },
    {
        title: "education",
        info: [
            {
                title: "Lviv Polytechnic National University - Computer science:",
                stage: "September 2020 - up to now",
            },
        ],
    },
    {
        title: "courses",
        info: [
            {
                title: "Eleks | Educational practice Front-end (React-TypeScript):",
                stage: "June 2023",
            },
            {
                title: "Intellias | IntelliStart Front-end (React):",
                stage: "November 2021 – March 2022",
            },
            {
                title: "Logos IT Acedemy | Basics of web development:",
                stage: "June 2021 – July 2021",
            },
            {
                title: "Cisco | Safer Internet Day:",
                stage: "February 2019",
            }
        ],
    },
    {
        title: "additional information",
        info: [
            {
                title: "InterLogic | Hackathon 2021 (3rd place)",
            },
            {
                title: "LPNU | BEST::HACKath0n 2021",
            },
        ],
    },
];
