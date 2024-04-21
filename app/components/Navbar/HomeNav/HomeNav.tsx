"use client"
import './homenav.scss';
import React, {useEffect, useState} from "react";
import Link from 'next/link';
import {useNav} from '@/app/Contexts/navbarContext';
import {motion, AnimatePresence} from 'framer-motion';
import {container, item, content} from '@/app/styles/animations/nav'


const menuItems = [
    {
        itemName: "Projects",
        link: "#projects",
    },
     {
        itemName: "Contact",
        link: "#contact"
     }
]

const contactItems = [
    {
        title: "Say Hello",
        email: "kachijohnduru@googlemail.com",
        number: "+44 753 020 5654",
    }
]



const HomeNav = () => {

    const {currentSection} = useNav()

    console.log("This is the currentSection", currentSection)

    
    const [isActive, setIsActive] = useState<boolean>(false)
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [showNavbar, setShowNavbar] = useState<boolean>(true);

    useEffect(() => {
        const handleMenuDisplay = () => {
            const screenSize = window.innerWidth
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





    return (
   
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
            
            <button  onClick={() => {setIsActive(!isActive)}} className="navbar__burger-menu">
            <div className={`${isActive ? "navbar__active-burger-menu": "navbar__inactive-burger-menu"}`}></div>
            </button>
            <AnimatePresence>
                

            {isActive && (
                <motion.ul
                variants={item}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`${isActive ? "navbar__mobile-links" :"navbar__menu-links"}`}>
                    
                <div className={`${isActive ? "navbar__mobile-links-container" : "navbar__menu-links"}`}>
                {menuItems.map((item, index) => (
                    <motion.li variants={content} key={index} className={`${"navbar__menu-item"} ${currentSection === 'about-section' ? "navbar__menu-item-about-color" : ""} ${isActive ? "navbar__active-menu-item" : ""}`}>
                        <Link onClick={()=>setIsActive(false)} href={item.link}>
                        {item.itemName}</Link>
                    </motion.li>
                ))}
          
                    <div className="navbar__contact-item-container">
                        {contactItems.map((item, index) => (
                            <div key={index} className="navbar__contact-items">
                                <motion.h5 variants={content}>{item.title}</motion.h5>
                                <motion.p variants={content}>{item.email}</motion.p>
                                <motion.p variants={content}>{item.number}</motion.p>
                            </div>
                        ))}

                    <motion.div variants={content} className="navbar__external-links">
                                <Link  rel="noreferrer" target="blank" href="https://www.linkedin.com/in/john-duru-7b65672b1/">GH</Link>
                                <Link  rel="noreferrer" target="blank" href="https://github.com/Bitterostrich">LN</Link>
                            </motion.div>
                    </div>
                </div>
            </motion.ul>
                   )}
                   </AnimatePresence>

                   {!isActive && (
                                       <ul className="navbar__menu-links">
                                       {menuItems.map((item, index) => (
                                           <li key={index} className={`navbar__menu-item ${currentSection === 'about-section' ? "navbar__menu-item-about-color" : ""}`}>
                                               <Link href={item.link}>
                                                   {item.itemName}
                                               </Link>
                                           </li>
                                       ))}
                                   </ul>
                   )}

            </div>
        </motion.nav>

    )
}

export default HomeNav