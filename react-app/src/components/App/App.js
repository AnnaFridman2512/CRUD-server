import './App.css';

import { useEffect, useState } from 'react';
import Cart from './../Cart';
import Catalog from '../Catalog';
import Categories from '../Categories';



function App() {
  const [products, setProducts] = useState([]);//At the begining we have an empty array of products
  const [cartitems, setIcarttems] = useState({});//This useState was cut from Cart so we can use it in onAddToCart function
                                                 //"cartitems" is an object . It's keys are the objects idies 
                                                 //its values are the quantity of each id (how many of the same id we added to cart)
  const addToCart = id =>{//Is the id that we passed in Product component in
                          //<button onClick={() => onAddToCart(id)}>Add to cart ${price}</button>
    const currentQuentity = cartitems[id] ??  0;  //?? checkes if  cartitems[id] value is undefined or NULL (checks if we already have this id in the cart cuz if we don't have it we won't be able to add to its quantity) 
                                                  //if its not undefined or NULL it takes the value (that can be 1/2/3 depends on the value in the idies quantity)
                                                  //and if its undefined or NULL it takes 0 instead

    setIcarttems({...cartitems, [id]: currentQuentity+1}); //Take all the cartitems that already exist in the cart
                                                           //and in the spesific id (the id that is in [id] place)add 1 to the value that is in its "currentQuentity"
  }

  useEffect(()=> {//What is written inside this function is going to be executed when the component is rendered
    fetch('/products')//"proxy": "http://localhost:8080" added in package.json file
    .then(response => response.json())//After fetching take the response (that came as a stirng) json() will convert the string in-to an array of objects.
    .then(productsArr => setProducts(productsArr));//Takes the products array of objects, that we got above and replaces the empty 'products' array with the one we got from fetch()
  }, []);//If we don't put the epty array- the function is going to be executed every time we re-render the aplication
         //If we put the empty array- the function is going to be executed once - at the component mounts(when we add stuff to the DOM for the first time)
         //Every thing we pass in the array - are values, that whenever they change - the hook is going to run.
  

    return(
    <div className="App"> 
      <Cart products={products} items={cartitems}/> {/*Using "products" (all the products) array as a prop so we can access it in Cart component */}
                                                     {/*Using "items" (only cart products) as a prop so we can access it in Cart component  */}
      <Categories />
      <Catalog products={products} onAddToCart={addToCart} /> {/*Using "products" array as a prop so we can access it in Catalog component */}
                                                      {/*"onAddToCart" is a prop that stores "addToCart" function so we can use it in catalog*/}
    </div>
    );
}

export default App;