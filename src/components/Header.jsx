import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

  const [isRightSideActive, setRightSideActive] = useState(false);
  const openRightSideBar = () => {
    try {
      if (isRightSideActive) {
        document.body.classList.remove('offcanvas-menu');
      } else {
        document.body.classList.add('offcanvas-menu');

      }
      setRightSideActive(prevState => !prevState);
      // alert('helo');
      // Jquery('.js-menu-toggle').toggle('active');
    } catch (e) {
      console.log('error', e);
    }
  };
  const closeRightSideMenu = () => {
    setRightSideActive(prevState => !prevState);
    document.body.classList.remove('offcanvas-menu');
  };
  return (
    <div>
      <div className="lines-wrap">
        <div className="lines-inner">
          <div className="lines"></div>
        </div>
      </div>

      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle" onClick={closeRightSideMenu}></span>
          </div>
        </div>
        <div className="site-mobile-menu-body">
    <ul>
        <li>
            <NavLink exact to="/" activeClassName="active">
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/projects" activeClassName="active">
                Projects
            </NavLink>
        </li>
        {/* Add more links below */}
        <li>
            <NavLink to="/about" activeClassName="active">
                AboutUs
            </NavLink>
        </li>
        <li>
            <NavLink to="/awards" activeClassName="active">
                Awards
            </NavLink>
        </li>
        <li>
            <NavLink to="/media" activeClassName="active">
                Media
            </NavLink>
        </li>
        <li>
            <NavLink to="/career" activeClassName="active">
                Careers
            </NavLink>
        </li>
        <li>
            <NavLink to="/contact" activeClassName="active">
                ContactUs
            </NavLink>
        </li>
        {/* Add as many links as needed */}
    </ul>
</div>

      </div>

      <nav className="site-nav headerbackground">
        <div className="container">
          <div className="site-navigation">
            <a href="/" className="logo m-0">
              <img src="./assets/images/logo.png" alt="The Studio Synergy Logo" className="logo-image" />
            </a>


            <ul className="js-clone-nav d-none d-lg-inline-block text-left float-right site-menu headernav">
              <li className="right-side-menu-links">
                <NavLink exact to="/" className="active">
                  Home
                </NavLink>
              </li>

              <li className="has-children right-side-menu-links">
                <NavLink to="#" className="active">
                  Projects
                </NavLink>
                <ul className="dropdown">
                  <li className="right-side-menu-links">
                    <NavLink to="/architecture" className="active">
                      Architecture
                    </NavLink>
                  </li>
                  <li className="right-side-menu-links">
                    <NavLink to="/interiors" className="active">
                      Interiors
                    </NavLink>
                  </li>
                  <li className="right-side-menu-links">
                    <NavLink to="/projectmanagement" className="active">
                      Project Management
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="has-children right-side-menu-links">
                <NavLink to="#" className="active">
                  AboutUs
                </NavLink>
                <ul className="dropdown">
                  <li className="right-side-menu-links">
                    <NavLink to="/people" className="active">
                      People
                    </NavLink>
                  </li>
                  <li className="right-side-menu-links">
                    <NavLink to="/philosphy" className="active">
                      Philosophy
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="right-side-menu-links">
                <NavLink to="/awards" className="active">
                  Awards
                </NavLink>
              </li>
              <li className="right-side-menu-links">
                <NavLink to="/media" className="active">
                  Media
                </NavLink>
              </li>
              <li className="right-side-menu-links">
                <NavLink to="/carrer" className="active">
                  Careers
                </NavLink>
              </li>
              <li className="right-side-menu-links">
                <NavLink to="/contact" className="active">
                  ContactUs
                </NavLink>
              </li>
            </ul>

            <a
              href="#"
              onClick={openRightSideBar}
              className={"burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none" + (isRightSideActive ? ' active ' : '')} data-toggle="collapse"
              data-target="#main-navbar">
              <span></span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}


export default Navbar;
