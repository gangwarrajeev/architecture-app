import React from "react";

const People = () => {
  return (
<div style={{ backgroundColor: '#ced4da' }}>
      <div className="col-md-12">
        <div className="row">
          <img src="./src/components/images/property_1-min.jpg" alt="Image 1" className="contact-img" />
        </div>
      </div>
      <h2 className="contact-heading col-md-12" >People</h2>
      <div className="container ">
        <div className="row" style={{ marginTop: '50px' }}>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <img src="./src/components/images/team2-1-250x300.jpg" alt="Image 1" className="img-fluid" />

              </div>
              <div className="col-md-8">
                <h4>NITIN AGARWAL</h4>
                <p>DIRECTOR</p>
                <h5>B.ARCH( HONS) IIT KHARAGPUR 1994</h5>
                <p>Wide experience across architectural design and project management– expertise in, designing, planning, monitoring and coordinating multidimensional execution of projects across the globe.</p>
                <p>Has worked with Multinational firms and real estate firms of NCR. Have quite a few noticeable Architecture and interior design Projects under his belt.</p>
              </div>
            </div>
          </div>

          <div className="col-md-12" style={{ marginTop: '30px' }}>
            <div className="row">
              <div className="col-md-4">
                <img src="./src/components/images/team1-250x300.jpg" alt="Image 1" className="img-fluid" />

              </div>
              <div className="col-md-8">
                <h4>POOJA AGARWAL</h4>
                <p>DIRECTOR</p>
                <h5>B.ARCH –“TVB SCHOOL OF HABITAT STUDIES” 2003</h5>
                <p>Pooja has worked on a wide variety of projects including large mixed land use projects, High Rise Towers, Luxury Residences, commercial, corporate workspaces High ended Hospitality and Interior design projects.</p><p>Her work ethos has been developed around the courage to take chances…to be innovative in design concept without the fear of failing.</p>
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
                        <div class="col-md-6 col-lg-4">
                            <div class="property-entry">
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
    </div>
  );
};

export default People;
