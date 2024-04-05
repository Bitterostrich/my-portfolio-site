"use client"

import React, {useState, useEffect} from 'react'
import HeroSection from './HeroSection/HeroSection'
import './homepage.scss'

import AboutSection from './AboutSection/AboutSection';
import Skills from './Skills/Skills';

import ProjectsSection from './ProjectsSection/ProjectsSection'


const HomePage = () => {
    return (
        <>
        <main className="home-page">
            <div className="home-page__background">
            <HeroSection />
            <Skills/>
            <AboutSection />
            <ProjectsSection />
            </div>
        </main>
        </>
    )
}

export default HomePage