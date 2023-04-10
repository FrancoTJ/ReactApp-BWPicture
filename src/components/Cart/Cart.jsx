import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useContext } from "react";
import { CartContext } from "../../utils/CartContext";
import "./Cart.css";

function Cart() {
  const { cartItems, cartCountItems, cartTotalPriceItems, removeCartItem } =
    useContext(CartContext);
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
                    Id.{item.id} - Name: {item.name}{" "}
                    {/*  - Cat: {item.category} */}
                  </Card.Title>
                  <Card.Img
                    src={item.img}
                    style={{ maxWidth: 100, padding: 10 }}
                  />
                </NavLink>
                <Card.Text>
                  {" "}
                  Unit price: ${item.price} - Quantity: {item.cartUnits} -
                  Total: $ {item.price * item.cartUnits}
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
        </>
  )
}

export default Cart;
