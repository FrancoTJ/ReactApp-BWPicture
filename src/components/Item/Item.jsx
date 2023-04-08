import { NavLink } from "react-router-dom";

import Card from "react-bootstrap/Card";
import "./Item.css";

function Item(props) {
  return (
    <div className="itemContainer">
      <Card style={{ width: "18rem" }} key={props.id}>
        <NavLink to={`/detail/${props.id}`}>
          <Card.Body>
            <Card.Title>
              {props.id}. {props.name}{" "}
            </Card.Title>
            <Card.Img variant="top" src={props.img} />
            <Card.Text>
               Cat: {props.category} {/* - Stock: {props.stock} */}
            </Card.Text>


          </Card.Body>
        </NavLink>
      </Card>
    </div>
  );
}

export default Item;
