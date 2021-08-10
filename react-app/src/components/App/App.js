
  
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import React from 'react';
import Cart from './../Cart';
import Catalog from '../Catalog';
import Categories from '../Categories';
import CatalogProvider from '../CatalogContext';
import CartProvider from '../CartContext';
import Header from "../Header";

function App() {
  return(
    <div className="App"> 
    <div className="Header"> 
    <Router>
      <CatalogProvider>
      <CartProvider>
        <Header/>
        <Switch>
          <Route path="/products" exact>
            <Categories />
            <Catalog  />                                    
          </Route>
          <Route path="/cart" exact>
            <Cart /> 
          </Route>                                          
        </Switch>
      </CartProvider>  
      </CatalogProvider> 
    </Router>
    </div>
    </div>

    );
}

export default App;
