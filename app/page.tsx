import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';

export default function Home() {
    return (
        <main className="bg-black min-h-screen flex-col container mx-auto  px-12">
            <HeroSection/>
            <ProjectSection/>
        </main>
    );
}
