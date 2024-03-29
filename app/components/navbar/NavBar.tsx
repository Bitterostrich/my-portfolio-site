"use client"

import React from "react";
import Link from 'next/link'


const menuItems = [
    {
        itemName: "Projects",
        link: "/projects",
    },
     {
        itemName: "Contact",
        link: "/contact"
     }
]


const NavBar = () => {
    return (
        <>
        <nav className="navbar">
            <div className="navbar__container">
            <Link href="/" passHref>
                <a className="navbar__logo">"John Duru</a>
            </Link>
    
            <ul className="navbar__menu">
                {menuItems.map((item, index) => (
                    <li key={index} className="navbar__menu-item">
                        <Link href={item.link} passHref>
                            <span>{item.itemName}</span></Link>
                    </li>
              
                ))}
    
            </ul>
        
    
            </div>
        </nav>
        </>
    )

}