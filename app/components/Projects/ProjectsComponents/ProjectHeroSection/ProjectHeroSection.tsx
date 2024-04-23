import '../../../../styles/ProjectScss/herosection.scss';
import {motion, useInView} from 'framer-motion';
import React, {useRef} from 'react';
import {container, picture, itemX, itemY} from '@/app/styles/animations/globals';



interface HeroProps {
    title: string;
    description: string;
    clientTitle:string,

    techTitle: string;
    technologies: string[];
    externalLink: string;
}

const ProjectHeroSection = (HeroProps: HeroProps) => {
    const {title, description, clientTitle, technologies, techTitle, externalLink} = HeroProps

    const titleParts = title.split(' ').map((part, index) => (
        <React.Fragment key={index}>
            {index > 0 && <br />}
            {part}
            </React.Fragment>
    ))

    const clientNameParts = title.split(' ').map((part, index) => (
        <React.Fragment key={index}>
        {index > 0 && <br />}
        {part}
        </React.Fragment>
    ))

    const heroSection = useRef<HTMLElement>(null)
    const heroSectionInView = useInView(heroSection, {once: true})


    return (
        <section className="projects-page-hero" ref={heroSection}>
            <motion.div
            variants={container}
            initial="hidden"
            animate={heroSectionInView ? "visible" : "hidden"}
            exit="exit"
            className="projects-page-content__wrapper for-animations">
                <div className="project-page-content__canvas for-3D-elements">
                <div className="project-page-content__container container-1500">
                    <section className="project-page-content__headline">
                        <motion.h2 variants={itemX}>{titleParts}</motion.h2>
                    </section>
                    <section className="project-page-content__body">
                        <div className="project-page-content__body-left">
                            <div className="project-description">
                            <motion.p variants={itemX}>
                                {description}
                            </motion.p>
                            </div>

                        </div>
                        <div className="project-page-content__body-right">
                            <ul className="project-metadata">
                                <li>
                                    <motion.h6 variants={itemX} className="project-metadata__title">{clientTitle}</motion.h6>
                                    <motion.p variants={itemX}>{clientNameParts}</motion.p>
                                </li>
                                <li>
                                <motion.h6 variants={itemX} className="project-metadata__title">{techTitle}</motion.h6>
                                {technologies.map((tech, index) => (
                                     <motion.p variants={itemX} key={index}>
                                     {tech}, <br/> </motion.p>
                                ))}
                               
                                </li>
                            </ul>
                            <div className="project-metadata__external-link">
                            <motion.a variants={itemX} href={externalLink} target="_blank" rel="noopener noreferrer"> View Project</motion.a>
                            </div>
                            
                        </div>
                    </section>
                </div>
                </div>
            </motion.div>
        </section>
    )
}
export default ProjectHeroSection