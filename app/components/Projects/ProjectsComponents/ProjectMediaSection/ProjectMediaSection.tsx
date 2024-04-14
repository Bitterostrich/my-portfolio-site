import '../../../../styles/ProjectScss/projectmedia.scss';
import Image from 'next/image';
// import { JemekFirst, JemekPictureBoard } from './imports';

interface ProjectProps {
    firstImageAlt: string,
    firstImageSrc: string,
    pictureBoardAlt: string,
    pictureBoardSrc: string
}

const ProjectMediaSection = (ProjectProps: ProjectProps) => {
    const {firstImageAlt, firstImageSrc, pictureBoardAlt, pictureBoardSrc} = ProjectProps
    return (
        <section className="projects-page-media">
            <div className="project-page-media__container container-1500">
                <div className="project-page-media__first-image">
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
                </div>
                <div className="project-page-media__collective-image">
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
                </div>
            </div>
        </section>
    )
}

export default ProjectMediaSection