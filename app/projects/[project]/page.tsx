"use client"

import { useEffect } from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import JemekSolicitorsPage from '@/app/components/Projects/JemekSolicitors/jemeksolicitors';
// import { useRouter } from 'next/navigation';



const ProjectsPage = ({params}: {params: {project: string}}) => {
    const router = useRouter();

    const project = params.project

    console.log(project)

    console.log(params)



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
            default:
                return <div>Project page not found</div>
        }
    }

    return renderProjectPage()
}

export default ProjectsPage