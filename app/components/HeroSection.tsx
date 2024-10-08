"use client";
import React from 'react';
import Image from 'next/image';
import Button from '../components/Button';
import { saveAs } from 'file-saver';
import { AiOutlineDownload } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Section from "../../app/components/Section";

interface HeroSectionProps {
    theme: string;
    setTheme: (theme: string) => void;
}

const saveFile = () => {
    saveAs("/image/cv.pdf", "cv.pdf");
};

const HeroSection = ({  setTheme }: HeroSectionProps) => {
    return (
        <Section theme={"light"} setTheme={setTheme}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div
                    className="col-span-12 lg:col-span-7 flex flex-col justify-center lg:justify-start text-center lg:text-left">
                    <h1 className="dark:text-white text-black mb-4 text-4xl lg:text-6xl font-extrabold">
                        <span
                            className="bg-clip-text dark:bg-gradient-to-r dark:via-soft-red dark:to-soft-orange dark:from-soft-purple dark:text-transparent">
                            Bonjour, je suis
                        </span>{" "}
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Corentin",
                                1000,
                                "Développeur Web",
                                1000,
                                "En Recherche d'Alternance",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="dark:text-white text-black text-lg lg:text-xl mb-8">
                        Développeur web depuis 3 ans et étudiant à Epitech Lille, je me spécialise dans la création
                        d’applications web modernes. Passionné par les technologies innovantes et les défis
                        techniques, je m’efforce de créer des solutions efficaces et adaptées aux besoins des
                        projets sur lesquels je travaille.
                    </p>

                    <div className="flex items-center space-x-4 mt-4">
                        <Button
                            onClick={saveFile}
                            label={
                                <>
                                    Télécharger CV <AiOutlineDownload className="ml-2" />
                                </>
                            }
                        />
                        <div className="flex space-x-4">
                            <a href="https://github.com/collerycorentin" target="_blank" rel="noopener noreferrer">
                                <FaGithub
                                    className="dark:text-white text-black text-2xl hover:text-soft-orange transition-colors duration-300" />
                            </a>
                            <a href="https://linkedin.com/in/collerycorentin" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin
                                    className="dark:text-white text-black text-2xl hover:text-soft-orange transition-colors duration-300" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-5 flex justify-center items-center">
                    <Image
                        src="/image/logo.png"
                        width={320}
                        height={320}
                        className="dark:bg-gradient-to-r dark:via-soft-red dark:to-soft-orange dark:from-soft-purple rounded-full"
                        alt="Logo"
                    />
                </div>
            </div>
        </Section>
    );
};

export default HeroSection;