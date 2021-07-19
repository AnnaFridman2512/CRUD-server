import React, {useEffect, useState} from 'react';



export const CatalogContext = React.createContext({
    products: [],//Before fetching the array is empty 
    setProducts: () => []
});


export default function CatalogProvider({children}) {
const [products, setProducts] = useState([]);//At the begining we have an empty array of products


useEffect(()=> {//What is written inside this function is going to be executed when the component is rendered
    fetch('/products')
    .then(response => response.json())//After fetching take the response (that came as a stirng) json() will convert the string in-to an array of objects.
    .then(productsArr => setProducts(productsArr));//Takes the products array of objects, that we got above and replaces the empty 'products' array with the one we got from fetch()
  }, []);//If we don't put the epty array- the function is going to be executed every time we re-render the aplication
         //If we put the empty array- the function is going to be executed once - at the component mounts(when we add stuff to the DOM for the first time)
         //Every thing we pass in the array - are values, that whenever they change - the hook is going to run.
  

    return (
        <CatalogContext.Provider value={{
            products,
            setProducts
        }}>
            {children}    
        </CatalogContext.Provider>
       
    );
    }    
    