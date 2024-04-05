"use client"

import React, {useState, useEffect} from 'react'
import HeroSection from './HeroSection/HeroSection'

import AboutSection from './AboutSection/AboutSection'


const HomePage = () => {
    return (
        <>
        <main className="home-page">
            <HeroSection />
            <AboutSection />
        </main>
        </>
    )
}

export default HomePage