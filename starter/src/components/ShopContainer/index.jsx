import React from "react";
import { useSelector } from "react-redux";

import ShopCard from "../ShopCard";

const ShopContainer = () => {
  const {shopItems} = useSelector(store => store.cart);

  return (
    <div className="shop">
      {shopItems && shopItems.map((item) => {
        return (
          <ShopCard key={item.id} {...item} />
        );
      })}
    </div>
  );
};

export default ShopContainer;
