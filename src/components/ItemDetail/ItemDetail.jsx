import { NavLink } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./ItemDetail.css";

function ItemDetail({ producto }) {
  return (
    <div className="itemDetailContainer">
      <h2 className="itemDetailContainer-title">Product Selected Detail:</h2>
      <Card style={{ width: "18rem" }}>
        <NavLink to={`/detail/${producto.id}`}>
          <Card.Body>
            <Card.Img variant="top" src={producto.img} />
            <Card.Title>
              <span className="card-lblId">Id:</span> {producto.id} -{" "}
              <span className="card-lblName">Name:</span> {producto.name}{" "}
            </Card.Title>
            <Card.Text>
              <span className="card-lblCategory">Category:</span>{" "}
              {producto.category} -{" "}
              <span className="card-lblQuantity">Quantity:</span>{" "}
              {producto.stock}
            </Card.Text>

            {/* <Button variant="primary" onClick={handleCount}>
            Seleccionado: {contador}
          </Button> */}
          </Card.Body>
        </NavLink>
      </Card>
    </div>
  );
}

export default ItemDetail;
