'use client'
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useNav } from '@/app/Contexts/navbarContext';
import ProjectNav from './ProjectNav/ProjectNav';
import HomeNav from './HomeNav/HomeNav';

const Navbar = () => {
    const pathname = usePathname();

    const { currentProject, updateProject } = useNav();

    useEffect(() => {
        // Assuming your project pages are structured under a specific path
        const projectPath = '/projects/';
        if (pathname.includes(projectPath)) {
            const projectName = pathname.split(projectPath)[1];
         
            updateProject(projectName || '');
        } else {
            updateProject(''); // Reset if not a project page
        }
    }, [pathname, updateProject]);

    return currentProject ? <ProjectNav /> : <HomeNav />;
};

export default Navbar;