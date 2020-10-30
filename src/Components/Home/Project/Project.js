import React from 'react';
import ca from '../../Projects/image/carousel/ca.jpg';
import va from '../../Projects/image/carousel/vn.jpg'
import wf from '../../Projects/image/carousel/wf.jpg'
const Project = () => {
    return (
        <div>
            {/* Carosule Start From Here */}
            <div>
                <div>
                    <h3 style={{textAlign:"center", paddingTop:100}}>Projete <span style={{color:"#C7EA46"}}>Overview</span> </h3>
                </div>
{/* Carousel Wrapper */}
                <div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel"> 
{/* Indicators Start */}
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-2" data-slide-to="1"></li>
                        <li data-target="#carousel-example-2" data-slide-to="2"></li>
                    </ol>
{/* Indicators End */}
{/* Slides Start */}
                <div class="carousel-inner" role="listbox">
{/* Creative Agency Start */}
                    <div class="carousel-item active">
                    <div class="view">
                        <img class="d-block w-100" src={ca} alt="First slide"/>
                    </div>
                    <div class="carousel-caption">
                        <h3 class="h3-responsive" style={{color:"black"}}>Creative Agency</h3>
                    </div>
                    </div>
{/* Creative Agency End */}

{/* Volunteer Network Start */}
                    <div class="carousel-item">
                    <div class="view">
                        <img class="d-block w-100" src={va} alt="Second slide"/>
                        <div class="mask rgba-black-strong"></div>
                    </div>
                    <div class="carousel-caption">
                        <h3 class="h3-responsive">Volunteer Network</h3>
                    </div>
                    </div>
{/* Volunteer Network End */}

{/* Weather Forecast Start */}
                    <div class="carousel-item">
                    <div class="view">
                        <img class="d-block w-100" src={wf} alt="Third slide"/>
                    </div>
                    <div class="carousel-caption">
                        <h3 class="h3-responsive">Weather Forecast</h3>
                    </div>
                    </div>
{/* Weather Forecast End */}
                </div>
{/* Slides End */}

{/* Controls Start */}
                    <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
{/* Controls End */}

                </div>

{/* Carousel Wrapper */}
            </div>
        </div>
    );
};

export default Project;