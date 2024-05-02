import React, { useState } from "react";
import { useParams } from "react-router";
import { Product_data } from "./ProductData";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../Redux/action";
const ProductSinglePage = () => {
  const [cartBtn, setCardBtn] = useState("Add to Cart");
  const period = useParams();

  const productDetail = Product_data.filter((x) => x.id == period.id);

  const product = productDetail[0];
  console.log(product);

  // we need to use useDispatch in a variable
  const dispatch = useDispatch();
  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCardBtn("Remove from Cart");
    } else {
      dispatch(removeItem(product));

      setCardBtn("Add to Cart");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row pt-5 mt-3 d-flex align-items-center">
          <div className="col-md-6 text-center">
            {<img src={product.img} alt="" className="single-page-img" />}
          </div>
          <div className="col-md-6">
            <h1 className="">{product.title}</h1>
            <hr />
            <h2>Price: {product.price}</h2>
            <p className="lead fs-4 pt-3">{product.dec}</p>
            <button
              className="btn btn-outline-primary btn-lg my-5 w-100"
              onClick={() => handleCart(product)}
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSinglePage;
