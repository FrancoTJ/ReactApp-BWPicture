import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import FailRoute from "./components/FailRoute/FailRoute";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/CartContainer/CartContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import CartContextProvider from "./utils/CartContext";

export function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greetings="sin ruta indicada" />} />
        <Route path="/category/:selCategory" element={<ItemListContainer />} />
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="*" element={<FailRoute />} />
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
