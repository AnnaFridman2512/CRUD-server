  
import Product from "./Product";


export default function Catalog({products, onAddToCart }){//Destructuring - getting the products array from the object 
    return (
        <div className="products">
        {products.length > 0 //if 'products' array is not empty (before the fetch funstion filled it)
        ? products.map(product => <Product key={product.id} {...product} onAddToCart={onAddToCart} />)  //...product - pass all elements of iterableObj as arguments to function
                                                                                          //key -> some value that is uniqe fo each product, in this case its the id
                                                                                          //onAddToCart is the function that adds to cart on click
        :"Loading..."} {/*Before the fetch funstion filled the 'products' array-"Loading" is going to be printed.*/}
        </div>                                                                 
    );
}