import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';

function ItemListContainer(props) {
  
    return (
      <div className='itemListContainer'>
        <p>Despliegue de props ItemListContainer (prop con borde verde): <span className='propsStyle'>{props.greetings}</span></p>
        <ItemList />
        
      </div>
    )
  }
  
  export default ItemListContainer;