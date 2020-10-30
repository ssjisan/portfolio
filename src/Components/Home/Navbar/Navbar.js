import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';
import resume from '../Home/resume.pdf';
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            {/************************** Hamburger Menu Start********************************************************/}
            <button class="navbar-toggler btn btn-warning" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span> 
            </button>
            
            {/************************** Hamburger Menu End********************************************************/}

            <div class="collapse navbar-collapse navbarCustome" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto">
                    <li class="nav-item">
                        <Link className="nav-link text-dark" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-dark" to="/projects">Projects</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-dark" to="/blog">Blog</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-dark" to="/myself">Myself</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-dark" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <a href={resume} download="sadman_sakib"><button class="btn btn-info" >My Resume</button></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

// https://drive.google.com/file/d/1xNGFUy8f4Uk6Mi3P065_is2CZzV2fwWW/view?usp=sharing