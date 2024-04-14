import '../../../../styles/ProjectScss/herosection.scss';
import ProjectHeroSection from '../../ProjectsComponents/ProjectHeroSection/ProjectHeroSection'

const HeroSection = () => {
    return (

        <ProjectHeroSection
        title="Hangman Game"
        description="A game of hangman with a twist. The player must guess a word to save the man who happens to find himself on a tree."
        technologies={['React', 'TypeScript', 'Next.js', 'Framer-Motion', 'SCSS', 'Redux', 'Redux-toolkit', 'Flask', 'Postgresql(Supabase)']}
        techTitle="Technologies"
        clientTitle="Client"
        externalLink="https://hangman-lilac.vercel.app/"
        />

    )
}
export default HeroSection