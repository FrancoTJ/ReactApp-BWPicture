import React from 'react';
import {useState} from 'React';

function CartWidget() {
    const [numArticulos, sumArticulo] = useState(0)
  
    const handleSumArticulos = () => {
      sumArticulo(numArticulos + 1)
    }

    return (
      <>
        🛒(<span className='numero-carrito' title='Click just to test' onClick={handleSumArticulos}>{numArticulos}</span>)
      </>
    )
  }
  
  export default CartWidget;