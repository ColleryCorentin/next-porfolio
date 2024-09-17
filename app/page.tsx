import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';

export default function Home() {
    return (
        <main className="bg-light-bg dark:bg-black min-h-screen flex-col container mx-auto px-12 text-light-text dark:text-white">
            <HeroSection/>
            <ProjectSection/>
            <ContactSection/>
        </main>
    );
}