import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useContext } from "react";
import { CartContext } from "../../utils/CartContext";
import "./ItemDetail.css";

function ItemDetail({ product }) {
  const { cartItems, addCartItem, cartFindItem } = useContext(CartContext)
  let itemInCart = cartFindItem(product)

  return (
    <div className="itemDetailContainer">
      <h2 className="itemDetailContainer-title">Product Selected Detail:</h2>
      <Card style={{ width: "18rem" }}>
        <NavLink to={`/detail/${product.id}`}>
          <Card.Body>
            <Card.Img variant="top" src={product.img} />
            <Card.Title>
              <span className="card-lblId">Id:</span> {product.id} -{" "}
              <span className="card-lblName">Name:</span> {product.name}{" "}
            </Card.Title>
            <Card.Text>
              <span className="card-lblCategory">Category:</span>{" "}
              {product.category} -{" "}
              <span className="card-lblQuantity">Stock:</span>{" "}
              {product.stock}
            </Card.Text>
            <div className="cardDetailBuy">
            {/* {itemInCart && <span className="cardUnitsInCart">(In cart: {itemInCart.cartUnits}) </span>} */}
              {/* {console.log(cartItems)}
              {console.log(cartFindItem(product))} */}
              <Button variant="success" onClick={() => addCartItem(product)}>
                Add {itemInCart && `(In cart: ${itemInCart.cartUnits})`}
              </Button>
            </div>
          </Card.Body>
        </NavLink>
      </Card>
    </div>
  );
}

export default ItemDetail;
