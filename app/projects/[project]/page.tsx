"use client"

import { useNav} from '@/app/Contexts/navbarContext'

import { useEffect } from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import JemekSolicitorsPage from '@/app/components/Projects/JemekSolicitors/jemeksolicitors';
import DigitalSpanielPage from '@/app/components/Projects/DigitalSpaniel/DigitalSpaniel';
import HangmanPage from '@/app/components/Projects/Hangman/Hangman';
// import { useRouter } from 'next/navigation';

// interface NavProps {
//     link: string
// }


const ProjectsPage = ({params}: {params: {project: string}}) => {

    const {updateProject} = useNav()

    

    const project = params.project

    console.log(project)

    console.log(params)

    useEffect(() => {
        updateProject(project);
    }, [project, updateProject])



    // if(!router.isReady) {
    //     return <div> Something went wrong</div>
    // }

    // const project = router.query.project;
    // console.log(project)


    
    // const searchParams = useSearchParams();
    // console.log("current params:", searchParams)

    // // const project = searchParams.get('project');
    // // console.log("current project:", project)

    const renderProjectPage = () => {
        switch(project) {
            case 'jemek-solicitors-project':
                return <JemekSolicitorsPage />;
            case 'digital-spaniel-project':
                return <DigitalSpanielPage />;
            case 'hangman-project':
                return <HangmanPage />;
            default:
                return <div>Project page not found</div>
        }
    }

    return renderProjectPage()
}

export default ProjectsPage