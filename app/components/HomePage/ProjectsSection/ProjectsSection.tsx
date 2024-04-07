import './projectssection.scss';
import Image from 'next/image';
import {JemekSolicitors, Hangman, DigitalSpaniel} from './imports';
import React, {useState} from 'react'

const projects = [
    {
        name:"Jemek Solicitors Limited",
        category: "Web Development",
        tech: ["TypeScript", "React", "Next.JS", "Django", "CSS"],
        option: "Case Study",
        image: JemekSolicitors,
    },

    {
        name:"Digital Spaniel",
        category: "Web Development",
        tech:["JavaScript", "React", "Next.JS","SCSS", "Context API"],
        option: "Case Study",
        image: DigitalSpaniel,
    },
    {
        name:"A Game Of Hangman",
        category: "Game/Web Development",
        option: "Case Study",
        tech:["React", "Next.JS","SCSS", "Redux", "Flask", "Supabase"],
        image: Hangman,
    }

]


const ProjectsSection = () => {
    return (
        <section className="home-page-projects">
            <div className="home-page-content__wrapper">
            <div className="home-page-content__canvas">
            <div className="home-page-content__single-container container-1980">
            <section className="home-page-content__header">
                <div className="header">
                <h2>My Work</h2>
                </div>
                <div className="text">
                    <p>A few projects I have worked on over the years </p>
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
                                <p>{item}</p>
                            ) )}</div>
                            <div className="home-page-content__project-item-text"><p className="category">{project.category}</p><p className="option">{project.option}</p></div>
                            
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