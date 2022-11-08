import React from "react";

import About from '../About/About'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'
import { NavLink } from "react-router-dom";
import img from "../../assets/images/girl.png";


const Home = () => {
  return (
    <div>
      <section className="container my-5 py-4">
        <div className="row">
          <div className="col-md-5 mt-5">
            <h1 className="display-5 mb-4">
              I'm Web Developer <br />
              Selvarani
            </h1>
            <p className="lead mb-4">
              Build websites and ensure they perform reliably and efficiently.
              Designing user interfaces and navigation menus. Writing and
              reviewing code for sites, typically HTML, XML, or JavaScript.
              Integrating multimedia content onto a site. Testing web
              applications. Troubleshooting problems with performance or user
              experience Collaborating with designers, and developers
            </p>
            <NavLink
              className="btn btn-outline-primary me-4 mb-5"
              to="/contact"
              role="button"
            >
              Get Started
            </NavLink>
            <NavLink className="btn btn-primary mb-5" to="/about" role="button">
              More about me
            </NavLink>
          </div>

          {/* // image */}

          <div className="col-md-7 d-flex justify-content-center align-items-center">
            <img src={img} alt="" height="300px" width="300px" />
          </div>

          {/* // Image end */}
        </div>
      </section>
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
