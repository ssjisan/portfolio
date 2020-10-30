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
                        <h1>About <span style={{color:"#C7EA46"}}>Myself</span> </h1>
                        <p>Trying a new thing is fun. New technologies, new ideas. I love to work with versatility. At a very early age at my university, I tried several things. Firstly I was trying to work with robotics. Then work with graphics designing, design game assets, animation, etc. My final year's project was developing a First-Person Shooting game. I worked as an asset designer in this team. I love learning about new technologies. Now I start learning Networking related staff. Cisco Routing-Switching, Mikrotik Routing. For almost two years, I worked as a network engineer in an Internet service provider(ISP). But working as a developer was my passion at the very early stage of my career. I have a little knowledge of HTML5, CSS3. So I start learning about front-end development. Last six months, I learned about JavaScript, ReactJS, NodeJS, MongoDB, Bootstrap. And prepare me as a junior or entry-level front-end developer. 

</p>
                    </div> 
                </div>
            </div>
        </div>
    );
};
export default About;