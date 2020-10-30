import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import HeaderContent from '../HeaderContent/HeaderContent';
import Navbar from '../Navbar/Navbar';
import Project from '../Project/Project';
import './Home.css'
const Home = () => {
    return (
        <div className="header">
            <Navbar></Navbar>
            <HeaderContent></HeaderContent>
            <About></About>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;