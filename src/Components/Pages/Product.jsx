import React from "react";
import { Product_data } from "./ProductData";
import { NavLink } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Product</h1>
            <hr />
          </div>
        </div>
        <div className="row pt-lg-5 pt-3 mt-lg-3 mt-0 gy-5 products">
          {Product_data.map((data, id) => {
            return (
              <div className="col-lg-4 col-md-2 col-12" key={data.id}>
                <div
                  className="card w-100 shadow bg-body-tertiary"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={data.img}
                    className="card-img-top"
                    height="400px"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="lead">${data.price}</p>
                    <NavLink
                      to={`/Product/${data.id}`}
                      className="btn btn-outline-primary"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
