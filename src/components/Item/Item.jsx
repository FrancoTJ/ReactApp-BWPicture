import { NavLink } from "react-router-dom";
import { useState } from "react";

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
        <NavLink to={`/detail/${props.id}`} > 
          <Card.Body>
            <Card.Title>
              {props.id}. {props.name}{" "}
            </Card.Title>
            <Card.Img variant="top" src={props.img} />
            <Card.Text>
              Cat: {props.category} - Qty: {props.stock}
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

export default Item;
