import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartContainer from "./components/CartContainer";
import CartFooter from "./components/CartFooter";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import ShopContainer from "./components/ShopContainer";
import { calculateTotals, getShopItems } from "./features/cart/cartSlice";

function App() {
  const {cartItems, shopItems, isLoading} = useSelector(store => store.cart);
  const {isOpen} = useSelector(store => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, shopItems, dispatch]);

  useEffect(() => {
    dispatch(getShopItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">Loading ...</div>
    );
  }
  
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <ShopContainer />
      <CartContainer />
      <CartFooter />
    </main>
  );
}
export default App;
