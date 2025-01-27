import React from "react";
import { useSelector } from "react-redux";

import CartItem from "../CartItem";

const CartContainer = () => {
  const {amount, cartItems} = useSelector(store => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        {/* cart header */}

        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>

      {/* cart items */}
      <div>
        {cartItems.map(item => {
          return <CartItem
            key={item.id}
            {...item}
          />;
        })}
      </div>
    </section>
  );
};

export default CartContainer;

