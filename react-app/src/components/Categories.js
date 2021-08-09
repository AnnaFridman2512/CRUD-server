import './Categories.css';
import Category from './Category';
import { useState, useEffect } from "react";


export default function Categories(){

    const [categories, setCategories] = useState([]);//At the begining we have an empty array of categories
                                                   //After fetching, the product object are going to come with a 'category' key.

    useEffect(()=> {//Now we are fetching the categories
        fetch('/api/categories')
          .then(response => response.json())//Here we got the categories array 
          .then(categoriesArr => setCategories(categoriesArr));//Takes the categories array that we got above and replaces the empty 'categories' array with the one we got from fetch()
        }, []);
    
    return (
            <div className="categories">
                <h3>Categories</h3>
                <ul className="categories-list">
                    {categories.map(category => 
                    <Category>
                       <span className="custon-category"> {category}</span> {/*After fetching the 'categories' array we map it and put it in the DOM, category is the child of Category */}
                    </Category>                                             //So if i want to style it i can wrap it with span and style ir in css
                                                                             //And then we can add diffrent content to the Category square, the square will look the same but the content will change
                    )} 
                </ul>                                                                                                             
            </div> 

    );
}
