import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  //   const [ cartItems, setCartItems ] = useState([{ id: 1, name: "PixelArt Mario", category:'gaming', stock: 10, img:'https://graceful-pothos-e73712.netlify.app/img/mariKart1.jpg', cartUnits: 5 }]);

  const addCartItem = (Item) => {
    let position = cartItems.findIndex((product) => product.id == Item.id);
    if (position == -1) {
      //No existe en listado
      Item.cartUnits = 1;
      setCartItems((oldItems) => [...oldItems, Item]);
    } else {
      //Si ya existe en listado
      setCartItems(
        cartItems.map((Item) =>
          Item.id === cartItems[position].id
            ? { ...Item, cartUnits: cartItems[position].cartUnits + 1 }
            : { ...Item }
        )
      );
    }
  };

  const removeCartItem = (Item) => {
    setCartItems(
      cartItems.filter((Product) => Product.id != Item.id)
    );
  };

  const cartFindItem = (Item) => {
    return cartItems.find((product) => product.id == Item.id);
  };

  const cartCountItems = () => {
    return cartItems.reduce(function (accumulator, Item) {
      return accumulator + Item.cartUnits;
    }, 0);
  };

  const cartTotalPriceItems = () => {
    return cartItems.reduce(function (accumulator, Item) {
      return accumulator + Item.price * Item.cartUnits;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCartItem,
        cartFindItem,
        cartCountItems,
        cartTotalPriceItems,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
