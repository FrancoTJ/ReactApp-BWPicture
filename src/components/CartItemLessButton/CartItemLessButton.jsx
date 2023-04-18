import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useContext } from "react";

import { CartContext } from "../../utils/CartContext";

const CartItemLessButton = (item) => {
  const { lessCartItem } = useContext(CartContext);

  return (
    <>
  
    </>
  );
};

export default CartItemLessButton;
