

import Mongo from 'mongodb';
import {Product} from './db/Product.model.mjs';
const {ObjectId}= Mongo;//extracting objectId function from momgodb, the function strigifys whatever is in objectId value




export function getProducts(filter = {}) {//As default we send an empty object to data base to filter by (so it will get all products)
     
    const query = {};//At first query is an empty object, so we get all products. But if the filter i got has a "title" or "maxPrice" or "minPrice" - we filter by them

    if(filter.title){//If the filter is "title" ("http://localhost:8080/api/products/?title=SOMETHING" )         
        query.title = new RegExp(filter.title, "i");//The RegExp object is used for matching text with a pattern  (the pattern is"SOMETHING" in this example)
                                                   //RegExp will match all titles that have "SOMETHING" in their values
    }                                              //The "i" is RegExps "ignore case", it means it doesn't matter if the expression we filter by is uppercase or not

    if(filter.maxPrice || filter.minPrice){//Return all products that teir price is lower than "SOMENUMBERS" OR bigger than SOMENUMBERS"
       query.price = {};
        if(filter.maxPrice) // if the filter is "maxPrice" http://localhost:8080/api/products/?maxPrice=SOMENUMBERS
        query.price.$lt = parseInt(filter.maxPrice)//$lt-  is mongoDB method, means "lower than"
        if(filter.minPrice) //if the filter is "minPrice"  http://localhost:8080/api/products/?minPrice=SOMENUMBERS
        query.price.$gt = parseInt(filter.minPrice)//$gt - is mongoDB method, means "geater than"                                          
                                                     //parseInt - because the "price" value is a string and we want a number
    }

    return Product.find(query)//return all querry, but if we used (?title=SOMETHING) returns only products that contain "SOMETHING" in their tilte
}




export async function getProduct(id){
    return Product.findOne({_id: ObjectId(id)});
}


export async function addProduct(product){
    console.log(product)
    const newProduct = new Product(product);
    return newProduct.save();
}

   

export async function deleteProduct(id){

    return Product.findOneAndDelete({_id: ObjectId(id)});

}



export async function editProduct(id, newProduct){
    return Product.findOneAndUpdate(
        {_id: ObjectId(id)},
        { $set: newProduct }
    );
    }
    
export function getProductsByUserId(userId){
   return Product.find({userId: userId})//find me all products that have the same userIdd as i passed

}