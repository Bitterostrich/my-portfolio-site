"use client"

import React, {createContext, useContext, useState, ReactNode} from 'react';

interface NavContextType {
    currentProject: string;
    updateProject: (project: string) => void;
    currentSection: string;
    updateSection: (project: string) => void;
}


const NavContext = createContext<NavContextType | null>(null);




export const NavProvider: React.FC <{children: ReactNode}> = ({children}) => {
    const [currentProject, setCurrentProject] = useState('')
    const [currentSection, setCurrentSection] = useState('')

    console.log("This is the current project in the my nav context", currentProject)

    const updateProject = (project: string) => {
        setCurrentProject(project)
    }

    const updateSection = (section: string) => {
        setCurrentSection(section)
    }

    return (
        <NavContext.Provider value={{currentProject, updateProject, currentSection, updateSection}}>
            {children}
        </NavContext.Provider>
    )
}


export const useNav = (): NavContextType => {
    const context = useContext(NavContext);

    if(!context) {
        return {
            currentProject: '', updateProject: () => {}, currentSection: '', updateSection: () => {}}
    }
    return context
};