import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Carousel, Modal, Button } from 'react-bootstrap';
import property1 from '/assets/images/property_1-min.jpg';
import property2 from '/assets/images/property_2-min.jpg';
import property3 from '/assets/images/property_3-min.jpg';
import property4 from '/assets/images/property_1-min.jpg';
import property5 from '/assets/images/property_3-min.jpg';
import property6 from '/assets/images/property_2-min.jpg';
import property7 from '/assets/images/property_3-min.jpg';
import property8 from '/assets/images/property_2-min.jpg';
import property9 from '/assets/images/property_1-min.jpg';

const ProjectDetails = () => {
    const [firstClick, setFirstClick] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setFormErrors({
            ...formErrors,
            [name]: ''
        });
    };


    const validateForm = () => {
        let errors = {};
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.number.trim()) {
            errors.number = 'Number is required';
        }
        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Perform form submission
            console.log('Form submitted:', formData);
            setFormData({
                name: '',
                email: '',
                number: '',
                message: ''
            });
            setFormSubmitted(true);
            setTimeout(() => {
                setFormSubmitted(false);
            }, 5000); // Reset the submission status after 5 seconds
        } else {
            setErrors(errors);
        }


    };


    const handleCarouselClick = () => {
        if (firstClick) {
            setFirstClick(false);
            setTimeout(() => {
                setFirstClick(true);
            }, 100);
        }
    };

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div style={{ backgroundColor: '#ced4da' }}>
            <div className="col-md-12">
                <div className="row">
                    <img src="./assets/images/property_1-min.jpg" alt="Image 1" className="contact-img" />
                </div>
            </div>
            <h2 className="contact-heading col-md-12">location 21</h2>
            <div className="contdetails">
                <div className="row" style={{ marginTop: '50px', margin: '0px' }}>

                    <div className="col-md-6">
                        <div className="row">
                            <Carousel onClick={handleCarouselClick}>
                                <Carousel.Item>
                                    <img src={property1} alt="Second slide" className="img-fluid" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={property2} alt="Second slide" className="img-fluid" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={property3} alt="Third slide" className="img-fluid" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={property4} alt="First slide" className="img-fluid" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={property5} alt="Second slide" className="img-fluid" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={property6} alt="Third slide" className="img-fluid" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={property7} alt="First slide" className="img-fluid" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={property8} alt="Second slide" className="img-fluid" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={property9} alt="Third slide" className="img-fluid" />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-md-6 desriptiondetails" style={{ marginTop: '24px' }}>
                        <h4>location 21</h4>
                        <p>Wide experience across architectural design and project management– expertise in, designing, planning, monitoring and coordinating multidimensional execution of projects across the globe.Wide experience across architectural design and project management– expertise in, designing, planning, monitoring and coordinating multidimensional execution of projects across the globe.</p>
                        <p>Has worked with Multinational firms and real estate firms of NCR. Have quite a few noticeable Architecture and interior design Projects under his belt.Has worked with Multinational firms and real estate firms of NCR. Have quite a few noticeable Architecture and interior design Projects under his belt.</p>
                        <div>
                            <h2 className="contact-enquery col-md-6" onClick={handleShow}>Enquery Now</h2>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="contact-heading col-md-12" >Related Projects</h2>
            <div class="untree_co-section bg-light">
                <div class="relateddetailsimages">
                    <div class="row">
                        <div class="col-md-6 col-lg-4">
                            <div class="property-entry">
                                <Link to="/ProjectDetails">
                                    <img src="./assets/images/property_1-min.jpg" alt="Image" class="img-fluid" />
                                </Link>
                                <div class="property-specs">
                                    <div class="location d-flex justify-content-between align-items-center">
                                        <div className='title'>
                                            <h2 class="d-block caption">location 21</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="property-entry">
                                <Link to="/ProjectDetails">
                                    <img src="./assets/images/property_2-min.jpg" alt="Image" class="img-fluid" />
                                </Link>
                                <div class="property-specs">
                                    <div class="location d-flex justify-content-between align-items-center">
                                        <div className='title'>
                                            <h2 class="d-block caption">location 22 </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="property-entry">
                                <Link to="/ProjectDetails">
                                    <img src="./assets/images/property_3-min.jpg" alt="Image" class="img-fluid" />
                                </Link>
                                <div class="property-specs">
                                    <div class="location d-flex justify-content-between align-items-center">
                                        <div className='title'>
                                            <h2 class="d-block caption">location 23 </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="property-entry">
                                <Link to="/ProjectDetails">
                                    <img src="./assets/images/property_3-min.jpg" alt="Image" class="img-fluid" />
                                </Link>
                                <div class="property-specs">
                                    <div class="location d-flex justify-content-between align-items-center">
                                        <div className='title'>
                                            <h2 class="d-block caption">location 24 </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="property-entry">
                                <Link to="/ProjectDetails">
                                    <img src="./assets/images/property_1-min.jpg" alt="Image" class="img-fluid" />
                                </Link>
                                <div class="property-specs">
                                    <div class="location d-flex justify-content-between align-items-center">
                                        <div className='title'>
                                            <h2 class="d-block caption">location 25 </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="property-entry">
                                <Link to="/ProjectDetails">
                                    <img src="./assets/images/property_2-min.jpg" alt="Image" class="img-fluid" />
                                </Link>
                                <div class="property-specs">
                                    <div class="location d-flex justify-content-between align-items-center">
                                        <div className='title'>
                                            <h2 class="d-block caption">location 26 </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <h2 className="contact-heading col-md-12" style={{ marginTop: '-40px' }} >What is the client saying</h2>
            <div className="untree_co-section bg-light">
                <div className="testimonialcontainer">
                    <div className='testimonial1'>
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="property-entry">
                                    <div className="d-flex justify-content-center">
                                        <img src="./assets/images/property_1-min.jpg" style={{ width: '100px' }} alt="Image" className="img-fluid" />
                                    </div>
                                    <div className="property-specs1">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt soluta id nesciunt reprehenderit placeat cumque voluptatibus blanditiis molestiae ex quibusdam, odit vitae. Quisquam, et! Sapiente consequatur placeat doloribus libero possimus!</p>
                                        <h2 className="d-block caption text-center">Testing1</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="property-entry">
                                    <div className="d-flex justify-content-center">
                                        <img src="./assets/images/property_2-min.jpg" style={{ width: '100px' }} alt="Image" className="img-fluid" />
                                    </div>
                                    <div className="property-specs1">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt soluta id nesciunt reprehenderit placeat cumque voluptatibus blanditiis molestiae ex quibusdam, odit vitae. Quisquam, et! Sapiente consequatur placeat doloribus libero possimus!</p>
                                        <h2 className="d-block caption text-center">Testing2</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="property-entry">
                                    <div className="d-flex justify-content-center">
                                        <img src="./src/components/images/property_3-min.jpg" style={{ width: '100px' }} alt="Image" className="img-fluid" />
                                    </div>
                                    <div className="property-specs1">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt soluta id nesciunt reprehenderit placeat cumque voluptatibus blanditiis molestiae ex quibusdam, odit vitae. Quisquam, et! Sapiente consequatur placeat doloribus libero possimus!</p>
                                        <h2 className="d-block caption text-center">Testing3</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Us Modal */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: 'black' }}>
                    <form onSubmit={handleSubmit}>
                        {formSubmitted && <div className="alert alert-success mt-3">Form submitted successfully!</div>}
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" />
                            {formErrors.name && <div className="text-danger">{formErrors.name}</div>}
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" />
                            {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
                        </div>
                        <div className="form-group">
                            <input type="tel" className="form-control" id="number" name="number" value={formData.number} onChange={handleInputChange} placeholder="Enter your phone number" />
                            {formErrors.number && <div className="text-danger">{formErrors.number}</div>}
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleInputChange} rows="3" placeholder="Enter your message"></textarea>
                            {formErrors.message && <div className="text-danger">{formErrors.message}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'black' }}>Submit</button>
                    </form>


                </Modal.Body>
                {/*
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                  
                </Modal.Footer>
                 */}
            </Modal>
        </div>
    );
};

export default ProjectDetails;
