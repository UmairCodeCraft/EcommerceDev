import React from "react";
import Mobile1 from "../../Images/m11.jpg";
import Mobile2 from "../../Images/m2.jpg";
import Images1 from "../../Images/m22.jpg";
import Images2 from "../../Images/m23.jpg";
import Product from "./Product";
const Home = () => {
  return (
    <>
      <div className="container pt-5">
        <div id="carousel_home" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carousel_home"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel_home"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel_home"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel_home"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={Mobile1}
                class="d-block w-100"
                alt="Mobile1"
                // height="650px"
              />
            </div>
            <div class="carousel-item">
              <img
                src={Mobile2}
                class="d-block w-100"
                alt="Mobile2"
                // height="650px"
              />
            </div>
            <div class="carousel-item">
              <img
                src={Images1}
                class="d-block w-100"
                alt="Mobile3"
                // height="650px"
              />
            </div>
            <div class="carousel-item">
              <img
                src={Images2}
                class="d-block w-100"
                alt="Mobile3"
                // height="650px"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carousel_home"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carousel_home"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Product />
    </>
  );
};

export default Home;
