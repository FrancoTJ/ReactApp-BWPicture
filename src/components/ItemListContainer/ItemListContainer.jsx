import gFetch from "../../utils/gFetch";
import ItemList from "../ItemList/ItemList";
import { filterCategory } from "../../utils/gFetch";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import EmptyCategory from "../EmptyCategory/EmptyCategory";
import Loading from "../Loading/Loading";
import "./ItemListContainer.css";

function ItemListContainer(props) {
  const [products, setProductos] = useState([]);
  const [loading, setCargando] = useState(true);
  const { selCategory } = useParams();

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

  console.log(products.length);

  return loading ? (
    <Loading />
  ) : (
    <div className="itemListContainer">
      {products.length !== 0 ? (
        <ItemList list={products} />
      ) : (
        <>
          <EmptyCategory />
        </>
      )}
    </div>
  );
}

export default ItemListContainer;
