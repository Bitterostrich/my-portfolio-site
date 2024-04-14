import '../../../../styles/ProjectScss/herosection.scss';
import ProjectHeroSection from '../../ProjectsComponents/ProjectHeroSection/ProjectHeroSection'

const HeroSection = () => {
    return (

        <ProjectHeroSection
        title="Jemek Solicitors"
        description="Jemek Solicitors is a rapidly growing Law firm in Birmingham UK. Initially an immigration law firm providing services for asylum seekers 
        and refugees, the firm now specialises in Family cases, helping individuals and families get justice."
        technologies={['React', 'TypeScript', 'Next.js', 'Framer-Motion', 'SCSS']}
        techTitle="Technologies"
        clientTitle="Client"
        externalLink="https://www.jemeksolicitors.co.uk/home"
        />

    )
}
export default HeroSection