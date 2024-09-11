/*
"use client";

import React, {useState} from 'react';
import {
    FaGithub,
    FaCss3,
    FaHtml5,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaDocker,
    FaPython,
    FaTrello,
} from 'react-icons/fa';
import {SiJavascript, SiTypescript, SiMongodb, SiPostgresql} from 'react-icons/si';

const about = {
    title: "About me",
    description: "I'm a software developer with a passion for building web applications. I have experience with a variety of technologies including React, Node.js, and Python. I'm always looking to learn new things and improve my skills.",
    info: [
        {fieldName: "Name", fieldValue: "Corentin Collery"},
        {fieldName: "Location", fieldValue: "Lille, France"},
        {fieldName: "Email", fieldValue: "corentin.collery@epitech.eu"},
        {fieldName: "Phone", fieldValue: "+33 6 37 23 38 75"},
    ]
};

const skills = {
    title: "Skills",
    description: "I have experience with a variety of technologies including React, Node.js, and Python. I'm always looking to learn new things and improve my skills.",
    skillList: [
        {name: "HTML", icon: <FaHtml5/>},
        {name: "CSS", icon: <FaCss3/>},
        {name: "JavaScript", icon: <SiJavascript/>},
        {name: "TypeScript", icon: <SiTypescript/>},
        {name: "React", icon: <FaReact/>},
        {name: "Node.js", icon: <FaNodeJs/>},
        {name: "MongoDB", icon: <SiMongodb/>},
        {name: "PostgreSQL", icon: <SiPostgresql/>},
        {name: "Docker", icon: <FaDocker/>},
        {name: "Python", icon: <FaPython/>},
        {name: "GitHub", icon: <FaGithub/>},
        {name: "Trello", icon: <FaTrello/>},
    ]
};

const projects = [
    {
        id: 1,
        title: "Projet React",
        description: "Application web avec React",
        icons: [<FaReact key="1" className="text-blue-500 text-3xl"/>,
            <FaHtml5 key="2" className="text-orange-500 text-3xl"/>, <FaGithub key="3" className="text-3xl"/>]
    },
    {
        id: 2,
        title: "Projet Node.js",
        description: "API développée avec Node.js",
        icons: [<FaNodeJs key="1" className="text-green-500 text-3xl"/>,
            <FaCss3 key="2" className="text-blue-500 text-3xl"/>]
    },
    {
        id: 3,
        title: "Projet Base de données",
        description: "Gestion de base de données",
        icons: [<FaDatabase key="1" className="text-gray-500 text-3xl"/>,
            <FaHtml5 key="2" className="text-orange-500 text-3xl"/>]
    },
    {
        id: 4,
        title: "Projet React Native",
        description: "Application mobile avec React Native",
        icons: [<FaReact key="1" className="text-blue-500 text-3xl"/>,
            <FaCss3 key="2" className="text-blue-500 text-3xl"/>]
    },
    {
        id: 5,
        title: "Projet API",
        description: "Backend en Node.js",
        icons: [<FaNodeJs key="1" className="text-green-500 text-3xl"/>,
            <FaHtml5 key="2" className="text-orange-500 text-3xl"/>]
    },
    {
        id: 6,
        title: "Projet Gestion de données",
        description: "Système de gestion de données",
        icons: [<FaDatabase key="1" className="text-gray-500 text-3xl"/>,
            <FaCss3 key="2" className="text-blue-500 text-3xl"/>]
    }
];

interface SidebarProps {
    setSection: (section: string) => void;
}

interface MainContentProps {
    section: 'projects' | 'skills' | 'about';  // Les sections possibles
}

const Sidebar: React.FC<SidebarProps> = ({setSection}) => {
    return (
        <div className="md:w-1/4 w-full flex-col items-start space-y-4 content-center">
            <h1 className="text-3xl font-bold mb-4">Pourquoi Moi ?</h1>
            <p className="mt-3">Développeur web avec 3 ans d’expérience et étudiant à Epitech Lille, je suis passionné
                par les
                technologies modernes et motivé pour apporter des solutions innovantes en alternance. Mon objectif est
                d’appliquer mes compétences techniques et d’apprendre davantage dans un environnement stimulant.</p>

            <div className="w-full flex flex-col space-y-4">
                <button
                    className="text-xl font-bold bg-soft-grey text-white px-5 py-3 rounded-lg hover:text-soft-orange transition-colors duration-300"
                    onClick={() => setSection('about')}>
                    A propos de moi
                </button>
                <button
                    className="text-xl font-bold bg-soft-grey px-5 py-3 rounded-lg hover:text-soft-orange transition-colors duration-300"
                    onClick={() => setSection('projects')}>Projets
                </button>
                <button
                    className="text-xl font-bold bg-soft-grey px-5 py-3 rounded-lg hover:text-soft-orange transition-colors duration-300"
                    onClick={() => setSection('skills')}>Skills
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
    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:gap-[30px]">
        {skills.skillList.map((skill, index) => {
            return (
                <li key={index} className="justify-center flex relative group">
                    <div
                        className="flex items-center justify-center h-32 w-32 p-4 bg-soft-grey rounded-lg text-6xl text-white-500 group-hover:text-soft-orange transition-opacity duration-300">
                        {skill.icon}
                    </div>
                    <span
                        className="z-10 absolute bottom-0 translate-y-full mb-2 px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {skill.name}
                    </span>
                </li>
            );
        })}
    </ul>
);

const ProjectsSection = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
            <div key={project.id} className="border rounded-lg p-4 shadow-lg flex flex-col items-center">
                <div className="mb-4 flex space-x-2">
                    {project.icons}
                </div>
                <p className="text-lg font-bold">{project.title}</p>
                <p>{project.description}</p>
            </div>
        ))}
    </div>
);

const MainContent: React.FC<MainContentProps> = ({ section }) => {
    switch (section) {
        case 'projects':
            return <ProjectsSection/>;
        case 'skills':
            return <SkillsSection/>;
        case 'about':
            return <AboutSection/>;
        default:
            return <AboutSection/>;
    }
};

const ProjectSection = () => {
    const [section, setSection] = useState('about');

    return (
        <section className="min-h-screen w-full content-center py-8">
            <div className="container mx-auto flex flex-col md:flex-row">
                <Sidebar setSection={setSection} />
                <div className="md:w-3/4 w-full px-4">
                    <MainContent section={section}/>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
*/
"use client";

