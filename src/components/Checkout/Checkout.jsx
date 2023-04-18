import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { useContext } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import { CartContext } from "../../utils/CartContext";
import Loading from "../Loading/Loading";
import "./Checkout.css";

function Checkout() {
  const [loading, setLoading] = useState(true);
  const [confirmation, setconfirmation] = useState();
  const [confirmedOrder, setConfirmedOrder] = useState();
  const { cartItems, cartEmpty, cartCountItems, cartTotalPriceItems } =
    useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    if (cartCountItems() == 0) {
      setconfirmation("");
      setLoading(false);
    } else {
      //Datos del comprador hardcodeados a modo de prueba. El resto de los datos se toman del carrito.
      const generatedOrder = {
        buyer: {
          name: "Jhon Bonackon",
          phone: "099 123 456",
          email: "jhonb@gmail.com",
        },
        items: cartItems.map((item) => ({
          id: item.id,
          title: item.name,
          price: item.price,
          units: item.cartUnits,
        })),
        total: cartTotalPriceItems(),
      };
      console.log(generatedOrder);

      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, generatedOrder)
        .then((order) => {
          setLoading(false);
          setConfirmedOrder(order);
          console.log(order);
        })
        .catch((error) => console.log(error));
      // .finally((result) => console.log("finally"));
    }
  }, []);

  return loading ? (
    <>
      <h1>Cargando compra...</h1>
      <Loading />
    </>
  ) : (
    <>
      {confirmation != "" ? (
        <>
          <div className="checkout">
            <h2 className="checkout-text">
              🎉 Felicitaciones, has culminado tu compra de manera exitosa.
            </h2>

            <h3>Orden número: {confirmedOrder._key.path.segments[1]}.</h3>
          </div>
        </>
      ) : (
        <NavLink to={`/`}>
          <h1>Error al realizar la compra, favor reintentar.</h1>
        </NavLink>
      )}
    </>
  );
}

export default Checkout;
