import Product from './Product';
import { CatalogContext } from './CatalogContext';
import { useContext } from 'react';

export default function Catalog(){
    const {products} = useContext(CatalogContext);//we have the products in CatalogContext from fetching
    
    return (
        <div className="products">
        {products.length > 0 //if 'products' array is not empty (before the fetch funstion filled it)
        ? products.map(product => <Product key={product.id} {...product} />)  //...product - pass all elements of iterableObj as arguments to function
                                                                                          //key -> some value that is uniqe fo each product, in this case its the id
                                                                                          //onAddToCart is the function that adds to cart on click
        :"Loading..."} {/*Before the fetch funstion filled the 'products' array-"Loading" is going to be printed.*/}
        </div>                                                                 
    );
}