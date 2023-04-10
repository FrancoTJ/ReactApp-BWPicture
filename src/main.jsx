import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5yRC6D7VQkTLafHRBqR_LukJ2DkSBYeU",
  authDomain: "bwpic-react.firebaseapp.com",
  projectId: "bwpic-react",
  storageBucket: "bwpic-react.appspot.com",
  messagingSenderId: "661771608337",
  appId: "1:661771608337:web:fcc59fded901fe326eacb0"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
