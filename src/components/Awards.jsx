import React from "react";

const Awards = () => {
  return (
    <div style={{ backgroundColor: '#ced4da' }}>
      <div className="col-md-12">
        <div className="row">
          <img src="./assets/images/property_1-min.jpg" alt="Image 1" className="contact-img" />
        </div>
      </div>
      <h2 className="contact-heading col-md-12" >Awards</h2>
      <div className="testimonialcontainer ">
        <div className="row" style={{ marginTop: '50px' }}>
          <div className="col-md-8">
            {/* Image Gallery */}
            <div className="row">
              <div className="col-md-6">
                <img src="./assets/images/media1-500x357.jpg" alt="Image 1" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <img src="./assets/images/media2-500x357.jpg" alt="Image 2" className="img-fluid" />
              </div>

              {/* Add more images as needed */}
            </div>
          </div>

          <div className="col-md-4">
            {/* YouTube Videos */}
            <div className="row">
              <div className="">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/VIDEO_ID_HERE" allowFullScreen></iframe>
                </div>
              </div>
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

export default Awards;
