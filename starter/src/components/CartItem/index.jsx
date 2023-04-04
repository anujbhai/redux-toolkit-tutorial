import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ChevronDown, ChevronUp } from "../../icons";
import { addToShop, decrease, increase, removeItem } from "../../features/cart/cartSlice";

const CartItem = props => {
  const {id, img, title, price, amount} = props;
  const {cartItems} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const targetItem = cartItems.filter(item => item.id === id);

  return (
    <article className="cart-item">
      <img src={img} alt={title} />

      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>

        <button
          className="remove-btn"
          onClick={() => {
            dispatch(addToShop(targetItem[0]));
            dispatch(removeItem(id));
          }}
        >remove</button>
      </div>

      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increase({id}));
          }}
        >
          <ChevronUp />
        </button>

        <p className="amount">{amount}</p>

        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(addToShop(targetItem[0]));
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({id}));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;

