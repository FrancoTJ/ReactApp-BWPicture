import { useContext } from "react";
import { CartContext } from "../../utils/CartContext";
import EmptyCart from "../EmptyCart/EmptyCart";
import Cart from "../Cart/Cart";
import "./CartContainer.css";

function CartContainer() {
  const { cartCountItems } = useContext(CartContext);
  let countItems = cartCountItems();

  return <>{countItems ? <Cart /> : <EmptyCart />}</>;
}

export default CartContainer;
