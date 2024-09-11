/*
"use client"
import React from 'react';
import Image from 'next/image'
import Button from '../components/Button';
import {saveAs} from "file-saver";
import {AiOutlineDownload} from "react-icons/ai";


import {TypeAnimation} from "react-type-animation"

const saveFile = () => {
    saveAs(
        "/image/cv.pdf",
        "cv.pdf"
    );
};
const HeroSection = () => {
    return (
        <section className="h-screen w-full content-center">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-12 lg:col-span-7 flex items-center">
                    <div>
                        <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                              <span
                                  className="bg-clip-text bg-gradient-to-r via-soft-red to-soft-orange from-soft-purple text-transparent">
                                Bonjour, je suis
                              </span>{" "}
                            <br/>
                            <TypeAnimation
                                sequence={[
                                    "Corentin",
                                    1000,
                                    "Développeur Web",
                                    1000,
                                    "En Recheche d'Alternance",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>
                        <p className="text-white text-lg lg:text-xl">
                            Développeur web depuis 3 ans et étudiant à Epitech Lille, je me spécialise dans la création
                            d’applications web modernes. Passionné par les technologies innovantes et les défis
                            techniques, je m’efforce de créer des solutions efficaces et adaptées aux besoins des
                            projets sur lesquels je travaille.
                        </p>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-center items-center">
                    <Image
                        src="/image/logo.png"
                        width={320}
                        height={320}
                        className=" bg-gradient-to-r via-soft-red to-soft-orange from-soft-purple rounded-full"
                        alt="Picture of the author"
                    />
                </div>
            </div>
            <div className=" grid grid-cols-5">
                <div className="text-sm text-white rounded-full transition-all duration-300 p-3 w-3/5 font-bold flex-auto">
                    <Button
                        onClick={saveFile}
                        label={
                            <>
                                Télécharger CV <AiOutlineDownload className="ml-2 "/>
                            </>
                        }
                    />
                </div>
                <p>ok</p>
            </div>
        </section>
    );
};

export default HeroSection;
*/


"use client";
import React from 'react';
import Image from 'next/image';
import Button from '../components/Button';
import { saveAs } from 'file-saver';
import { AiOutlineDownload } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Fonction pour gérer le téléchargement du CV
const saveFile = () => {
    saveAs(
        "/image/cv.pdf",
        "cv.pdf"
    );
};

const HeroSection = () => {
    return (
        <section className="h-screen w-full flex flex-col justify-center items-center py-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-7 flex flex-col justify-center lg:justify-start text-center lg:text-left">
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                        <span className="bg-clip-text bg-gradient-to-r via-soft-red to-soft-orange from-soft-purple text-transparent">
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
                    <p className="text-white text-lg lg:text-xl mb-8">
                        Développeur web depuis 3 ans et étudiant à Epitech Lille, je me spécialise dans la création
                        d’applications web modernes. Passionné par les technologies innovantes et les défis
                        techniques, je m’efforce de créer des solutions efficaces et adaptées aux besoins des
                        projets sur lesquels je travaille.
                    </p>

                    <div className="flex items-center space-x-4">
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
                                <FaGithub className="text-white text-2xl hover:text-soft-orange transition-colors duration-300" />
                            </a>
                            <a href="https://linkedin.com/in/collerycorentin" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-white text-2xl hover:text-soft-orange transition-colors duration-300" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-5 flex justify-center items-center">
                    <Image
                        src="/image/logo.png"
                        width={320}
                        height={320}
                        className="bg-gradient-to-r via-soft-red to-soft-orange from-soft-purple rounded-full"
                        alt="Logo"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;