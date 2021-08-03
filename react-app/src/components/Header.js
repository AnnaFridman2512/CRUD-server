import {
    Link,
  } from "react-router-dom";
  import './Header.css';

export default function Header(){

    return(
    <ul>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/Cart">Cart</Link>
      </li>
    </ul>
    );
}