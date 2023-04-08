import Item from "../Item/Item";
import "./ItemList.css";

function ItemList(props) {
  return (
    <>
      {props.list.map((p) => (
        <Item
          key={p.id}
          id={p.id}
          name={p.name}
          price={p.price}
          stock={p.stock}
          category={p.category}
          img={p.img}
        />
      ))}{" "}
    </>
  );
}

export default ItemList;

// {/* <Item
//   id={producto.id}
//   name={producto.name}
//   stock={producto.stock}
//   category={producto.category}
//   img={producto.img}
// /> */}
