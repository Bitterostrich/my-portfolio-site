import './projectssection.scss';
import Image from 'next/image';
import {JemekSolicitors, Hangman, DigitalSpaniel} from './imports';
import React, {useState, useRef} from 'react';
import Link from 'next/link';
import{motion, useInView, useScroll} from 'framer-motion';
import {itemX, container} from '@/app/styles/animations/globals';



const projects = [
    {
        name:"Jemek Solicitors Limited",
        category: "Web Development",
        tech: ["TypeScript", "React", "Next.JS", "Django", "CSS"],
        option: "Case Study",
        image: JemekSolicitors,
        link: "projects/jemek-solicitors-project",
    },

    {
        name:"Digital Spaniel",
        category: "Web Development",
        tech:["JavaScript", "React", "Next.JS","SCSS", "Context API"],
        option: "Case Study",
        image: DigitalSpaniel,
        link: "projects/digital-spaniel-project",
    },
    {
        name:"A Game Of Hangman",
        category: "Game/Web Development",
        option: "Case Study",
        tech:["React", "Next.JS","SCSS", "Redux", "Flask", "Supabase"],
        image: Hangman,
        link: "projects/hangman-project"
    }

]


const ProjectsSection = () => {

    const projectSection = useRef()

    const projectSectionInView = useInView(projectSection, {margin: '-300px', once: true})


    return (
        <section className="home-page-projects" ref={projectSection} id="projects">
            <motion.div 
            variants={container}
            initial="hidden"
            animate={projectSectionInView ? "visible" : "hidden"}

            className="home-page-content__wrapper">
            <div className="home-page-content__canvas">
            <div className="home-page-content__single-container container-1980">
            <section className="home-page-content__header">
                <div className="project-header">
                <motion.h2 variants={itemX}>Projects & Work</motion.h2>
                </div>
                <div className="project-text">
                    <motion.p variants={itemX}>A few projects I have been working on lately.</motion.p>
                </div>
            </section>
                <section className="home-page-content__projects">
                    {projects.map((project, index) => (
                    <div key={index} className="home-page-content__project-item-wrapper">
                    <div className="home-page-content__project-item">
                        <motion.div variants={itemX} className="home-page-content__project-item-image">
                        <Image
                        alt={`image for ${project.name}`}
                        style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover"
                                            }}
                        src={project.image}
                        className="project-image"
                        />
                        </motion.div>
                        <div className="home-page-content__project-item-wrapper">
                        <div className="home-page-content__project-item-content">
                            <motion.h3 variants={itemX}>{project.name}</motion.h3>
                            <div className="project-tech">{project.tech.map((item, index) => (
                                <motion.div variants={itemX} key={index} className="project-tech-items">
                                           <p>{item}</p>
                                </motion.div>
                         
                            ) )}</div>
                            <motion.div variants={itemX} className="home-page-content__project-item-text"><Link href={project.link} className="category">{project.category}</Link><Link href={project.link} className="option">{project.option}</Link></motion.div>
                            
                        </div>
                        </div>
                        </div>
                    </div>
                    ))}
                        </section>
                </div>
                </div>
            </motion.div>
        </section>
    )
}

export default ProjectsSection