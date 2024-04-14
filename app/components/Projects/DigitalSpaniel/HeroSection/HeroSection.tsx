import '../../../../styles/ProjectScss/herosection.scss';
import ProjectHeroSection from '../../ProjectsComponents/ProjectHeroSection/ProjectHeroSection'

const HeroSection = () => {
    return (
        <ProjectHeroSection
        title="Digital Spaniel"
        description="An example agency home page, the project was built using Next.js using the React Context API for state management. It is a landing page for a fictional Digital agency brand and is free to use/improved upon."
        technologies={['React', 'Context API', 'Next.js', 'SCSS']}
        techTitle="Technologies"
        clientTitle="Client"
        externalLink="https://digital-spaniel-eight.vercel.app/"
        />
    )
}
export default HeroSection