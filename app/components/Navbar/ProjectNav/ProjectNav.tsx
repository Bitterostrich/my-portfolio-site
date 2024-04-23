"use client"
import './projectnav.scss';
import React, {useEffect, useState} from "react";
import Link from 'next/link';
import {LinkedInIcon, GitHubIcon} from './imports';
import {motion, AnimatePresence} from 'framer-motion'
import {container, item, content} from '@/app/styles/animations/nav'


const menuItems = [
    {
        icon: LinkedInIcon,
        link: "https://www.linkedin.com/in/john-duru-7b65672b1/",
    },
     {
        icon: GitHubIcon,
        link: "https://github.com/Bitterostrich"
     }
]


const contactItems = [
    {
        title: "Say Hello",
        email: "kachijohnduru@googlemail.com",
        number: "+44 753 020 5654",
    }
]



const ProjectNav = () => {

    
    const [isActive, setIsActive] = useState<boolean>(false)
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [showNavbar, setShowNavbar] = useState<boolean>(true);

    useEffect(() => {
        const handleMenuDisplay = () => {
            const screenSize = window.innerWidth
            console.log(screenSize)
            if (screenSize > 768) {
                setIsActive(false)
               
            }

   
        }

        window.addEventListener("resize", handleMenuDisplay)
        return () => window.removeEventListener("resize", handleMenuDisplay)
    }, [])

    useEffect(() => {
        const handleNavScroll = () => {
            const currentScrollY = window.scrollY
            

            if(currentScrollY === 0) {
                setShowNavbar(true)
            } else {
                setShowNavbar(false)
            }
            setLastScrollY(currentScrollY)
          
        }

       
        window.addEventListener('scroll', handleNavScroll)

        return () => window.removeEventListener('scroll', handleNavScroll)

    }, [lastScrollY])

    useEffect(() => {
        const currentScroll = window.scrollY

        console.log(currentScroll)
    }, [lastScrollY])

    





    return (
        <>
        <motion.nav
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`${"navbar"} ${showNavbar ? "show-navbar" : "hide-navbar"}`}>
            <div className="navbar__container">
            <Link href="/" passHref>
                <span className={` ${"navbar__logo"} ${isActive ? "navbar__active-logo" : ""} `}>BITTEROSTRICH</span>
            </Link>

            <button onClick={() => {setIsActive(!isActive)}} className="navbar__burger-menu">
            <div className={`${isActive ? "navbar__active-burger-menu": "navbar__inactive-burger-menu"}`}></div>
            </button>


            <AnimatePresence>

                {isActive && (
                                    <motion.ul 
                                    variants={item}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className={` ${isActive ? "navbar__mobile-links" :"navbar__menu-links"}`}>
                                    <div className={`${isActive ? "navbar__mobile-links-container" : "navbar__menu-links"}`}>
                                    
                                        <motion.li variants={content} className="navbar__menu-item-projects">
                                            <Link rel="noreferrer" target="blank" href="https://www.linkedin.com/in/john-duru-7b65672b1/" >
                                            <LinkedInIcon/></Link>
                                            <Link rel="noreferrer" target="blank" href="https://github.com/Bitterostrich">
                                            <GitHubIcon/></Link>
                                        </motion.li>
                    
                                        {isActive && contactItems.map((item, index) => (
                                            <ul className="navbar__contact-items" key={index}>
                                                <motion.h5 variants={content}>{item.title}</motion.h5>
                                                <motion.p variants={content}>{item.email}</motion.p>
                                                <motion.p variants={content}>{item.number}</motion.p>
                    
                                            </ul>
                                        ))}

                                        
                    <motion.div variants={content} className="navbar__external-links">
                                <Link  rel="noreferrer" target="blank" href="https://www.linkedin.com/in/john-duru-7b65672b1/">GH</Link>
                                <Link  rel="noreferrer" target="blank" href="https://github.com/Bitterostrich">LN</Link>
                            </motion.div>
                    
                                </div>
                                </motion.ul>
                )}
                
            </AnimatePresence>

                {!isActive && (
                        <div className="navbar__menu-item-projects">
                            <Link rel="noreferrer" target="blank" href="https://www.linkedin.com/in/john-duru-7b65672b1/" >
                            <LinkedInIcon/></Link>
                            <Link rel="noreferrer" target="blank" href="https://github.com/Bitterostrich">
                            <GitHubIcon/></Link>
                        </div>
                )}


            </div>
        </motion.nav>
        </>
    )
}

export default ProjectNav