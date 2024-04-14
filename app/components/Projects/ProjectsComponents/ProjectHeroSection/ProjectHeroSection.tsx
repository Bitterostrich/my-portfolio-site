import '../../../../styles/ProjectScss/herosection.scss';

import React from 'react'
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

    return (
        <section className="projects-page-hero">
            <div className="projects-page-content__wrapper for-animations">
                <div className="project-page-content__canvas for-3D-elements">
                <div className="project-page-content__container container-1500">
                    <section className="project-page-content__headline">
                        <h2>{titleParts}</h2>
                    </section>
                    <section className="project-page-content__body">
                        <div className="project-page-content__body-left">
                            <div className="project-description">
                            <p>
                                {description}
                            </p>
                            </div>

                        </div>
                        <div className="project-page-content__body-right">
                            <ul className="project-metadata">
                                <li>
                                    <h6 className="project-metadata__title">{clientTitle}</h6>
                                    <p>{clientNameParts}</p>
                                </li>
                                <li>
                                <h6 className="project-metadata__title">{techTitle}</h6>
                                {technologies.map((tech, index) => (
                                     <p key={index}>
                                     {tech}, <br/> </p>
                                ))}
                               
                                </li>
                            </ul>
                            <div className="project-metadata__external-link">
                            <a href={externalLink} target="_blank" rel="noopener noreferrer"> View Project</a>
                            </div>
                            
                        </div>
                    </section>
                </div>
                </div>
            </div>
        </section>
    )
}
export default ProjectHeroSection