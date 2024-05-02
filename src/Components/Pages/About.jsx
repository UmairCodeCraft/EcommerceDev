import React from "react";
import { NavLink } from "react-router-dom";
import AboutImg from "../../Images/about_img.jpg";
const About = () => {
  return (
    <>
      <div className="container">
        <div className="row pt-3 pt-lg-5 gy-3">
          <div className="col-lg-6 order-lg-0 order-1">
            <h1>About Us</h1>
            <p className="lead pe-lg-3">
              Welcome to our dedicated Sales Section, where our expert team
              curates a selection of premium products just for you. Explore
              unbeatable deals and discounts across various categories,
              handpicked by our team to ensure quality and value. Whether you're
              into tech gadgets, fashion essentials, or lifestyle upgrades, our
              team is committed to bringing you the best. Dive into a seamless
              shopping experience, guided by our knowledgeable team to make your
              choices easier. Join us in this exciting journey of discovering
              and enjoying top-notch products at incredible prices. Elevate your
              shopping game with our team's passion for quality and savings!
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary">
              Contact Us
            </NavLink>
          </div>
          <div className="col-lg-6 order-lg-1 order-0">
            <img src={AboutImg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
