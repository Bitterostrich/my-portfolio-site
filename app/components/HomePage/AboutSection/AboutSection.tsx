import React, {useState} from 'react';
import './aboutsection.scss';
import Image from 'next/image';
import {ProfilePicture} from './imports'

const AboutSection = () => {
    return (
        <section className="home-page-about">
            <div className="home-page-content__wrapper for-animations">
                <div className="home-page-content__canvas for-3D-elements">
                    <div className="home-page-content__container container-1980">
                        <section className="home-page-content__container-left">
                            <div className="home-page-content__left-content">
                                <div className="home-page-content__about-text-container">
                                <div className="about-top">
                                <h2>An Ongoing Story,</h2>
                                <p>For over two years, I have had the pleasure of assisting organisations in navigating the digital landscape, modernising the
                                    online presence of their organisation. From initial consulations to the development and deployment of modern sphisticated websites, I remain focused on exceeding client expectations. 
                                </p>
                                <p>In this rapidly evolving digital era, my commitment is to continue learning, adapting, and delivering impactful digital experiences. By staying at the forefront of technological advancements and embracing collaboration, I aim to contribute to the success of businesses poised for digital transformation.</p>
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
                            <div className="home-page-content__blue-box-wrapper">
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
                            </div>
                               

                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection