import { useParams } from "react-router-dom";
import { findProducto } from "../../utils/gFetch";

import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const { idProducto } = useParams();
  const producto = findProducto(idProducto);
  return producto ? (
    <div className="itemDetailContainer">
      <p>Detalle de producto seleccionado:</p>
      <Card style={{ width: "18rem" }}>
        <NavLink to={`/detail/${producto.id}`}>
          <Card.Body>
            <Card.Title>
              {producto.id}. {producto.name}{" "}
            </Card.Title>
            <Card.Img variant="top" src={producto.img} />
            <Card.Text>
              Cat: {producto.category} - Qty: {producto.stock}
            </Card.Text>

            {/* <Button variant="primary" onClick={handleCount}>
            Seleccionado: {contador}
          </Button> */}
          </Card.Body>
        </NavLink>
      </Card>
    </div>
  ) : (
    <div className="itemDetailContainer">
      <p>Producto inexistente...</p>
    </div>
  );
}

export default ItemDetailContainer;
