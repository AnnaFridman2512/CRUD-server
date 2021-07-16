import './App.css';

import React from 'react';
import Cart from './../Cart';
import Catalog from '../Catalog';
import Categories from '../Categories';
import CatalogProvider from '../CatalogContext';
import CartProvider from '../CartContext';


function App() {

  
    return(

    <CatalogProvider>
    <CartProvider>
     
    <div className="App"> 
      <Cart /> {/*Using "products" (all the products) array as a prop so we can access it in Cart component */}
                                                     {/*Using "items" (only cart products) as a prop so we can access it in Cart component  */}
      <Categories />
      <Catalog  /> {/*Using "products" array as a prop so we can access it in Catalog component */}
                                                      {/*"onAddToCart" is a prop that stores "addToCart" function so we can use it in catalog*/}
    </div>
    </CartProvider>  
    </CatalogProvider> 

    );
}

export default App;
