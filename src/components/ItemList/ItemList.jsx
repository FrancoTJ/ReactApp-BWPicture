import Item from "../Item/Item";
import "./ItemList.css";

function ItemList(props) {
  return (
    <div className="itemListContainer">
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
    </div>
  );
}

export default ItemList;