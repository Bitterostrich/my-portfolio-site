import React from 'react';
import './skills.scss';
import {ComputerIcon, ReactIcon, DatabaseIcon, ToolIcon} from './imports'

const skills = [
    {
        title: "Software Development",
        icon: <ComputerIcon />,
        description: "Specialised in Objected-Oriented programming across JavaScript, Typescript & Python."
    },

    {
        title: "Frontend Development",
        titleTwo: "React, Next.JS, TypesScript",
        icon: <ReactIcon />,
        description: "Passionate about UX/UI leveraging Figma and Excalidraw. With over two years of experience crafting responsive user interfaces using HTML, CSS, SCSS, JavaScript, TypeScript and the React and Next.js frameworks."
    },

    {
        title: "Backend Development",
        icon: <DatabaseIcon />,
        description: "Experienced in designing robust APIs using Flask & Express.js, I excel in database solutions using MongoDB and Supabase for scalable and efficient backends."
    },

    {
        title: 'Development Tools',
        icon: <ToolIcon />,
        description: "I leverage Ubuntu for my daily tasks. I use Git for version control, and I use cPanel for hosting. I am also familiar with Vercel and can host static websites with it."
    }
]

const Skills = () => {
    return (
        <section className="home-page-skills">
            <div className="home-page-content__wrapper">
                <div className="home-page-content__canvas">
                    <div className="home-page-content__skills-container container-1980">
                        <section className="home-page-content__headline">
                            <h2>My Expertise</h2>
                        </section>
                        <section className="home-page-content__skills">
                            
                                {skills.map((item, index) => (
                                    <div key={index} className="home-page-content__skills-content">
                                     <div className="home-page-content__icon-headline">
                                        <div className="icon">
                                            {item.icon}
                                            </div>
                                        <h5>{item.title}</h5>
                                     </div>
                                     <div className="home-page-content__text">
                                        <p>{item.description}</p>
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

export default Skills