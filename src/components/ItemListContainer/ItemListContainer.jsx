import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

import ItemList from "../ItemList/ItemList";
import EmptySelection from "../EmptySelection/EmptySelection";
import Loading from "../Loading/Loading";
import "./ItemListContainer.css";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { selCategory } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const queryCollection = collection(db, "products");
    let queryFiltered;
    if (selCategory) {
      queryFiltered = query(
        queryCollection,
        where("category", "==", selCategory)
      );
    } else {
      queryFiltered = queryCollection;
    }
    getDocs(queryFiltered)
      .then((collection) => {
        setProducts(
          collection.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          }))
        );
        setLoading(false);
      })
      .catch((error) => console.log(error));
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
