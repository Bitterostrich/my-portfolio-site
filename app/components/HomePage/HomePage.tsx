"use client"

import React, {useState, useEffect} from 'react'
import HeroSection from './HeroSection/HeroSection'

import AboutSection from './AboutSection/AboutSection'

import ProjectsSection from './ProjectsSection/ProjectsSection'


const HomePage = () => {
    return (
        <>
        <main className="home-page">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
        </main>
        </>
    )
}

export default HomePage