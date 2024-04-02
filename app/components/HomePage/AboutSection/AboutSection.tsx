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
                                <h2>About my self</h2>
                                <p>Beginning my journey as a developer over two years ago, I have built modern websites, and created projects with customer and user benefit in mind. I pride myself as someone who pays attention to detail, prioritising user experience and application funtionality. 
                                    I am a self-taught developer and I believe learning should be 
                                </p>
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