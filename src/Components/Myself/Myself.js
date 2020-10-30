import React from 'react';
import {Link} from "react-router-dom";
import resume from '../Home/Home/resume.pdf';

const Myself = () => {
    return (
        <div>
            {/************************** Navbar Menu Start********************************************************/}
            <nav class="navbar navbar-expand-lg navbar-light">
{/************************** Hamburger Menu Start********************************************************/}
                <button class="navbar-toggler btn btn-warning" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span> 
                </button>
{/************************** Hamburger Menu End********************************************************/}

                <div class="collapse navbar-collapse navbarCustome" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/myself">Myself</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <a href={resume} download="sadman_sakib"><button class="btn btn-info" >My Resume</button></a>
                        </li>
                    </ul>
                </div>
            </nav>
{/************************** Navbar Menu End********************************************************/}
                <div className="container">

                </div>
        </div>
    );
};

export default Myself;