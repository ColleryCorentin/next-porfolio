"use client";
import React, { useState } from 'react';

import {FaGithub, FaCss3, FaHtml5, FaReact, FaNodeJs, FaDocker, FaPython, FaTrello, FaPhp} from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiPostgresql } from 'react-icons/si';
import Section from "@/app/components/Section";

const about = {
    title: "About me",
    description: "Tout savoir sur moi : ",
    info: [
        { fieldName: "Name", fieldValue: "Corentin Collery" },
        { fieldName: "Location", fieldValue: "Lille, France" },
        { fieldName: "Email", fieldValue: "corentin.collery@epitech.eu" },
        { fieldName: "Phone", fieldValue: "+33 6 37 23 38 75" },
    ],
};

const skills = {
    title: "Skills",
    description: "I have experience with a variety of technologies including React, Node.js, and Python. I'm always looking to learn new things and improve my skills.",
    skillList: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Python", icon: <FaPython /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Trello", icon: <FaTrello /> },
    ],
};

const projects = [
    {
        id: 1,
        title: "Tweet-Academy",
        description: "Le but de ce projet est de créer un réseau social qui aura les mêmes fonctionnalités que twitter. Il devra être le plus ressemblant possible en terme de fonctionnalités par rapport au site “Twitter”.",
        icons: [
            <FaPhp key="1" className="text-blue-500 text-3xl" />,
            <FaHtml5 key="2" className="text-orange-500 text-3xl" />,
            <FaCss3 key="3" className="text-blue-500 text-3xl" />,
        ],

        link: `https://github.com/ColleryCorentin/Tweet_Academy`,
    },
    {
        id: 2,
        title: "Terminal_CV",
        description: "Mon CV en ligne utilisant HTML | CSS | Javascript",
        icons: [
            <FaHtml5 key="1" className="text-orange-500 text-3xl" />,
            <FaCss3 key="2" className="text-blue-500 text-3xl" />,
            <SiJavascript key="3" className="text-yellow-500 text-3xl" />,

        ],
        link: `https://github.com/ColleryCorentin/TERMINAL_CV`,
    },
    {
        id: 3,
        title: "MySpotify",
        description: "Ce projet utilise React Native pour créer une application permettant d'explorer et d'interagir avec Spotify. En outre, il intègre l'API de Spotify ainsi que celle de Ticketmaster pour trouver des concerts à proximité de la localisation de l'utilisateur.",
        icons: [
            <FaReact key="1" className="text-blue-500 text-3xl" />,
            <FaHtml5 key="2" className="text-orange-500 text-3xl" />,
            <FaGithub key="3" className="text-3xl" />,
        ],
        link: `https://github.com/ColleryCorentin/spotify_expo`,
    },
];

const handleRedirect = (url?: string) => {
    if (url) {
        window.open(url, '_blank');
    } else {
        console.error('URL is undefined');
    }
};

interface SidebarProps {
    setSection: (section: SectionType) => void;
}

type SectionType = 'projects' | 'skills' | 'about';

const Sidebar: React.FC<SidebarProps> = ({ setSection }) => {
    return (
        <div className="sm:w-1/2 md:w-full flex-col items-start space-y-4 content-center">
            <h1 className="text-3xl font-bold mb-4 dark:text-white">Pourquoi Moi ?</h1>
            <p className="mt-3 dark:text-white text-black">
                Développeur web avec 3 ans d’expérience et étudiant à Epitech Lille, je suis passionné par les technologies modernes et motivé pour apporter des solutions innovantes en alternance. Mon objectif est d’appliquer mes compétences techniques et d’apprendre davantage dans un environnement stimulant.
            </p>

            <div className="w-full flex flex-col lg:w-1/2 space-y-4">
                <button
                    className="text-xl font-bold dark:bg-soft-grey dark:text-white px-5 py-3 rounded-lg dark:hover:text-soft-orange text-white bg-soft-grey transition-colors hover:text-soft-orange duration-300"
                    onClick={() => setSection('about')}>
                    A propos de moi
                </button>
                <button
                    className="text-xl font-bold dark:bg-soft-grey dark:text-white px-5 py-3 rounded-lg dark:hover:text-soft-orange text-white bg-soft-grey transition-colors hover:text-soft-orange duration-300"
                    onClick={() => setSection('projects')}>
                    Projets
                </button>
                <button
                    className="text-xl font-bold dark:bg-soft-grey dark:text-white px-5 py-3 rounded-lg dark:hover:text-soft-orange text-white bg-soft-grey transition-colors hover:text-soft-orange duration-300"
                    onClick={() => setSection('skills')}>
                    Skills
                </button>
            </div>
        </div>
    );
};

const AboutSection = () => (
    <div>
        <h2 className="text-3xl font-bold mb-4">{about.title}</h2>
        <p>{about.description}</p>
        <ul className="mt-4">
            {about.info.map((item, index) => (
                <li key={index} className="mt-2">
                    <strong>{item.fieldName}:</strong> {item.fieldValue}
                </li>
            ))}
        </ul>
    </div>
);

const SkillsSection = () => (
    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:gap-[30px] gap-4 h-96 overflow-y-auto scrollbar scrollbar-thumb-soft-orange scrollbar-track-transparent  lg:overflow-visible">
        {skills.skillList.map((skill, index) => (
            <li key={index} className="justify-center flex relative group">
                <div
                    className="flex items-center justify-center h-32 w-32 p-4 bg-white dark:bg-soft-grey rounded-lg text-6xl text-soft-grey dark:text-white group-hover:text-soft-orange transition-opacity duration-300 mt-5 lg:mt-0">
                    {skill.icon}
                </div>
                <span
                    className="z-10 absolute bottom-0 translate-y-full mb-2 px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
            {skill.name}
        </span>
            </li>
        ))}
    </ul>
);

const ProjectsSection = () => {
    return (
        <div
            className="grid grid-cols-1 gap-4 overflow-y-auto  h-96 scrollbar scrollbar-thumb-soft-orange scrollbar-track-transparent group-hover:text-soft-orange transition-opacity duration-300 mt-5 ">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className=" rounded-lg p-4  flex dark:bg-soft-grey flex-col items-center cursor-pointer "
                    onClick={() => handleRedirect(project.link)}>
                    <div className="mb-4 flex space-x-2">{project.icons}</div>
                    <p className="text-lg font-bold  dark:text-white text-black">{project.title}</p>
                    <p className="text-black dark:text-white">{project.description}</p>
                </div>
            ))}
        </div>
    );
};

const MainContent: React.FC<{ section: SectionType }> = ({section}) => {
    switch (section) {
        case 'projects':
            return <ProjectsSection />;
        case 'skills':
            return <SkillsSection />;
        case 'about':
            return <AboutSection />;
        default:
            return <AboutSection />;
    }
};

interface ProjectSectionProps {
    theme: string;
    setTheme: (theme: string) => void;
}

const ProjectSection = ({  setTheme }: ProjectSectionProps) => {
    const [section, setSection] = useState<SectionType>('about');
    return (
        <Section theme='light' setTheme={setTheme}>
            <div className="container mx-auto flex flex-col md:flex-row dark:bg-black">
                <Sidebar setSection={setSection} />
                <div className="md:w-3/4 w-full px-4 mt-5 md:mt-0 ">
                    <MainContent section={section} />
                </div>
            </div>
        </Section>
    );
};

export default ProjectSection;
