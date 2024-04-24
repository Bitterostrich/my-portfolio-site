import React, {useState, useEffect, useRef} from 'react';
import './aboutsection.scss';
import Image from 'next/image';
import {ProfilePicture} from './imports';
import {useNav} from '@/app/Contexts/navbarContext';
import{motion, useInView} from 'framer-motion';
import {itemY, container, picture, rotate} from '@/app/styles/animations/globals'

const AboutSection = () => {

    const {updateSection} = useNav()
    const sectionRef = useRef<HTMLElement>(null)
    const aboutInView = useInView(sectionRef, {margin: '-350px', once: true})


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries

            if (entry.isIntersecting) {
                updateSection('about-section')
            } else {
                updateSection('')
            }
        }, {
            threshold: 0.5
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        };


    }, [updateSection])


    return (
        <section ref={sectionRef} className="home-page-about" id="about-section">
            <motion.div
            variants={container}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            className="home-page-content__wrapper for-animations">
                <div className="home-page-content__canvas for-3D-elements">
                    <div className="home-page-content__container container-1980">
                        <section className="home-page-content__container-left">
                            <div className="home-page-content__left-content">
                                <div className="home-page-content__about-text-container">
                                <div className="about-top">
                                <motion.h2 variants={rotate}>An Ongoing Story,</motion.h2>
                                <motion.p variants={itemY}>For over two years, I have had the pleasure of assisting organisations in navigating the digital landscape, modernising the
                                    online presence of their organisation. From initial consulations to the development and deployment of modern  websites, I remain focused on exceeding client expectations. 
                                </motion.p>
                                <motion.p variants={itemY}>In this rapidly evolving digital era, my commitment is to continue learning, adapting, and delivering impactful digital experiences. By staying informed and embracing collaboration, I aim to contribute to the success of businesses poised for digital transformation.</motion.p>
                                </div>
                               {/* <div className="about-bottom">
                               <p>
                                No one
                                </p>
                               </div> */}
                                </div>
  

                            </div>
                        </section>
                        <section className="home-page-content__container-right">
                            <div className="home-page-content__right-content">
                            <motion.div variants={picture} className="home-page-content__blue-box-wrapper">
                            <div className="home-page-content__blue-box"></div>
                            
                            <Image
                                alt="profile picture for john duru"
                                src={ProfilePicture}
                                className="content-image"
                                style={{
                                    objectFit: "cover",
                                    width: "100%",
                                    height: "50%"
                                }}
                                 />
                            </motion.div>
                            </div>
                        </section>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default AboutSection