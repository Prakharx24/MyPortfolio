import React from 'react';
import "./Hero.css";
import img1 from './me.jpg'; 
import img2 from './img1.svg'
import img3 from './img3.svg'
import img4 from './img4.svg'
import img5 from './img5.svg'

const Hero = () => {
    return (
        <section className='hero-container'>
            <div className='hero-content'>
                <h2>I am Prakhar Pratham.</h2>
                <p>
                    Passionate Frontend Developer | Transforming Ideas into Seamless and 
                    Visually Stunning Web Solutions
                </p>
            </div>
            <div className='hero-img'>
                <div>
                    <div className='me-photo'>
                    <img src={img1} alt="" height={400} style={{ borderRadius: '10px' }} />
                    </div>
                </div>

                <div>
                    <div className='tech-icon'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='tech-icon'>
                        <img src={img3} alt="" />
                    </div>
                    <div className='tech-icon'>
                        <img src={img4} alt="" />
                    </div>
                    <div className='tech-icon'>
                        <img src={img5} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
