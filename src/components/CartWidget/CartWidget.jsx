import React from 'react';
import { useContext } from "react";
import { CartContext } from "../../utils/CartContext";

function CartWidget() {
  const { cartCountItems } = useContext(CartContext)
  let countItems = cartCountItems()

    return (
      <>
        🛒(<span className='numero-carrito'>{countItems}</span>)
      </>
    )
  }
  
  export default CartWidget;