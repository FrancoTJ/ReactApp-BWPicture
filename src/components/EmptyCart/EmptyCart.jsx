import { NavLink } from "react-router-dom";

import errorImage from "../../assets/technicalDificulties.jpg";
import "./EmptyCart.css";

function EmptyCart() {
  return (
    <div className="emptyCart">
      <NavLink to={`/`}>
        <div>
          <h2 className="emptyCart-text">🎁 Your cart is empty, select the products you like to buy...</h2>
          <img className="emptySelection-image" src={errorImage} />
        </div>
      </NavLink>
    </div>
  );
}

export default EmptyCart;
