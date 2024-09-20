"use client";

import React, { useState } from 'react';
import Section from "@/app/components/Section";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    company: string;
    message: string;
}

interface ContactSectionProps {
    theme: string;
    setTheme: (theme: string) => void;
}

const ContactSection = ({  setTheme }: ContactSectionProps) => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Une erreur est survenue lors de l\'envoi du message.');
            }
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
            }, 3000);
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return (
        <Section theme={"light"} setTheme={setTheme}>
            <h1 className="text-white text-4xl lg:text-6xl font-extrabold text-center mb-5">
                <span
                    className="bg-clip-text dark:bg-gradient-to-r dark:via-soft-red dark:to-soft-orange dark:from-soft-purple dark:text-transparent text-black">
                    Me contacter
                </span>{" "}
            </h1>

            <form className="max-w-md mx-auto pt-5" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-soft-orange focus:outline-none focus:ring-0 focus:border-soft-orange peer"
                            placeholder=" "
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="firstName"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-soft-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Prénom
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-soft-orange focus:outline-none focus:ring-0 focus:border-soft-orange peer"
                            placeholder=" "
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="lastName"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-soft-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Nom
                        </label>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-soft-orange focus:outline-none focus:ring-0 focus:border-soft-orange peer"
                        placeholder=" "
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="email"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-soft-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Adresse email
                    </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="tel"
                            pattern="^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$"
                            name="phone"
                            id="phone"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-soft-orange focus:outline-none focus:ring-0 focus:border-soft-orange peer"
                            placeholder=" "
                            value={formData.phone || ''}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="phone"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-soft-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Numéro de téléphone (01 23 45 67 89)
                        </label>
                    </div>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="company"
                        id="company"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-soft-orange focus:outline-none focus:ring-0 focus:border-soft-orange peer"
                        placeholder=" "
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="company"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-soft-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Entreprise
                    </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
            <textarea
                name="message"
                id="message"
                rows={4}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-soft-orange focus:outline-none focus:ring-0 focus:border-soft-orange peer"
                placeholder=" "
                value={formData.message}
                onChange={handleInputChange}
                required
            />
                    <label htmlFor="message"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-soft-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Message
                    </label>
                </div>
                <button
                    type="submit"
                    className="text-white hover:text-soft-orange focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-soft-grey duration-300"
                >
                    Soumettre
                </button>

                {error && <p className="text-red-500">{error}</p>}
            </form>

            {isSubmitted && (
                <div
                    className="fixed top-5 right-5 z-50 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                    role="alert">
                    <div
                        className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-soft-orange rounded-lg dark:text-soft-orange">
                        <svg className="w-5 h-5 text-soft-orange rotate-45" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
                        </svg>
                        <span className="sr-only">Fire icon</span>
                    </div>
                    <div className="ms-3 text-sm font-normal">Message envoyé avec succès</div>
                </div>
            )}
        </Section>
    );
};

export default ContactSection;