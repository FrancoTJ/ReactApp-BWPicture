import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  //   const [ cartItems, setCartItems ] = useState([{ id: 1, name: "PixelArt Mario", category:'gaming', stock: 10, img:'https://graceful-pothos-e73712.netlify.app/img/mariKart1.jpg', cartUnits: 5 }]); // Test pourpose
  const [cartState, setCartState] = useState("buying");
  // const [cartOrder, setCartOrder] = useState();
  console.log(cartState)

  const changeCartState = (state) => {
    if (["buying", "inCheckout", "orderGenerated"].includes(state)) {
      //Delimited states
      setCartState(state);
    } else {
      console.log("Error in CartState");
    }
  };

  const addCartItem = (Item) => {
    let position = cartItems.findIndex((product) => product.id == Item.id);
    if (position == -1) {
      // Not exist in cart
      Item.cartUnits = 1;
      setCartItems((oldItems) => [...oldItems, Item]);
    } else {
      // Already in Cart
      setCartItems(
        cartItems.map((Item) =>
          Item.id === cartItems[position].id
            ? { ...Item, cartUnits: cartItems[position].cartUnits + 1 }
            : { ...Item }
        )
      );
      changeCartItemsState();
    }
  };

  const lessCartItem = (ItemTest) => {
    let position = cartItems.findIndex((product) => product.id == ItemTest.id);
    if (position != -1) {
      // Already in Cart
      setCartItems(
        cartItems.map((Item) =>
          Item.id === cartItems[position].id
            ? { ...Item, cartUnits: cartItems[position].cartUnits - 1 }
            : { ...Item }
        )
      );
      changeCartItemsState();
    }
  };

  const removeCartItem = (Item) => {
    setCartItems(cartItems.filter((Product) => Product.id != Item.id));
    changeCartItemsState();
  };

  const cartEmpty = () => {
    setCartItems([]);
    changeCartItemsState();
  };

  const changeCartItemsState = () => {
    cartState != "buying" && setCartItems([]);
    changeCartState("buying");
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
        cartState,
        addCartItem,
        lessCartItem,
        cartFindItem,
        cartCountItems,
        cartTotalPriceItems,
        removeCartItem,
        cartEmpty,
        changeCartState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
