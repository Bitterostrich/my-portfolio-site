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
                                <div className="header">
                                <h2>About my self</h2>
                                </div>
                               <div>
                               <p>
                                
                                </p>
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