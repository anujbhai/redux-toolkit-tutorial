import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromShop, updateCartQuantity } from "../../features/cart/cartSlice";

const ShopCard = props => {
  const {id, img, price, title} = props;
  const {shopItems} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const targetItem = shopItems.filter(item => item.id === id);

  console.log("render shop card");
  
  return (
    <article key={id} className="shop-card">
      <h4>{title}</h4>

      <figure>
        <img alt={title} src={img} />

        <figcaption>{price}</figcaption>
      </figure>

      <button
        type="button"
        className="btn confirm-btn"
        onClick={() => {
          dispatch(addToCart(targetItem[0]));
          dispatch(updateCartQuantity())
          dispatch(removeFromShop(id));
        }}
      >Add to cart</button>
    </article>
  );
};

export default ShopCard;
