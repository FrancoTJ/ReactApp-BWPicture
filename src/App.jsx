import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greetings="parámetro pasado por prop" />
    </>
  )
}

export default App
