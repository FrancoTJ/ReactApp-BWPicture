import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { useContext } from "react";
import { CartContext } from "../../utils/CartContext";
import "./CartContainer.css";

function CartContainer() {
  const { cartItems, addCartItem } = useContext(CartContext)

  return (
    <>
      {cartItems.map((item) => (
            <Card key={item.id}>
              <NavLink to={`/detail/${item.id}`}>
                <Card.Body className='cartCard'>
                  <Card.Title>
                    Id.{item.id} - Name: {item.name} {/*  - Cat: {item.category} */}
                  </Card.Title>
                  <Card.Img  src={item.img} style={{ maxWidth: 100,  padding: 10 }}/>
                  <Card.Text> Quantity: {item.cartUnits}</Card.Text>
                </Card.Body>
              </NavLink>
            </Card>
        ))
      }
    </>
  );
}

export default CartContainer;
