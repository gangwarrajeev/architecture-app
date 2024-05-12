import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/bootstrap.min.css"; // Import the CSS file  bootstrap.min.css

function Footer() {
  return (
    <div class="site-footer">
      <div className="inner first" style={{ marginTop: '30px' }}>
        <div class="container col-sm-12">
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="widget">
                <a href="/" className="logo m-0">
                  <img src="src/components/images/logo.png" alt="The Studio Synergy Logo" className="logo-image" style={{ marginBottom: '15px' }} />
                </a>
                <p>
                  Studio Synergy is a team of professionals with the passion
                  that centers on modern and sensible designs with thoughtful
                  engineering.
                </p>
              </div>
              <div class="widget">
                <ul class="list-unstyled social">
                  <li>
                    <a href="#">
                      <span class="icon-dribbble FontAwesomeIcon"><FontAwesomeIcon icon={faDribbble} /></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-linkedin FontAwesomeIcon"><FontAwesomeIcon icon={faLinkedin} /></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-linkedin FontAwesomeIcon"><FontAwesomeIcon icon={faTwitter} /></span>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <span class="icon-instagram FontAwesomeIcon"><FontAwesomeIcon icon={faInstagram} /></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-linkedin FontAwesomeIcon"><FontAwesomeIcon icon={faFacebook} /></span>

                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg-2 pl-lg-5">
              <div class="widget">
                <h3 class="heading">USEFUL LINKS</h3>
                <ul class="links list-unstyled">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/philosphy">Philosophy</Link>
                  </li>
                  <li>
                    <Link to="/people">People</Link>
                  </li>
                  <li>
                    <Link to="/awards">Awards</Link>
                  </li>
                  <li>
                    <Link to="/media">Media</Link>
                  </li>
                  <li>
                    <Link to="/carrer">Careers</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg-2">
              <div class="widget">
                <h3 class="heading">PROJECTS</h3>
                <ul class="links list-unstyled">
                  <li>
                    <Link to="/architecture">Architecture</Link>
                  </li>
                  <li>
                    <Link to="/interiors">Interiors</Link>
                  </li>
                  <li>
                    <Link to="/projectmanagement">Project Management</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="widget">
                <h3 class="heading">ADDRESS</h3>
                <p>THE STUDIO SYNERGY</p>
                <li class="elementor-icon-list-item">
                  <span class="elementor-icon-list-icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                  <span class="elementor-icon-list-text">
                    G-70 (Lower GR- Office No 3) Sector 63 Noida.
                  </span>
                </li>
                
                <ul class="list-unstyled quick-info links">
                  <li class="email">
                    <a href="mailto:thesudiosynergy@gmail.com">
                      {" "}
                      thesudiosynergy@gmail.com
                    </a>
                  </li>
                  <li class="phone">
                    <a href="tel:+919910403537">+91 9910403537</a>
                  </li>
                  <li class="phone">
                    <a href="tel:+919999329616"> +91 9999329616</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
