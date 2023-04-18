import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useContext } from "react";

import { CartContext } from "../../utils/CartContext";
import Checkout from "../Checkout/Checkout";
import "./CartFinish.css";

export default function CartFinish() {
  const { cartEmpty, cartState, changeCartState } = useContext(CartContext);

  return (
    <>
      {cartState == "inCheckout" || cartState == "orderGenerated" ? (
        <>
          <Checkout />
          <NavLink to={`/`}>
            <Button
              className="cardFinishCheckout"
              variant="success"
              onClick={() => cartEmpty()}
            >
              Finish Checkout...
            </Button>
          </NavLink>
        </>
      ) : (
        <div className="cartFinish">
          <div className="cartCheckout">
            <Button
              className="cardCheckout"
              variant="outline-primary"
              onClick={() => {
                changeCartState("inCheckout");
              }}
            >
              Checkout
            </Button>
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
        </div>
      )}
    </>
  );
}
