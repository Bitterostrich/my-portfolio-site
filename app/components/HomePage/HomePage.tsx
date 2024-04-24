"use client"

import React, {useState, useEffect, useRef} from 'react'
import {useScroll, motion} from 'framer-motion';
import HeroSection from './HeroSection/HeroSection';
import './homepage.scss'

import AboutSection from './AboutSection/AboutSection';
import Skills from './Skills/Skills';

import ProjectsSection from './ProjectsSection/ProjectsSection'


const HomePage = () => {





    // const [currentSection, setCurrentSection] = useState('');
    // const sectionRefs = useRef({
    //     heroSection: useRef(null),
    //     skills: useRef(null),
    //     aboutSection: useRef(null),
    //     projectsSection: useRef(null)
    // });

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 setCurrentSection(entry.target.id)
    //             }
    //         })
    //     }, {threshold: 0.0})

    //     Object.values(sectionRefs.current).forEach(ref => {
    //         if (ref.current) observer.observe(ref.current)
    //     });

    //     return () => {
    //         Object.values(sectionRefs.current).forEach(ref => {
    //             if (ref.current) observer.unobserve(ref.current)
    //         })
    //     }

    // }, [])

    return (
        <>
        <main  className="home-page">
            {/* <div className="home-page__background">
            <div ref={sectionRefs.current.heroSection} id="heroSection"><HeroSection /></div>
            <div ref={sectionRefs.current.skills} id="skills"><Skills/></div>
            <div ref={sectionRefs.current.aboutSection} id="aboutSection"><AboutSection /></div>
            <div ref={sectionRefs.current.projectsSection} id="projectsSection"><ProjectsSection /></div> */}

            <div className="home-page__background">
            <div><HeroSection /></div>
            <div><Skills/></div>
            <div><AboutSection /></div>
            <div ><ProjectsSection /></div>
            </div>
        </main>
        </>
    )
}

export default HomePage