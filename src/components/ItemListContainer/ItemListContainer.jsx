import { useEffect, useState } from "react";
import gFetch from "../../utils/gFetch";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

function ItemListContainer(props) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    gFetch()
      .then((res) => {
        setCargando(false);
        // console.log(res)
        return setProductos(res);
      })
      .catch((error) => console.log(error))
      // .finally(() => console.log("Hacer algo al final si se necesita"));
  }, []);

  return cargando ? (
    <p>Cargando...</p>
  ) : (
    <div className="itemListContainer">
      <ItemList list={productos}/>
    </div>
  );
}

export default ItemListContainer;
