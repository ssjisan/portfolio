import React from 'react';
import './About.css';
import image from './images/image.png'
const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div class="row align-items-center container">
                    <div class="col-md-6">
                        <img src={image} class="d-block w-100"  alt=""/>
                    </div>
                    <div class="col-md-6">
                        <h5>Never Ever trust me</h5>
                    </div> 
                </div>
            </div>
        </div>
    );
};
export default About;