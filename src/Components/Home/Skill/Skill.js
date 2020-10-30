import React from 'react';
import './Skill.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHtml5,faFacebookF,faMediumM,faGithub } from '@fortawesome/free-brands-svg-icons'
const Skill = () => {
    return (
        <div class="fixed-bg">
            <section class="resume-section" id="skills">
                <div class="resume-section-content">
                    <h2 className="headings">Skills</h2>
                    <div class="subheading">Programming Languages & Tools</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><FontAwesomeIcon icon={faHtml5} /></li>
                        <li class="list-inline-item"><FontAwesomeIcon icon={faHtml5} /></li>
                        <li class="list-inline-item"><FontAwesomeIcon icon={faHtml5} /></li>
                        <li class="list-inline-item"><FontAwesomeIcon icon={faHtml5} /></li>
                        <li class="list-inline-item"><FontAwesomeIcon icon={faHtml5} /></li>
                        <li class="list-inline-item"><FontAwesomeIcon icon={faHtml5} /></li>
                        <li class="list-inline-item"><FontAwesomeIcon icon={faHtml5} /></li>
                        <li class="list-inline-item"><FontAwesomeIcon icon={faHtml5} /></li>
                        <li class="list-inline-item"><FontAwesomeIcon icon={faHtml5} /></li>
                        <li class="list-inline-item"><FontAwesomeIcon icon={faHtml5} /></li>
                        <li class="list-inline-item"><FontAwesomeIcon icon={faHtml5} /></li>
                        <li class="list-inline-item"><FontAwesomeIcon icon={faHtml5} /></li>
                    </ul> 
                </div>
            </section>
        </div>
    );
};

export default Skill;