import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

const Interiors = () => {
  const [images] = useState(shuffleArray([
    "./assets/images/property_1-min.jpg",
    "./assets/images/images/property_2-min.jpg",
    "./assets/images/images/property_3-min.jpg",
    "./assets/images/images/property_2-min.jpg",
    "./assets/images/images/property_3-min.jpg",
    "./assets/images/images/property_2-min.jpg",
    "./assets/images/images/property_1-min.jpg",
    "./assets/images/images/property_2-min.jpg",
    "./assets/images/images/property_3-min.jpg",
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
  ]);

  const imagesPerPage = 3;
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
    <div>
       <div className="col-md-12 ">
        <div className="row">
          <img src="./assets/images/property_1-min.jpg" alt="Image 1" className="contact-img" />
        </div>
      </div>
      <h2 className="contact-heading col-md-12">Architecture</h2>
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
      <h2 className="contact-heading col-md-12" >What is the client saying</h2>
      <div class="untree_co-section bg-light">
        <div class="testimonialcontainer">
          <div className='testimonial1'>
            <div class="row ">
              <div class="col-md-6 col-lg-4">
                <div class="property-entry">
                  <div className="d-flex justify-content-center">
                    <img src="./assets/images/property_1-min.jpg" style={{ width: '100px' }} alt="Image" className="img-fluid" />
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
                    <img src="./assets/images/property_2-min.jpg" style={{ width: '100px' }} alt="Image" className="img-fluid" />
                  </div>
                  <div class="property-specs1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt soluta id nesciunt reprehenderit placeat cumque voluptatibus blanditiis molestiae ex quibusdam, odit vitae. Quisquam, et! Sapiente consequatur placeat doloribus libero possimus!</p>
                    <h2 class="d-block caption  text-center">Testing2</h2>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="property-entry">
                  <div className="d-flex justify-content-center">
                    <img src="./assets/images/property_3-min.jpg" style={{ width: '100px' }} alt="Image" className="img-fluid" />
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
    </div>
  );
};

export default Interiors;