import React, { useState } from 'react';
import {
    FaGithub, FaCss3, FaHtml5, FaReact, FaNodeJs, FaDocker, FaPython, FaTrello,
} from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiPostgresql } from 'react-icons/si';

// Données statiques
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
        title: "Projet React",
        description: "Application web avec React",
        icons: [
            <FaReact key="1" className="text-blue-500 text-3xl" />,
            <FaHtml5 key="2" className="text-orange-500 text-3xl" />,
            <FaGithub key="3" className="text-3xl" />,
        ],
    },

];

interface SidebarProps {
    setSection: (section: SectionType) => void;
}

type SectionType = 'projects' | 'skills' | 'about';

const Sidebar: React.FC<SidebarProps> = ({ setSection }) => {
    return (
        <div className="md:w-1/4 w-full flex-col items-start space-y-4 content-center">
            <h1 className="text-3xl font-bold mb-4">Pourquoi Moi ?</h1>
            <p className="mt-3">
                Développeur web avec 3 ans d’expérience et étudiant à Epitech Lille, je suis passionné par les technologies modernes et motivé pour apporter des solutions innovantes en alternance. Mon objectif est d’appliquer mes compétences techniques et d’apprendre davantage dans un environnement stimulant.
            </p>

            <div className="w-full flex flex-col space-y-4">
                <button
                    className="text-xl font-bold bg-soft-grey text-white px-5 py-3 rounded-lg hover:text-soft-orange transition-colors duration-300"
                    onClick={() => setSection('about')}
                >
                    A propos de moi
                </button>
                <button
                    className="text-xl font-bold bg-soft-grey px-5 py-3 rounded-lg hover:text-soft-orange transition-colors duration-300"
                    onClick={() => setSection('projects')}
                >
                    Projets
                </button>
                <button
                    className="text-xl font-bold bg-soft-grey px-5 py-3 rounded-lg hover:text-soft-orange transition-colors duration-300"
                    onClick={() => setSection('skills')}
                >
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
    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:gap-[30px]">
        {skills.skillList.map((skill, index) => (
            <li key={index} className="justify-center flex relative group">
                <div
                    className="flex items-center justify-center h-32 w-32 p-4 bg-soft-grey rounded-lg text-6xl text-white-500 group-hover:text-soft-orange transition-opacity duration-300"
                >
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

const ProjectsSection = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
            <div key={project.id} className="border rounded-lg p-4 shadow-lg flex flex-col items-center">
                <div className="mb-4 flex space-x-2">{project.icons}</div>
                <p className="text-lg font-bold">{project.title}</p>
                <p>{project.description}</p>
            </div>
        ))}
    </div>
);

const MainContent: React.FC<{ section: SectionType }> = ({ section }) => {
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

const ProjectSection = () => {
    const [section, setSection] = useState<SectionType>('about');

    return (
        <section className="min-h-screen w-full content-center py-8">
            <div className="container mx-auto flex flex-col md:flex-row">
                <Sidebar setSection={setSection} />
                <div className="md:w-3/4 w-full px-4">
                    <MainContent section={section} />
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
