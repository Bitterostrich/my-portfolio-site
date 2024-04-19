"use client"
import './homenav.scss';
import React, {useEffect, useState} from "react";
import Link from 'next/link';
import {useNav} from '@/app/Contexts/navbarContext' 


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
                <div className={`${isActive ? "navbar__mobile-links-container" : "navbar__menu-links"}`}>
                {menuItems.map((item, index) => (
                    <li key={index} className={`${"navbar__menu-item"} ${currentSection === 'about-section' ? "navbar__menu-item-about-color" : ""}`}>
                        <Link onClick={()=>setIsActive(false)} href={item.link}>
                        {item.itemName}</Link>
                    </li>
                ))}
                {isActive && contactItems.map((item, index) => (
                    <ul className="navbar__contact-items" key={index}>
                        <h2>{item.title}</h2>
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

export default HomeNav