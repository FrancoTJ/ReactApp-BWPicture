import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useContext } from "react";

import { CartContext } from "../../utils/CartContext";

export default function CartItemsSummary() {
  const { cartCountItems, cartTotalPriceItems, cartEmpty } =
    useContext(CartContext);

  let countItems = cartCountItems();
  let totalPrice = cartTotalPriceItems();

  return (
    <>
      <h3>
        Total Units: {countItems} - Total Price: ${totalPrice}
      </h3>
      <div className="cartCheckout">
        <NavLink to={`/checkout`}>
          <Button
            className="cardCheckout"
            variant="outline-primary"
            // onClick={() => {
            //   cartCheckout(generateOrder())}}
          >
            Checkout
          </Button>
        </NavLink>
        <NavLink to={`/`}>
          <Button
            className="cardEmpty"
            variant="outline-danger"
            onClick={() => cartEmpty()}
          >
            Empty Cart
          </Button>
        </NavLink>
      </div>
    </>
  );
}
