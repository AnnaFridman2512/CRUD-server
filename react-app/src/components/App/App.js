
  
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
            <Catalog  /> {/*Using "products" array as a prop so we can access it in Catalog component */}
                                                      {/*"onAddToCart" is a prop that stores "addToCart" function so we can use it in catalog*/}
          </Route>
            <Cart /> {/*Using "products" (all the products) array as a prop so we can access it in Cart component */}
                                                     {/*Using "items" (only cart products) as a prop so we can access it in Cart component  */}
        </Switch>
      </CartProvider>  
      </CatalogProvider> 
    </Router>
    </div>
    </div>

    );
}

export default App;
