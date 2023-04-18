import CartItemsListWithin from "../CartItemsListWithin/CartItemListWithin";
import CartItemsSummary from "../CartItemsSummary/CartItemsSummary";

import "./Cart.css";

function Cart() {

  return (
    <>
      <CartItemsListWithin />
      <CartItemsSummary />
    </>
  );
}

export default Cart;
