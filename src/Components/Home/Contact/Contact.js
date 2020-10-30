import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
    return (
        <div className="container">
            <section class="mb-4">
{/* Section heading Start */}
                <h2 class="h1-responsive font-weight-bold text-center my-4">Contact With Me</h2>
{/* Section description */}
                <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly. </p>
                    <div class="row">
{/* Grid column */}
                        <div class="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
{/* Grid row */}
                                <div class="row">

{/* Grid column */}
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="name" name="name" class="form-control"/>
                                            <label for="name" class="">Your name</label>
                                        </div>
                                    </div>
{/* Grid column */}

{/* Grid column */}
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="email" name="email" class="form-control"/>
                                            <label for="email" class="">Your email</label>
                                        </div>
                                    </div>
{/* Grid column */}

                                </div>
{/* Grid row */}

{/* Grid row */}
                                <div class="row">
                                        <div class="col-md-12">
                                            <div class="md-form mb-0">
                                                <input type="text" id="subject" name="subject" class="form-control"/>
                                                <label for="subject" class="">Subject</label>
                                            </div>
                                        </div>
                                </div>
{/* Grid row */}

{/* Grid row */}
                                <div class="row">

{/* Grid column */}
                                        <div class="col-md-12">
                                            <div class="md-form">
                                                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                                <label for="message">Your message</label>
                                            </div>

                                        </div>
                                </div>
                                {/* Grid row */}

                            </form>

                            <div class="text-center text-md-left">
                                <button className="btn btn-primary">Send</button>
                            </div>
                            <div class="status"></div>
                        </div>
{/* Grid column */}

{/* Grid column */}
                            <div class="col-md-3 text-center">
                                <ul class="list-unstyled mb-0">
                                    <li><FontAwesomeIcon icon={faMapMarkerAlt} style={{fontSize:30}} /> <p>Dhaka, Bangladesh</p> </li>
                                    <li><FontAwesomeIcon icon={faPhone} style={{fontSize:30}}/>  <p>+880 1675 89 39 67</p> </li>
                                    <li><FontAwesomeIcon icon={faEnvelope} style={{fontSize:30}}/>  <p>sakibfset13@gmail.com</p></li>
                                </ul>
                            </div>
{/* Grid column */}

                    </div>
            </section>
        </div>
    );
};

export default Contact;