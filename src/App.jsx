import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  
  return (
    <>
      <NavBar />
      <ItemListContainer />
    </>
  )
}

export default App
