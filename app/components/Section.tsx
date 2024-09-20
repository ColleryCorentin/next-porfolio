import React, {ReactNode} from 'react';
import {useMotionValueEvent, useScroll} from 'framer-motion';
import {useRef} from 'react';


const Section: React.FC<{
    children: ReactNode
    theme: string
    setTheme: (theme: string) => void
}> = ({theme, children, setTheme}) => {

    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ["start center", "end center"]
    });

    useMotionValueEvent(scrollYProgress, "change", (value) => {
        if (value > 0 && value < 1) {
            setTheme(theme)
        }
    });

    return <section className="h-screen w-full flex flex-col justify-center items-center py-8 " ref={container}>
        {children}
    </section>;
};

export default Section;