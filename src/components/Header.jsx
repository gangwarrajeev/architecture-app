import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
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
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <nav className="site-nav headerbackground">
        <div className="container">
          <div className="site-navigation">
            <a href="/" className="logo m-0">
              <img src="src/components/images/logo.png" alt="The Studio Synergy Logo" className="logo-image" />
            </a>


            <ul className="js-clone-nav d-none d-lg-inline-block text-left float-right site-menu headernav">
              <li>
                <NavLink exact to="/" activeClassName="active">
                  Home
                </NavLink>
              </li>

              <li className="has-children">
                <NavLink to="#" activeClassName="active">
                  Projects
                </NavLink>
                <ul className="dropdown">
                  <li>
                    <NavLink to="/architecture" activeClassName="active">
                      Architecture
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/interiors" activeClassName="active">
                      Interiors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/projectmanagement" activeClassName="active">
                      Project Management
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="has-children">
                <NavLink to="#" activeClassName="active">
                  AboutUs
                </NavLink>
                <ul className="dropdown">
                  <li >
                    <NavLink to="/people" activeClassName="active">
                      People
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/philosphy" activeClassName="active">
                      Philosophy
                    </NavLink>
                  </li>
                </ul>
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
                <NavLink to="/carrer" activeClassName="active">
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">
                  ContactUs
                </NavLink>
              </li>
            </ul>

            <a
              href=""
              className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none" data-toggle="collapse"
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
