import React from "react";
import { NavLink } from "react-router-dom";
import Login from "../Login";
import Signup from "../Signup";
import CartBtn from "../CartBtn";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5" to="/About">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link fs-5" to="/Contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5" to="/Product">
                  Product
                </NavLink>
              </li>
            </ul>
            <NavLink className="navbar-brand me-auto" to="#">
              APPLE MART
            </NavLink>
            <div className="d-flex gap-md-2 gap-1 align-items-center pt-2 pt-lg-0">
              <Login />
              <Signup />
              <CartBtn />
            </div>
          </div>
          <div className="d-flex gap-md-2 gap-1 align-items-center">
            {/* <Login />
            <Signup />
            <CartBtn /> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
