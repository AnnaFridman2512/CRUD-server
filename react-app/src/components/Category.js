export default function Category({children}){//children is built in React (is category from Categories.js)
    return(
        <li className="category-item">{children}</li> //Here children is {category} from Categories.js
    );
}