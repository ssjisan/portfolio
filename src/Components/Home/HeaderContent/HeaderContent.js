import React, { useEffect } from 'react';
import image from '../../../images/jisan.png'
import './HeaderContent.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faLinkedinIn,faFacebookF,faMediumM,faGithub } from '@fortawesome/free-brands-svg-icons'
import { useDencrypt } from "use-dencrypt-effect";
const values = ["Web Developer", "Web Designer", "React Developer", "Network Engineer"];
const HeaderContent = () => {
    const { result, dencrypt } = useDencrypt();  
    useEffect(()=>{
      let i = 0;
        const action = setInterval(() => {
          dencrypt(values[i]);
          if(i === values.length - 1){
            i = 0;
            } 
            else{
              i = i+1;
            }
        }, 3000);
        return () => clearInterval(action);
    }, [dencrypt])
    return (
        <div className="container">
            <div class="row align-items-center container">
                <div class="col-md-6">
                        <h5>Hello, My name is </h5>
                        <h1>Md. Sadman Sakib Jisan</h1>
                        <h5>I am a <span style={{color:"red"}}>{result}</span></h5> 
                </div> 
                <div class="col-md-6">
                    <img src={image} class="d-block w-100"  alt=""/>
                </div>
                {/* <div className="icon">
                        <h2 style={{color:'red'}}>Find me in</h2>
                        <div className="social col-md-12">
                            <a href="https://www.facebook.com/userjisan/" target="_blank" rel="noreferrer" className="icon" ><FontAwesomeIcon icon={faFacebookF} /></a> 
                            <a href="https://medium.com/@sakibfset13" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faMediumM} /></a>
                            <a href="https://www.linkedin.com/in/ssjisan/" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href="https://github.com/ssjisan" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                </div> */}
            </div>
        </div>
    );
};

export default HeaderContent;