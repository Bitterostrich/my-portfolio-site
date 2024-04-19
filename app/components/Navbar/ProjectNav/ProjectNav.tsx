"use client"
import './projectnav.scss';
import React, {useEffect, useState} from "react";
import Link from 'next/link';
import {LinkedInIcon, GitHubIcon} from './imports'


const menuItems = [
    {
        icon: LinkedInIcon,
        link: "/projects",
    },
     {
        icon: GitHubIcon,
        link: "/contact"
     }
]



const ProjectNav = () => {

    
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
        <>
        <nav className={`${"navbar"} ${showNavbar ? "show-navbar" : "hide-navbar"}`}>
            <div className="navbar__container">
            <Link href="/" passHref>
                <span className="navbar__logo">BITTEROSTRICH</span>
            </Link>

            <button onClick={() => {setIsActive(!isActive)}} className="navbar__burger-menu">
            <div className={`${isActive ? "navbar__active-burger-menu": "navbar__inactive-burger-menu"}`}></div>

            </button>

                <ul className={` ${isActive ? "navbar__mobile-links" :"navbar__menu-links"}`}>
                
                    <li className="navbar__menu-item">
                        <Link href="">
                        <LinkedInIcon/></Link>
                        <Link href="">
                        <GitHubIcon/></Link>
                    </li>
                
            </ul>
            </div>
        </nav>
        </>
    )
}

export default ProjectNav