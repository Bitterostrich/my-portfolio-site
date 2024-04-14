import '../../../../styles/ProjectScss/projectmedia.scss';
import Image from 'next/image';
// import { JemekFirst, JemekPictureBoard } from './imports';
import ProjectMediaSection from '../../ProjectsComponents/ProjectMediaSection/ProjectMediaSection'


const ProjectMedia = () => {
    return (
        <ProjectMediaSection 
        firstImageAlt="Image for hangman first"
        firstImageSrc="/assets/images/hangman-first.png"
        pictureBoardAlt="Image for hangman picture-board"
        pictureBoardSrc="/assets/images/hangman-picture-board.png"
        />
    )
}

export default ProjectMedia