import React, {useEffect, useState, useContext} from 'react';
import { useParams,} from "react-router-dom";
import { CartContext } from './CartContext';


export default function GetProduct(){
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
      fetch(`/api/products/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data));
    }, [id]);
    console.log("product details: "+ product.title);

    const {addToCart} = useContext(CartContext);

return (
    <div className="product">
     <img src={product.image} className="product-image" alt="product"/>
      <span>{product.category}</span>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product.id)}>Add to cart ${product.price}</button>
    </div>
 )
}