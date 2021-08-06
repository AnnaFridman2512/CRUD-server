import loadJson from 'load-json-file';
import {getProductsCollection}  from './db/connect.mjs';
import Mongo from 'mongodb';
const {ObjectId}= Mongo;//extracting objectId function from momgodb, the function strigifys whatever is in objectId value

export let products = loadJson.sync('./data/products.json'); //Saving the data  from the wanted file to a variable 

export function getProducts(filter = {}) {//As default we send an empty object to data base to filter by (so it will get all products)
     
    const query = {};//At first query is an empty object, so we get all products. But if the filter i got has a "title" or "maxPrice" or "minPrice" - we filter by them

    if(filter.title){//If the filter is "title" ("http://localhost:8080/products/?title=SOMETHING" )         
        query.title = new RegExp(filter.title, "i");//The RegExp object is used for matching text with a pattern  (the pattern is"SOMETHING" in this example)
                                                   //RegExp will match all titles that have "SOMETHING" in their values
    }                                              //The "i" is RegExps "ignore case", it means it doesn't matter if the expression we filter by is uppercase or not

    if(filter.maxPrice || filter.minPrice){//Return all products that teir price is lower than "SOMENUMBERS" OR bigger than SOMENUMBERS"
        query.price = {};
        if(filter.maxPrice) // if the filter is "maxPrice" http://localhost:8080/products/?maxPrice=SOMENUMBERS
        query.price.$lt = parseInt(filter.maxPrice)//$lt-  is mongoDB method, means "lower than"
        if(filter.minPrice) //if the filter is "minPrice"  http://localhost:8080/products/?minPrice=SOMENUMBERS
        query.price.$gt = parseInt(filter.minPrice)//$gt - is mongoDB method, means "geater than"                                          
                                                     //parseInt - because the "price" value is a string and we want a number
    }



    return getProductsCollection()
    .find(query)//return all querry, but if we used (?title=SOMETHING) returns only products that contain "SOMETHING" in their tilte
    .toArray();
}

export  function getProduct(id){
  return  getProductsCollection()
    .findOne({_id: ObjectId(id)});//findOne- is a mongoDB method. finds the product that its _id  is the same as the id we pased in the function
                                  //the _id is what mongo gives each object, it includes letters and numbers so we can't parseit
}                                 //we use the ObjectId function to turn it to a mongo ObjectId object

export async function addProduct(product){
    return getProductsCollection()
    .insertOne(product)//insertOne- is a mongoDB method
    .toArray();
}    

export function deleteProduct(id){
    return getProductsCollection()
    .deleteOne({_id: ObjectId(id)})//deleteOne- is a mongoDB method,delete the object that has the same id as we passed in the argument
}

export function editProduct(id, newProduct){
    return getProductsCollection()
    .updateOne(//updateOne - is a mongoDB method
        {_id: ObjectId(id)},//first argument tells which product to update (by its id)
        {$set: newProduct}//$set - is mongoDB operator. Will add a new field with the specified value we passed in "newProduct"
    )                     //$set - tells mongo to add the key-value pair if it doesn't  exist, or to change it if it does.
}

export function getProductsByUserId(userId){
    return products.filter(product => product.userId == userId);
}