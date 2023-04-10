import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import FailRoute from "./components/FailRoute/FailRoute";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartContainer from "./components/CartContainer/CartContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./utils/CartContext";
import Checkout from "./components/Checkout/Checkout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:selCategory" element={<ItemListContainer />} />
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<FailRoute />} />
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
