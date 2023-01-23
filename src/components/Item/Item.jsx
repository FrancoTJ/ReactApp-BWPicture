import { useState } from 'react'

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import placeHolder286 from "../../assets/placeHolder286.png";
import "./Item.css";

function Item() {
  const [ contador , setCount ]  = useState(0)

  const handleCount = () => {
    setCount(contador + 1);
  };

  return (
    <div className="itemContainer">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={placeHolder286} />
        <Card.Body>
          <Card.Title>Tarjeta de Imagen</Card.Title>
          <Card.Text>
            Ejemplo de imagen a listar, definición y características de misma.
          </Card.Text>
          <Button variant="primary" onClick={handleCount}>
            Seleccionado: {contador}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
