import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/modal/modalSlice";

const CartFooter = () => {
    const dispatch = useDispatch();
    const {total} = useSelector(store => store.cart);

  return (
      <footer>
        <hr />

        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>

        <button
          className="btn clear-btn"
          onClick={() => dispatch(openModal())}
        >clear cart</button>
      </footer>
  );
};

export default CartFooter;
