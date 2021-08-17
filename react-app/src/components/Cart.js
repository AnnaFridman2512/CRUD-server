
  
import './Cart.css';
import {CatalogContext} from './CatalogContext';
import {CartContext} from './CartContext';
import {useContext} from 'react';
import {
    Link,
  } from "react-router-dom";

function CartItem({name, quantity, _id}) {
    return (
        <div className="cart-item">
            <Link to={`/products/${_id}`}>
                <span className="cart-item-name">{name}</span>
            </Link>
            <span className="cart-item-quantity">{quantity}</span>
        </div>
    );
}

export default function Cart() {
    const {products} = useContext(CatalogContext);
    const {cartItems: items} = useContext(CartContext);

    return (
        <div className="cart">
            <h3>Cart</h3>
            {Object.entries(items)
                .map(([id, quantity]) =>
                    <CartItem key={id}
                        name={products[id].title}
                        quantity={quantity}
                        id={id}
                    />)}
        </div>
    );
}
