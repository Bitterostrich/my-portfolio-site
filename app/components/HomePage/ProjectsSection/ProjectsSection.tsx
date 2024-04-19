import './projectssection.scss';
import Image from 'next/image';
import {JemekSolicitors, Hangman, DigitalSpaniel} from './imports';
import React, {useState} from 'react';
import Link from 'next/link';


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
    return (
        <section className="home-page-projects" id="projects">
            <div className="home-page-content__wrapper">
            <div className="home-page-content__canvas">
            <div className="home-page-content__single-container container-1980">
            <section className="home-page-content__header">
                <div className="project-header">
                <h2>Projects & Work</h2>
                </div>
                <div className="project-text">
                    <p>A few projects I have been working on lately.</p>
                </div>
            </section>
                <section className="home-page-content__projects">
                    {projects.map((project, index) => (
                    <div key={index} className="home-page-content__project-item-wrapper">
                    <div className="home-page-content__project-item">
                        <div className="home-page-content__project-item-image">
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
                        </div>
                        <div className="home-page-content__project-item-wrapper">
                        <div className="home-page-content__project-item-content">
                            <h3>{project.name}</h3>
                            <div className="project-tech">{project.tech.map((item, index) => (
                                <div key={index} className="project-tech-items">
                                           <p>{item}</p>
                                </div>
                         
                            ) )}</div>
                            <div className="home-page-content__project-item-text"><Link href={project.link} className="category">{project.category}</Link><Link href={project.link} className="option">{project.option}</Link></div>
                            
                        </div>
                        </div>
                        </div>
                    </div>
                    ))}
                        </section>
                </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection