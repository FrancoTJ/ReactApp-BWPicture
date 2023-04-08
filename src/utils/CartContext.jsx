import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [ cartItems, setCartItems ] = useState([]);

  const addCartItem = (Item) => {
    let position = cartItems.findIndex(product => product.id == Item.id)
    console.log(position)
    if(position == -1){ //No existe en listado
        console.log("si no existe intenta agregar")
        Item.cartUnits = 1;
        setCartItems(oldItems => [...oldItems, Item])
        console.log(cartItems)
        console.log("agregó y puso 1")
    } else { //Si existe en listado
        console.log("intenta sumar 1")
        // let auxCartList = cartItems
        // auxCartList[position].cartUnits++
        // setCartItems(cartItems=auxCartList)


        setCartItems(
            cartItems.map((Item) =>
                // Here you accept a id argument to the function and replace it with hard coded 🤪 2, to make it dynamic.
                Item.id === cartItems[position].id
                    ? { ...Item, cartUnits: cartItems[position].cartUnits + 1 }
                    : { ...Item }
            )
        );



        console.log("sumó 1")
    }
    console.log(cartItems)

  };

  const cartFindItem = (Item) => {
    console.log("cartFindItem")
    return cartItems.find(product => product.id == Item.id)
  };

//   const cartFindIndexItem = (Item) => {
//     console.log("cartCountItem")
//     return cartItems.find(product => product.id == Item.id)
//   };

  return (
    <CartContext.Provider value={{
        cartItems,
        addCartItem,
        cartFindItem
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
