"use client"
import React, {useState, useEffect, useRef} from 'react';
import './skills.scss';
import {ComputerIcon, ReactIcon, DatabaseIcon, ToolIcon} from './imports'
import{motion, useInView, useScroll} from 'framer-motion';
import {itemY, container} from '@/app/styles/animations/globals'


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

    const skillsRef = useRef<HTMLElement>(null)
    const skillsRefInView = useInView(skillsRef, {margin: "-100px", once: true})
    console.log(skillsRefInView)
    console.log(skillsRef)

    return (
        <section className="home-page-skills" ref={skillsRef}>
            <motion.div 
            variants={container}
            initial="hidden"
            animate={skillsRefInView ? "visible": "hidden"}
            className="home-page-content__wrapper">
                <div className="home-page-content__canvas">
                    <div className="home-page-content__skills-container container-1980">
                        <motion.section variants={itemY} className="home-page-content__headline">
                            <motion.h2 >My Expertise</motion.h2>
                        </motion.section>
                        <section className="home-page-content__skills">
                            
                                {skills.map((skill, index) => (
                                    <div key={index} className="home-page-content__skills-content">
                                     <motion.div variants={itemY} className="home-page-content__icon-headline">
                                        <div  className="icon">
                                            {skill.icon}
                                            </div>
                                        <h5>{skill.title}</h5>
                                     </motion.div>
                                     <motion.div variants={itemY} className="home-page-content__text">
                                        <p>{skill.description}</p>
                                     </motion.div>
                                     </div>
                                ))}
                               
                     
                        </section>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Skills