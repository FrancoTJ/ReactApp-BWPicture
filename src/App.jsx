import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import FailRoute from "./components/FailRoute/FailRoute";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greetings="sin ruta indicada" />} />
        <Route path="/category/:selCategory" element={<ItemListContainer />} />
        {/* <Route path="/category" element={<ItemListContainer greetings="nature" />} /> */}

        <Route path="/detail/:idProducto" element={<ItemDetailContainer />} />
        <Route path="*" element={<FailRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
