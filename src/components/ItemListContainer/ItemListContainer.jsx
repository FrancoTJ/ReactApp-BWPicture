import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css";
import EmptySelection from "../EmptySelection/EmptySelection";
import Loading from "../Loading/Loading";
import { filterCategory } from "../../utils/gFetch";
import gFetch from "../../utils/gFetch";

function ItemListContainer(props) {
  const [products, setProductos] = useState([]);
  const [loading, setCargando] = useState(true);
  const { selCategory } = useParams();

  console.log(selCategory)

  useEffect(() => {
    setCargando(true);
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

  return loading ? (
    <Loading />
  ) : (
    <div className="itemListContainer">
      {products.length !== 0 ? (
        <ItemList list={products} />
      ) : (
          <EmptySelection />
      )}
    </div>
  );
}

export default ItemListContainer;
