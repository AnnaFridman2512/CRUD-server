import loadJson from 'load-json-file';
import {getProductsCollection}  from './db/connect.mjs';

export let products = loadJson.sync('./data/products.json'); //Saving the data  from the wanted file to a variable 

export  function getProducts() {
    return getProductsCollection().find({}).toArray();
}
export  function getProduct(id){
  return  getProductsCollection()
    .find({id: parseInt(id)})//find all products that their id is the same as the id we pased in the function
                             //we get the id as a string, but in the data base we save it as a number, so we need to parseInt() it
    .toArray();
}
export async function addProduct(product){
    return getProductsCollection()
    .insertOne(product)//insertOne- is a mongoDB method
    .toArray();
}    

export function deleteProduct(id){
    return getProductsCollection()
    .deleteOne({id: parseInt(id)})//deleteOne- is a mongoDB method,delete the object that has the same id as we passed in the argument
}

export function editProduct(id, newProduct){
    return getProductsCollection()
    .updateOne(//updateOne - is a mongoDB method
        {id: parseInt(id)},//first argument tells which product to update (by its id)
        {$set: newProduct}//$set - is mongoDB operator. Will add a new field with the specified value we passed in "newProduct"
    )                     //$set - tells mongo to add the key-value pair if it doesn't  exist, or to change it if it does.
}

export function getProductsByUserId(userId){
    return products.filter(product => product.userId == userId);
}