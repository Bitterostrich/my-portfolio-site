"use client"
import React, {useState, useEffect} from 'react';
import './herosection.scss'
import {LinkedInIcon, GitHubIcon} from './imports'


const HeroSection = () => {

    const [typewriterText, setTypewriterText] = useState<string>('')

    useEffect(() => {
        const text = "Tech Stack: Next.js, MongoDB, Node, Flask, SASS"
        const typeSpeed = 150;
        let index = 0;

        let timer: number;
     

        const handleTypeWriter = () => {
            if (index < text.length) {
                setTypewriterText(text.substring(0, index + 1))
                index++
                timer = setTimeout(handleTypeWriter, typeSpeed) as unknown as number
            }
        }
        timer = setTimeout(handleTypeWriter, typeSpeed) as unknown as number
        return () => clearTimeout(timer)

    }, [])
    

    console.log("HeroSection rendered with text:", typewriterText)


    return (
        <>
        <section className="home-page-hero">
            <div className="home-page-hero__container container-1980">
                <div className="home-page-hero__content">
                    <div className="home-page-hero__typewriter"><span id="typewriter">{typewriterText}</span><span className="home-page-hero__typewriter-cursor"></span></div>
                    
                    <h1>Frontend Developer</h1>
                    <p>Dedicated and Solution Oriented, I enjoy the process as much as the outcome.</p>
                    <div className="home-page-hero__media">
                        <LinkedInIcon className="home-page-hero__icon"/>
                        <GitHubIcon className="home-page-hero__icon"/>
                    </div>
            </div>
            </div>
        </section>
        </>
    )
}

export default HeroSection