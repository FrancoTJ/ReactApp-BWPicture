import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useContext } from "react";
import { CartContext } from "../../utils/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cartItems,
    cartCountItems,
    cartTotalPriceItems,
    removeCartItem,
    cartEmpty,
    cartCheckout,
  } = useContext(CartContext);
  let countItems = cartCountItems();
  let totalPrice = cartTotalPriceItems();

  return (
    <>
      <h1>Shopping Cart:</h1>
      {cartItems.map((item) => (
        <Card key={item.id}>
          <Card.Body className="cartCard">
            <NavLink className="cartCard-Link" to={`/detail/${item.id}`}>
              <Card.Title>
                {/* Id.{item.id} -  */} Name: {item.name}{" "}
                {/*  - Cat: {item.category} */}
              </Card.Title>
              <Card.Img src={item.img} style={{ maxWidth: 100, padding: 10 }} />
            </NavLink>
            <Card.Text>
              {" "}
              Unit price: ${item.price} - Quantity: {item.cartUnits} - Total: ${" "}
              {item.price * item.cartUnits}
            </Card.Text>
            <Button
              className="cardRemoveButton"
              variant="danger"
              onClick={() => removeCartItem(item)}
            >
              X
            </Button>
          </Card.Body>
        </Card>
      ))}
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

export default Cart;
