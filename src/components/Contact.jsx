import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      <div className="col-md-12 ">
        <div className="row">
          <img src="./src/components/images/property_1-min.jpg" alt="Image 1" className="contact-img" />
        </div>
      </div>
      <h2 className="contact-heading col-md-12 " >Contact Us</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 box_with_border" style={{ marginTop: "61px" }}>
            <p className="studio">THE STUDIO SYNERGY</p>
            <h3 className="add">Address</h3>
            <p className="address">G-70 (Lower GR- Office No 3) Sector 63 Noida.</p>
            <h3 className="add">Email</h3>
            <p className="address">thesudiosynergy@gmail.com</p>
            <h3 className="add">Mobile No</h3>
            <p className="address">+91 9910403537</p>
            <p className="address">+91 9999329616</p>
            <a href="/" className="logo m-0">
              <img src="./src/components/images/logo.png" alt="The Studio Synergy Logo" className="logo-image" />
            </a>
          </div>
          <div className="col-md-6 box_with_border2" style={{ marginTop: "61px" }}>
            <h2 className="send-heading">SEND US A MESSAGE</h2>
            {isSubmitted && <div className="alert alert-success" role="alert">Form submitted successfully!</div>}
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

export default Contact;
