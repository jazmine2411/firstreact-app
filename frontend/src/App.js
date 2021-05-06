import React from "react";
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./index.css";
//import HomeScreen from './screens/HomeScreen'
//import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            Jassmine
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
    
        
      </main>
      <footer className="row center">All Right Reserved</footer>
    </div>
   
  );
}

export default App;
