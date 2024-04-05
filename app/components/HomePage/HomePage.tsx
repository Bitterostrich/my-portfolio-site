"use client"

import React, {useState, useEffect} from 'react'
import HeroSection from './HeroSection/HeroSection'
import './homepage.scss'

import AboutSection from './AboutSection/AboutSection'

import ProjectsSection from './ProjectsSection/ProjectsSection'


const HomePage = () => {
    return (
        <>
        <main className="home-page">
            <div className="home-page__background">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            </div>
        </main>
        </>
    )
}

export default HomePage