import '../../../../styles/ProjectScss/projectmedia.scss';
import Image from 'next/image';
// import { JemekFirst, JemekPictureBoard } from './imports';
import ProjectMediaSection from '../../ProjectsComponents/ProjectMediaSection/ProjectMediaSection'


const ProjectMedia = () => {
    return (
        <ProjectMediaSection 
        firstImageAlt="Image for jemek solicitors first"
        firstImageSrc="/assets/images/jemek-first.png"
        pictureBoardAlt="Image for Jemek Solicitors picture-board"
        pictureBoardSrc="/assets/images/jemek-solicitors-picture-board-two.png"
        />
    )
}

export default ProjectMedia