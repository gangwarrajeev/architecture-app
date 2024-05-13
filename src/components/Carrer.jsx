import React, { useState } from "react";

const Career = () => {
  const [showJob1Details, setShowJob1Details] = useState(true);
  const [showJob2Details, setShowJob2Details] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleJob1Details = () => {
    setShowJob1Details(!showJob1Details);
  };

  const toggleJob2Details = () => {
    setShowJob2Details(!showJob2Details);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateFormData(formData);
    if (Object.keys(errors).length === 0) {
      // Form is valid, submit data
      console.log("Form data:", formData);
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000); // Reset the submission status after 5 seconds
    } else {
      setErrors(errors);
    }
  };

  const validateFormData = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    if (!data.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(data.phone.trim())) {
      errors.phone = "Invalid phone number";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email.trim())) {
      errors.email = "Invalid email address";
    }
    if (!data.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };



  return (
    <div style={{ backgroundColor: '#ced4da' }}>
      <div>
        <div className="col-md-12">
          <div className="row">
            <img src="./assets/images/property_1-min.jpg" alt="Image 1" className="contact-img" />
          </div>
        </div>
        <h2 className="contact-heading col-md-12">Career</h2>
        <div className="testimonialcontainer">
          <div className="row" style={{ marginTop: '30px' }}>
            <div className="positions">
              <h5>Open Positions</h5>
            </div>
            <div className="col-md-8 box_with_career">
              <div className="job-listing">
                <span className="job-title" onClick={toggleJob1Details}>
                  (1) Required Interior Designer/Architect for an Architecture design studio in Noida.
                </span>
                {showJob1Details && (
                  <div className="job-details">
                    <h5>Experience</h5>
                    0 to 5 years
                    <h5>Qualification</h5>
                    B.Arch.. Interior Diploma
                    <h5>Job Description</h5>
                    <ol>
                      <li>Make Architectural interiors working drawings including floor plans, reflected ceiling plans, wall elevations, blow up Details etc.</li>
                      <li>Specify the specifications in working drawings like finishes, materials, shades, textures etc.</li>
                      <li>Get the Interior work executed at site, as per the working drawings.</li>
                      <li>To check and coordinate the drawings as per site and services conditions.</li>
                      <li>Coordinate with the contractors, material suppliers, and vendors.</li>
                      <li>To attend meetings with the clients, take their instructions and understand their requirements, and coordinate accordingly.</li>
                    </ol>
                    <h5>Please, send your CV to <a href="mailto:thesudiosynergy@gmail.com">thesudiosynergy@gmail.com</a></h5>
                  </div>
                )}
              </div>
              <div className="col-md-8">
                <div className="job-listing">
                  <span className="job-title" onClick={toggleJob2Details} style={{ cursor: 'pointer' }}>
                    (2) Desired profile: BE or Btech Civil.
                  </span>

                  {showJob2Details && (
                    <div className="job-details">
                      <h5>Experience</h5>
                      0 to 5 years
                      <h5>Qualification</h5>
                      B.Arch.. Interior Diploma
                      <ol>
                        <li>Should be very well versed with softwares like Acad, Photoshop, Sketch up, Ppt, excel etc.</li>
                        <li>Knowing the 3D sofwares like Lumen, 3D max etc shall be an added advantage.</li>
                        <li>Should be creative, with good Aesthetic sense.</li>
                        <li>Should be good in hand sketching and colouring.</li>
                        <li>Should have goid knowledge of Interior products, finishes, materials etc.</li>
                        <li>Sholud have experience in handling Interior projects, in designing, making working drawings, and getting them executed.</li>
                        <li>Should be a qualified Architect or an Interior Diploma, from a reputed institution.</li>
                        <li>Should have excellent written and verbal communication skills.</li>
                        <li>Should be comfortable in doing communication in English language.</li>
                        <li>Should be hard working, and having a pleasant personality.</li>
                        <li>Preferred to be residing in Noida.</li>
                      </ol>
                      <h5>Job Description</h5>
                      <p>We, are currently seeking an Civil engineer Professional to join our team, for civil construction part of an Electric Substation in Noida, for which we are the project management consultants.</p>
                      <h5>RESPONSIBILITIES:<br />Preparation of</h5>
                      <p>(A) Bill of quantities <br />(B) Material requirements. <br />(C) Monthly cash flow.<br />(D) Material reconciliation. <br />(E) Checking contractors bills.<br />(F) Coordination of MEP works.<br />(G) Construction Schedule. <br />(H) Monitoring of construction schedule. <br />(I) Quality check reports.<br />(J) Checking of Architecture, Structure and other drawings</p>
                      <p>Should have good written and verbal communication skills.<br />Should be able to deliver work within timelines.</p>
                      <h5>Required Skills</h5>
                      <p>Knowledge of materials.<br />Knowledge of AutoCAD, excel, word.</p>
                      <h5>Preference.</h5>
                      <p>Person who have worked in an electric Substation shall be preferred.</p>
                      <h5>Place of posting.</h5>
                      <p>Noida</p>
                      <h5>Please, send your CV to <a href="mailto:thesudiosynergy@gmail.com">thesudiosynergy@gmail.com</a></h5>
                    </div>
                  )}
                </div>
              </div>

            </div>

            <div className="col-md-4 box_with_career2">
              <h2 className="send-heading">Contact Us</h2>
              {isSubmitted && <div className="alert alert-success mt-3" role="alert">Form submitted successfully!</div>}
              <form style={{ marginBottom: "15px" }} onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Please Enter Name" id="name" name="name" value={formData.name} onChange={handleChange} />
                  {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="text" className="form-control" placeholder="Please Enter Phone Number" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                  {errors.phone && <div className="text-danger">{errors.phone}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Please Enter Email Id" id="email" name="email" value={formData.email} onChange={handleChange} />
                  {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" placeholder="Please Enter Message" rows="3" name="message" value={formData.message} onChange={handleChange}></textarea>
                  {errors.message && <div className="text-danger">{errors.message}</div>}
                </div>
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'black' }}>Submit</button>
               
              </form>
            </div>
          </div>
        </div>
      </div>

      <h2 className="contact-heading col-md-12">What is the client saying</h2>
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

export default Career;