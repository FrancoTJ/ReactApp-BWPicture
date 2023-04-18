import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import Loading from "../Loading/Loading";
import EmptySelection from "../EmptySelection/EmptySelection";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const [oneItem, setOneItem] = useState();
  const [loading, setLoading] = useState(true);
  const { idProduct } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const query = doc(db, "products", idProduct);
    getDoc(query)
      .then((document) =>
        setOneItem({ id: document.id, ...document.data() })
      )
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [idProduct]);

  return loading ? (
    <Loading />
  ) : (
    <div className="itemListContainer">
      {oneItem ? <ItemDetail item={oneItem} /> : <EmptySelection />}
    </div>
  );
}

export default ItemDetailContainer;
