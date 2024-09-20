
"use client";

import { useState, useEffect } from "react";
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';

export default function Home() {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <main className={"min-h-screen flex-col container mx-auto px-12 " + `${theme}`}>
            <HeroSection theme={theme} setTheme={setTheme}/>
            <ProjectSection theme={theme} setTheme={setTheme} />
            <ContactSection theme={theme} setTheme={setTheme} />
        </main>
    );
}