import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
const CartBtn = () => {
  const Select = useSelector((state) => state.addItems);
  return (
    <>
      <NavLink className="btn btn-outline-primary" to="/Cart">
        <span className="d-flex align-items-center gap-2">
          <ShoppingCartIcon />
          Cart ({Select.length})
        </span>
      </NavLink>
    </>
  );
};

export default CartBtn;
