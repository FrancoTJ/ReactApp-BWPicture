import CartItemsListWithin from "../CartItemsListWithin/CartItemListWithin";
import CartDataClient from "../CartDataClient/CartDataClient";
import CartFinish from "../CartFinish/CartFinish";

import "./Cart.css";

function Cart() {

  return (
    <>
      <CartItemsListWithin />
      <CartDataClient />
      <CartFinish />
    </>
  );
}

export default Cart;
