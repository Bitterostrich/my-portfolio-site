import React from 'react';
import './skills.scss';
import {ComputerIcon, ReactIcon, DatabaseIcon, ToolIcon} from './imports'

const skills = [
    {
        title: "Software Development",
        icon: <ComputerIcon />,
        description: "Specialised in Objected-Oriented programming using JavaScript, Typescript & Python."
    },

    {
        title: "Frontend Development: React, Redux/Context API for state management, Next.js, TypeScript",
        icon: <ReactIcon />,
        description: "Increasingly Passionate about creating engaging user interfaces leveraging Figma and Excalidraw. With over two years experience in HTML, CSS, SCSS, JavaScript and the React and Next.js frameworks."
    },

    {
        title: "Backend: MongoDB, Supabase",
        icon: <DatabaseIcon />,
        description: "Experienced in designing robust APIs using Flask & Express.js. I am also experienced in database management, building scalable and maintainable user solutions."
    },

    {
        title: 'Tools: Github, Visual Studio Code, cPanel, Vercel',
        icon: <ToolIcon />,
        description: ""
    }
]

const Skills = () => {
    return (
        <section className="home-page-skills">
            <div className="home-page-content__wrapper">
                <div className="home-page-content__canvas">
                    <div className="home-page-content__skills-container container-1980">
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
                                        {item.description}
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