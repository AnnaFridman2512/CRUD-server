import { useState, useEffect } from "react";


export default function Categories(){

    const [categories, setCategories] = useState([]);//At the begining we have an empty array of categories
                                                   //After fetching, the product object are going to come with a 'category' key.

    useEffect(()=> {//Now we are fetching the categories
        fetch('/categories')//"proxy": "http://localhost:8080" added in package.json file
          .then(response => response.json())//Here we got the categories array 
          .then(categoriesArr => setCategories(categoriesArr));//Takes the categories array that we got above and replaces the empty 'categories' array with the one we got from fetch()
        }, []);
    
    return (

        <div>
            {categories.map(category => <span> <a href="#">{category}</a> </span>)} {/*After fetching the 'categories' array we map it and put it in the DOM*/}
        </div> 

    );
}