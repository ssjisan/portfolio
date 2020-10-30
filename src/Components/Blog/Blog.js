import React from 'react';
import encrpt from './images/encrpt.gif'
import react from './images/react.gif'
import reactRouter from './images/reactRouter.png'
import type from './images/type.gif'
import fontawsome from './images/fa.png'
import {Link} from "react-router-dom";
import './Blog.css'
const Blog = () => {
    return (
        <div className="blog">
{/******************************************************Nav bar Start***********************************/}
            <nav class="navbar navbar-expand-lg navbar-light">
{/************************** Hamburger Menu Start********************************************************/}
            <button class="navbar-toggler btn btn-warning" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span> 
            </button>
            
{/************************** Hamburger Menu End********************************************************/}

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
                    <li class="nav-item">
                        <a href="https://drive.google.com/file/d/1xNGFUy8f4Uk6Mi3P065_is2CZzV2fwWW/view?usp=sharing"><button class="btn btn-info" href="">My Resume</button></a>
                    </li>
                </ul>
            </div>
        </nav>
{/**********************************************************Nav bar Start End**********************************************/}


{/*********************************************************First Blog Card Start ************************************************/}
        <div class="container blogBody container-color">
            <h2 class="headline">My Blog On Medium</h2>
            <br/>
        <div class="card-deck">
{/*********First Card Start***********/}
            <div class="card" style={{width: "18rem"}}>
                <img src={react} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Start With React</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://medium.com/@sakibfset13" class="btn btn-primary">Read Full Article</a>
                </div>
            </div>
{/*********First Card End***********/}

{/*********Second Card Start***********/}
            <div class="card" style={{width: "18rem"}}>
                <img src={reactRouter} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">React Router Features</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://medium.com/@sakibfset13" class="btn btn-primary">Read Full Article</a>
                </div>
            </div>
{/*********Second Card End***********/}

{/*********Third Card Start***********/}
            <div class="card" style={{width: "18rem"}}>
                <img src={fontawsome} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Using Fontawsome in React</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://medium.com/@sakibfset13" class="btn btn-primary">Read Full Article</a>
                </div>
            </div>
{/*********Third Card End***********/}
            </div>
        
{/*********************************************************First Blog Card End ***************************************************/}

            <br/>
{/*******************************************************Second Blog Card Start *************************************************/}
        <div class="card-deck">
{/*********First Card Start***********/}
            <div class="card" style={{width: "18rem"}}>
                <img src={type} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">React-typical</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://medium.com/@sakibfset13" class="btn btn-primary">Read Full Article</a>
                </div>
            </div>
{/*********First Card End***********/}

{/*********Second Card Start***********/}
            <div class="card" style={{width: "18rem"}}>
                <img src={encrpt} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">use-dencrypt-effect</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://medium.com/@sakibfset13" class="btn btn-primary">Read Full Article</a>
                </div>
            </div>
{/*********Second Card End***********/}

{/*********Third Card Start***********/}
            <div class="card" style={{width: "18rem"}}>
                <img src={encrpt} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">use-dencrypt-effect</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://medium.com/@sakibfset13" class="btn btn-primary">Read Full Article</a>
                </div>
            </div>
{/*********Third Card End***********/}
            </div>
        </div>
        </div>
    );
};

export default Blog;