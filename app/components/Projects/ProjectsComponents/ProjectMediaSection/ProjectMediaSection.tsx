import '../../../../styles/ProjectScss/projectmedia.scss';
import Image from 'next/image';
import {motion, useInView} from 'framer-motion';
import React, {useRef} from 'react';
import {container, picture, itemX, itemY} from '@/app/styles/animations/globals';

interface ProjectProps {
    firstImageAlt: string,
    firstImageSrc: string,
    pictureBoardAlt: string,
    pictureBoardSrc: string
}

const ProjectMediaSection = (ProjectProps: ProjectProps) => {

    const mediaSection = useRef<HTMLElement>(null)
    const mediaSectionInView = useInView(mediaSection, {once: true, margin: '-300px'})


    const {firstImageAlt, firstImageSrc, pictureBoardAlt, pictureBoardSrc} = ProjectProps
    return (
        <section className="projects-page-media" ref={mediaSection}>
            <motion.div 
            variants={container}
            initial="hidden"
            animate={mediaSectionInView ? "visible" : "hidden"}
            exit="exit"
            className="project-page-media__container container-1500">
                <motion.div variants={picture} className="project-page-media__first-image">
                    <Image
                    alt={firstImageAlt}
                    src={firstImageSrc}
                    width={1920}
                    height={1080}
                    
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        maxWidth: '100%',
                    }}

/>
                </motion.div>
                <motion.div variants={picture} className="project-page-media__collective-image">
                    <Image
                    alt={pictureBoardAlt}
                    src={pictureBoardSrc}
                    width={1920}
                    height={2000}
                    style={{
          
                        width: '100%',
                        objectFit: 'cover',
                        height: 'auto'
                    }}
               

                    quality={90}/>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default ProjectMediaSection