import '../../../../styles/ProjectScss/projectmedia.scss';
import Image from 'next/image';
// import { JemekFirst, JemekPictureBoard } from './imports';
import ProjectMediaSection from '../../ProjectsComponents/ProjectMediaSection/ProjectMediaSection'


const ProjectMedia = () => {
    return (
        <ProjectMediaSection 
        firstImageAlt="Image for Digital Spaniel First"
        firstImageSrc="/assets/images/digitalspaniel-first.png"
        pictureBoardAlt="Image for Digital Spaniel picture-board"
        pictureBoardSrc="/assets/images/digital-spaniel-picture-board.png"
        />
    )
}

export default ProjectMedia