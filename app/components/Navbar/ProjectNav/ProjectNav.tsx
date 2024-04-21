"use client"
import './projectnav.scss';
import React, {useEffect, useState} from "react";
import Link from 'next/link';
import {LinkedInIcon, GitHubIcon} from './imports'


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
                <span className={` ${"navbar__logo"} ${isActive ? "navbar__active-logo" : ""} `}>BITTEROSTRICH</span>
            </Link>

            <button onClick={() => {setIsActive(!isActive)}} className="navbar__burger-menu">
            <div className={`${isActive ? "navbar__active-burger-menu": "navbar__inactive-burger-menu"}`}></div>

            </button>

                <ul className={` ${isActive ? "navbar__mobile-links" :"navbar__menu-links"}`}>
                <div className={`${isActive ? "navbar__mobile-links-container" : "navbar__menu-links"}`}>
                
                    <li className="navbar__menu-item">
                        <Link rel="noreferrer" target="blank" href="https://www.linkedin.com/in/john-duru-7b65672b1/" >
                        <LinkedInIcon/></Link>
                        <Link rel="noreferrer" target="blank" href="https://github.com/Bitterostrich">
                        <GitHubIcon/></Link>
                    </li>

                    {isActive && contactItems.map((item, index) => (
                        <ul className="navbar__contact-items" key={index}>
                            <h5>{item.title}</h5>
                            <p>{item.email}</p>
                            <p>{item.number}</p>

                        </ul>
                    ))}

            </div>
            </ul>
            </div>
        </nav>
        </>
    )
}

export default ProjectNav