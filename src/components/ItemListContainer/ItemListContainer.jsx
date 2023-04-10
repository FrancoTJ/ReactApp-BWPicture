import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import EmptySelection from "../EmptySelection/EmptySelection";
import Loading from "../Loading/Loading";
import gFetch, { filterCategory } from "../../utils/gFetch";
import "./ItemListContainer.css";

function ItemListContainer(props) {
  const [products, setProductos] = useState([]);
  const [loading, setCargando] = useState(true);
  const { selCategory } = useParams();

  useEffect(() => {
    setCargando(true);
    gFetch().then((res) => {
      setCargando(false);
      if (selCategory) {
        return setProductos(filterCategory(selCategory));
      } else {
        return setProductos(res);
      }
    });
    // .catch((error) => console.log(error));
    // .finally(() => console.log("Hacer algo al final si se necesita"));
  }, [selCategory]);

  return loading ? (
    <Loading />
  ) : (
    <>
      {products.length !== 0 ? (
        <ItemList list={products} />
      ) : (
        <EmptySelection />
      )}
    </>
  );
}

export default ItemListContainer;
