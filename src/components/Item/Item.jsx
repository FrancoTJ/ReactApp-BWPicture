import { useState } from 'react'

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Item.css";

function Item(props) {
// function handleCount(){
//   console.log("clicked")
// }


  return (
    <div className="itemContainer">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>(Id.{props.id}) {props.name} </Card.Title>
          <Card.Text>
            
            Category: {props.category}, Stock: {props.stock}
          </Card.Text>
          {/* <Button variant="primary" onClick={handleCount}>
            Seleccionado: {contador}
          </Button> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
