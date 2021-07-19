import Product from './Product';
import {CatalogContext}  from './CatalogContext';
import { useContext, useRef} from 'react';

export default function Catalog(){
    const {products} = useContext(CatalogContext);//we have the products in CatalogContext from fetching
    const {setProducts} = useContext(CatalogContext);
    const titleRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const imageURLRef = useRef();

    const onAddNewProduct = () => {//Adding new product object to "products" (soon will learn data base and then will change it)
        const data = {
            title: titleRef.current.value,
            price: priceRef.current.value, 
            description: descriptionRef.current.value, 
            image: imageURLRef.current.value,       
        };
       fetch('/products', {//Adding "POST" method to fetch,to "products" rout to add the product object ("data") we creates trough input
            method: 'POST',
            headers: {//adding "headers" cuz we pass JSON object so "fetch" will know to pars it, here we tell fetch what mime type we pass (text,img,font etc...)
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),//Take the data object (the added product) and convert it to a string
       })
            .then(response => response.json()) //After adding the "product" object to "products" array (through our post rout in server)
                                               //Takes the data and returns a Promise that resolves to a JavaScript object. This object could be anything that can be represented by JSON — an object, an array, a string, a number...
            .then(data => setProducts(data));
    };

    return (
        <>
        <div className="add-product-form">
            <input ref={titleRef} id="product-title" placeholder="Title"/>
            <input ref={priceRef} id="product-price" placeholder="Price"/>
            <input ref={descriptionRef} id="product-description" placeholder="Description"/>
            <input ref={imageURLRef} id="product-image-url" placeholder="Image-URL"/>
            <button onClick={onAddNewProduct}>Add new product</button>
        </div>
        <div className="products">
        {products.length > 0 //if 'products' array is not empty (before the fetch funstion filled it)
        ? products.map(product => <Product key={product.id} {...product} />)  //...product - pass all elements of iterableObj as arguments to function
                                                                                          //key -> some value that is uniqe fo each product, in this case its the id
                                                                                          //onAddToCart is the function that adds to cart on click
        :"Loading..."} {/*Before the fetch funstion filled the 'products' array-"Loading" is going to be printed.*/}
        </div>  
        </>                                                               
    );
}