import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ItemDetailContainer.css";
import Loading from "../Loading/Loading";
import EmptySelection from "../EmptySelection/EmptySelection";
import ItemDetail from "../ItemDetail/ItemDetail";
import gFetch from "../../utils/gFetch";
import { findProduct } from "../../utils/gFetch";

function ItemDetailContainer() {
  const [oneProduct, setOneProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { idProduct } = useParams();

  useEffect(() => {
    setLoading(true);
    gFetch().then((res) => {
      setLoading(false);
      if (idProduct) {
        return setOneProduct(findProduct(idProduct));
      }
    });
    // .catch((error) => console.log(error));
  }, [idProduct]);

  return loading ? (
    <Loading />
  ) : (
    <div className="itemListContainer">
      {oneProduct ? <ItemDetail producto={oneProduct} /> : <EmptySelection />}
    </div>
  );
}

export default ItemDetailContainer;
