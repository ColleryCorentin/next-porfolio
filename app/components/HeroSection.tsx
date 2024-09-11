"use client"
import React from 'react';
import Image from 'next/image'
import Button from '../components/Button';
import { saveAs } from "file-saver";


import {TypeAnimation} from "react-type-animation"

const saveFile = () => {
    saveAs(
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "cv.pdf"
    );
};
const HeroSection = () => {
    // @ts-ignore
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
            <div className=" text-white rounded-full transition-all duration-300 p-3">
                <Button onClick={saveFile} label="Télécharger mon CV"/>
            </div>
        </section>
    );
};

export default HeroSection;
