"use client"
import React, {useState, useEffect} from 'react';
import './herosection.scss';
import {LinkedInIcon, GitHubIcon} from './imports';
import Link from 'next/link';
import{motion} from 'framer-motion';
import {item, container} from '@/app/styles/animations/globals'

const HeroSection = () => {

    const [typewriterText, setTypewriterText] = useState<string>('')

    useEffect(() => {
        const text = "I like to build scalable and resuable frontend products."
        const typeSpeed = 60;
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
        <motion.div
        variants={container}
        initial="hidden"
        animate="visible"

        className="home-page-content__wrapper for-animations">
                <div className="home-page-content__canvas for-3D-elements">
            <div className="home-page-hero__container container-1980">
                <div className="home-page-hero__content">
                   
                    
                    <motion.h1 variants={item}>John Duru, Frontend Developer.</motion.h1>
                  
                        <motion.span variants={item} id="typewriter">Frontend Developer with Backend Experience, I craft scalable applications prioritising UX/UI.</motion.span>
                    
                    <motion.p variants={item}>Dedicated and Solution Oriented, I enjoy the process as much as the outcome. </motion.p>
                    <motion.div variants={item} className="home-page-hero__media"> 
                        <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/john-duru-7b65672b1/"><LinkedInIcon className="home-page-hero__icon"/></Link>
                        <Link target="_blank" rel="noreferrer" href="https://github.com/Bitterostrich"><GitHubIcon className="home-page-hero__icon"/></Link>
                    </motion.div>
            </div>
            </div>
            </div>
            </motion.div>
        </section>
        </>
    )
}

export default HeroSection