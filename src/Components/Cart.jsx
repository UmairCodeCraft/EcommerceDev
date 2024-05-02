import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "./Redux/action";
import { NavLink } from "react-router-dom";
const Cart = () => {
  const state = useSelector((state) => state.addItems);
  const dispatch = useDispatch();

  const Closehandle = (product) => {
    console.log("Before removal:", state);
    // dispatch(removeItem(productId));
    dispatch(removeItem(product));
    console.log("After removal:", state);
    console.log(product);
  };
  const emptyCart = () => {
    return (
      <div className="container">
        <div className="px-4 py-4 bg-light rounded-3 mt-5">
          <div className="row ">
            <div className="col-12">
              <h3>Your Cart is Empty</h3>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {state.length !== 0 &&
        state.map((cartItem) => {
          return (
            <div className="container" key={cartItem.id}>
              <div className="px-4 py-2 bg-light rounded-3 mt-5">
                <button
                  className="btn-close float-end"
                  onClick={() => Closehandle(cartItem)}
                ></button>
                <div className="row ">
                  <div className="col-md-4">
                    <img
                      src={cartItem.img}
                      alt={cartItem.tittle}
                      className="img-fluid "
                    />
                  </div>
                  <div className="col-md-4">
                    <h3>{cartItem.title}</h3>
                    <p className="lead fs-4 pt-3">${cartItem.price}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && Button()}
    </>
  );
};
const Button = () => {
  return (
    <div className="container my-5 text-center">
      <NavLink to="/CheckOut" className="btn btn-outline-primary btn-lg w-25 ">
        Proceed to checkout
      </NavLink>
    </div>
  );
};

export default Cart;
