import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

import property1 from './images/slider-1-4 (1).jpg';
import property2 from './images/slider-3-3 (1).jpg';
import property3 from './images/slider-3-4.jpg';
import property4 from './images/slider-4-1.jpg';
import property5 from './images/slider-5-1.jpg';
import property6 from './images/slider-6-1.jpg';
import property7 from './images/slider-7-1.jpg';
import property8 from './images/slider-8-1.jpg';
import property9 from './images/slider-9-1.jpg';

const Home = () => {
    const [firstClick, setFirstClick] = useState(true);

    const handleCarouselClick = () => {
        if (firstClick) {
            setFirstClick(false);
            setTimeout(() => {
                setFirstClick(true);
            }, 100);
        }
    };

    const shuffleArray = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    const [images] = useState(shuffleArray([
        "./src/components/images/property_1-min.jpg",
        "./src/components/images/property_2-min.jpg",
        "./src/components/images/property_3-min.jpg",
        "./src/components/images/property_2-min.jpg",
        "./src/components/images/property_3-min.jpg",
        "./src/components/images/property_2-min.jpg",
        "./src/components/images/property_1-min.jpg",
        "./src/components/images/property_2-min.jpg",
        "./src/components/images/property_3-min.jpg",
        "./src/components/images/property_1-min.jpg",
        "./src/components/images/property_2-min.jpg",
        "./src/components/images/property_3-min.jpg",
    ]));

    const [imageNames] = useState([
        "Image 1",
        "Image 2",
        "Image 3",
        "Image 4",
        "Image 5",
        "Image 6",
        "Image 7",
        "Image 8",
        "Image 9",
        "Image 10",
        "Image 11",
        "Image 12",
    ]);

    const imagesPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [displayedImages, setDisplayedImages] = useState(images.slice(0, imagesPerPage));
    const [displayedNames, setDisplayedNames] = useState(imageNames.slice(0, imagesPerPage));

    useEffect(() => {
        // Disable "Prev" button when component mounts
        document.getElementById("prev").disabled = true;
    }, []);

    const showNextImages = () => {
        const nextPage = currentPage + 1;
        const startIndex = (nextPage - 1) * imagesPerPage;
        const endIndex = Math.min(startIndex + imagesPerPage, images.length);
        setCurrentPage(nextPage);
        setDisplayedImages(images.slice(startIndex, endIndex));
        setDisplayedNames(imageNames.slice(startIndex, endIndex));
        document.getElementById("prev").disabled = false;
        if (nextPage * imagesPerPage >= images.length) {
            document.getElementById("next").disabled = true;
        }
    };

    const showPreviousImages = () => {
        const prevPage = currentPage - 1;
        const startIndex = (prevPage - 1) * imagesPerPage;
        const endIndex = Math.min(startIndex + imagesPerPage, images.length);
        setCurrentPage(prevPage);
        setDisplayedImages(images.slice(startIndex, endIndex));
        setDisplayedNames(imageNames.slice(startIndex, endIndex));
        document.getElementById("next").disabled = false;
        if (prevPage === 1) {
            document.getElementById("prev").disabled = true;
        }
    };

    return (
        <div style={{ backgroundColor: '#ced4da' }}>
            <div className="col-md-12">
                <Carousel onClick={handleCarouselClick}>
                    <Carousel.Item>
                        <img src={property1} alt="First slide" className="img-fluid1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={property2} alt="Second slide" className="img-fluid1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={property3} alt="Third slide" className="img-fluid1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={property4} alt="First slide" className="img-fluid1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={property5} alt="Second slide" className="img-fluid1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={property6} alt="Third slide" className="img-fluid1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={property7} alt="First slide" className="img-fluid1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={property8} alt="Second slide" className="img-fluid1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={property9} alt="Third slide" className="img-fluid1" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <h2 className="contact-heading col-md-12">Our Latest Project</h2>
            </div>

            <div class="untree_co-section bg-light">
                <div class="archtailsimages" id="imageContainer">
                    <div class="row">
                        {displayedImages.map((imageUrl, index) => (
                            <div class="col-md-6 col-lg-4" key={index}>
                                <div class="property-entry">
                                    <Link to="/ProjectDetails">
                                        <img src={imageUrl} alt="Image" class="img-fluid" />
                                    </Link>
                                    <div class="property-specs">
                                        <div class="location d-flex justify-content-between align-items-center">
                                            <div className="title">
                                                <h2 class="d-block caption">{displayedNames[index]}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div class="row mt-5">
                        <div class="col-12">
                            <ul class="list-unstyled untree_co-pagination">
                                <li>
                                    <button onClick={showPreviousImages} id="prev">Prev</button>
                                </li>
                                <li><span id="currentPage">{currentPage}</span></li>
                                <li>
                                    <button onClick={showNextImages} id="next">Next</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="contact-heading col-md-12" style={{ marginTop: '-40px' }} > What is the client saying</h2>
            <div class="untree_co-section bg-light">

                <div class="testimonialcontainer">
                    <div className='testimonial1'>
                        <div class="row ">
                            <div class="col-md-6 col-lg-4">
                                <div class="property-entry">
                                    <div className="d-flex justify-content-center">
                                        <img src="./src/components/images/property_1-min.jpg" style={{ width: '100px' }} alt="Image" className="img-fluid" />
                                    </div>
                                    <div class="property-specs1">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt soluta id nesciunt reprehenderit placeat cumque voluptatibus blanditiis molestiae ex quibusdam, odit vitae. Quisquam, et! Sapiente consequatur placeat doloribus libero possimus!</p>
                                        <h2 class="d-block caption  text-center">Testing1</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="property-entry">
                                    <div className="d-flex justify-content-center">
                                        <img src="./src/components/images/property_2-min.jpg" style={{ width: '100px' }} alt="Image" className="img-fluid" />
                                    </div>
                                    <div class="property-specs1">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt soluta id nesciunt reprehenderit placeat cumque voluptatibus blanditiis molestiae ex quibusdam, odit vitae. Quisquam, et! Sapiente consequatur placeat doloribus libero possimus!</p>
                                        <h2 class="d-block caption  text-center">Testing2</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 ">
                                <div class="property-entry ">
                                    <div className="d-flex justify-content-center">
                                        <img src="./src/components/images/property_3-min.jpg" style={{ width: '100px' }} alt="Image" className="img-fluid" />
                                    </div>
                                    <div class="property-specs1">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt soluta id nesciunt reprehenderit placeat cumque voluptatibus blanditiis molestiae ex quibusdam, odit vitae. Quisquam, et! Sapiente consequatur placeat doloribus libero possimus!</p>
                                        <h2 class="d-block caption  text-center">Testing3</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="contact-heading col-md-12" >About Studio Synergy</h2>
            <div className="aboutsynergy">
                <div className="row" style={{ marginTop: '50px', margin: '0px' }}>
                    <div className="col-md-12 aboutsynergy">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="./src/components/images/logo.png" alt="Image 1" className="img-fluid" />
                                <p>G-70 (Lower GR- Office No 3) Sector 63 Noida.</p>
                                <p>thesudiosynergy@gmail.com</p>
                                <p>+91 9910403537</p>
                                +91 9999329616
                            </div>
                            <div className="col-md-8 desriptiondetails ">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quasi molestiae est enim nisi, velit quaerat nam ex nostrum eaque quidem sit sed modi, sint quis magnam iusto, illo autem..</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim expedita doloremque, vitae eum harum dolor eveniet eos sed doloribus soluta quisquam repellendus, tenetur aliquam rem alias consequatur eius nemo!.</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quasi molestiae est enim nisi, velit quaerat nam ex nostrum eaque quidem sit sed modi, sint quis magnam iusto, illo autem..</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim expedita doloremque, vitae eum harum dolor eveniet eos sed doloribus soluta quisquam repellendus, tenetur aliquam rem alias consequatur eius nemo!.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Home;
