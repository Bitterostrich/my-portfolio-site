import './herosection.scss'

const HeroSection = () => {
    return (
        <section className="projects-page-hero">
            <div className="projects-page-content__wrapper for-animations">
                <div className="project-page-content__canvas for-3D-elements">
                <div className="project-page-content__container container-1980">
                    <section className="project-page-content__headline">
                        <h2>Jemek <br/>Solicitors</h2>
                    </section>
                    <section className="project-page-content__body">
                        <div className="project-page-content__body-left">
                            <div className="project-description">
                            <p>
                                Jemek Solicitors is a rapidly growing Law firm in Birmingham UK. Initially an immigration law firm providing services for asylum seekers 
                                and refugees, the firm now specialises in Family cases, helping individuals and families get justice.
                            </p>
                            </div>

                        </div>
                        <div className="project-page-content__body-right">
                            <ul className="project-metadata">
                                <li>
                                    <h6 className="project-metadata__title">Client</h6>
                                    <p>Jemek <br/>Solicitors</p>
                                </li>
                                <li>
                                <h6 className="project-metadata__title">Techologies</h6>
                                <p>React,
                                    <br/> Next.js, <br/>TypeScript, <br/> SCSS, <br/> Framer-Motion</p>
                                </li>
                            </ul>
                            <div className="project-metadata__external-link">
                            <a href="https://www.jemeksolicitors.co.uk/home" target="_blank" rel="noopener noreferrer"> View Project</a>
                            </div>
                            
                        </div>
                    </section>
                </div>
                </div>
            </div>
        </section>
    )
}
export default HeroSection