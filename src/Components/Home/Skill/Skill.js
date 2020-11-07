import React, { useEffect } from 'react';
import './Skill.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHtml5,faCss3Alt,faBootstrap,faJsSquare,faReact ,faGithub, faNodeJs, faNpm } from '@fortawesome/free-brands-svg-icons'
const Skill = () => {
    useEffect(()=>{ 
        AOS.init({duration:2000})
    }, [])
    return (
        <div class="fixed-bg area">
            <section class="resume-section" id="skills">
                <div class="resume-section-content">
                    <h2 className="headings">Skills</h2>
                    <div class="subheading">Programming Languages & Tools</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item" data-aos="zoom-in-up"><FontAwesomeIcon icon={faHtml5} /></li>
                        <li class="list-inline-item" data-aos="zoom-in-down"><FontAwesomeIcon icon={faCss3Alt} /></li>
                        <li class="list-inline-item" data-aos="zoom-in-up"><FontAwesomeIcon icon={faBootstrap} /></li>
                        <li class="list-inline-item" data-aos="zoom-in-down"><FontAwesomeIcon icon={faJsSquare} /></li>
                        <li class="list-inline-item" data-aos="zoom-in-up"><FontAwesomeIcon icon={faReact} /></li>
                        <li class="list-inline-item" data-aos="zoom-in-down"><FontAwesomeIcon icon={faGithub} /></li>
                        <li class="list-inline-item" data-aos="zoom-in-up"><FontAwesomeIcon icon={faNodeJs} /></li>
                        <li class="list-inline-item" data-aos="zoom-in-down"><FontAwesomeIcon icon={faNpm} /></li>
                    </ul> 
                </div>
            </section>
        </div>
    );
};

export default Skill;