import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useContext } from "react";
import { CartContext } from "../../utils/CartContext";
import "./ItemDetail.css";

function ItemDetail({ product }) {
  const { cartItems, addCartItem, cartFindItem } = useContext(CartContext);
  let itemInCart = cartFindItem(product);

  return (
    <div className="itemDetailContainer">
      <h2 className="itemDetailContainer-title">Product Selected Detail:</h2>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <NavLink to={`/detail/${product.id}`}>
            <Card.Img variant="top" src={product.img} />
            <Card.Title>
              <span className="card-lblId">Id:</span> {product.id} -{" "}
              <span className="card-lblName">Name:</span> {product.name}{" "}
            </Card.Title>
            <Card.Text>
              <span className="card-lblCategory">Category:</span>{" "}
              {product.category} -{" "}
              <span className="card-lblQuantity">Stock:</span> {product.stock}
              <br />
              <span className="card-price">
                <span className="card-lblPrice">Price: </span>
                <span className="card-lblPriceMount">${product.price}</span>
              </span>
            </Card.Text>
          </NavLink>
          <div className="cardDetailBuy">
            <NavLink to={`/cart`}>
              <Button
                variant="primary"
                className="cardButton"
                onClick={() => !itemInCart && addCartItem(product)}
              >
                Buy
              </Button>
            </NavLink>

            <Button
              variant="success"
              className="cardButton"
              onClick={() => addCartItem(product)}
              disabled={itemInCart?.cartUnits >= product.stock}
            >
              Add {itemInCart && `(In cart: ${itemInCart.cartUnits})`}
            </Button>
          </div>

          <div className="cardReturn">
            <NavLink to={`/`}>
              <Button
                variant={itemInCart ? "outline-success" : "outline-secondary"}
                className="cardButton"
              >
              {itemInCart ? "Continue shopping..." : "Back"}
              </Button>
            </NavLink>

          </div>


        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail;
