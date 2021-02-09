import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from './images/image.png'
const About = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
    }, [])
    return (
        <div className="about">
            <div className="container">
                <div class="row align-items-center container">
                    <div class="col-md-6" data-aos="zoom-in-up">
                        <img src={image} class="d-block w-100"  alt=""/>
                    </div>
                    <div class="col-md-6" data-aos="zoom-in-down">
                        <h1 style={{textAlign:"center"}}>About <span style={{color:"#C7EA46"}}>Myself</span></h1>
                        <p style={{fontSize:30}}> Observe, Learn and Improve. Trying to learn new thing everyday.</p>
                    </div> 
                </div>
            </div>
        </div>
    );
};
export default About;