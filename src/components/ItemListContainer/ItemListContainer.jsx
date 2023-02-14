import gFetch from "../../utils/gFetch";
import ItemList from "../ItemList/ItemList";
import { filterCategory } from "../../utils/gFetch";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ItemListContainer.css";

function ItemListContainer(props) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { selCategory } = useParams();
  

  useEffect(() => {
    setCargando(true)
    gFetch()
      .then((res) => {
        setCargando(false);
        // console.log(res)
        if (selCategory) {
          return setProductos(filterCategory(selCategory));
        } else {
          return setProductos(res);
        }
      })
      .catch((error) => console.log(error));
    // .finally(() => console.log("Hacer algo al final si se necesita"));
  }, [selCategory]);

  console.log(productos.length)

  return cargando ? (
    <p>Cargando...</p>
  ) : (
    <div className="itemListContainer">
      {productos.length !== 0
      ?
      <ItemList list={productos} />
      : <p>No hay artículos en esta categoría</p>
    }
    </div>
  );
}

export default ItemListContainer;
