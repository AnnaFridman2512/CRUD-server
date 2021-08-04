import loadJson from 'load-json-file';
import {getProductsCollection}  from './db/connect.mjs';
import Mongo from 'mongodb';
const {ObjectId}= Mongo;//extracting objectId function from momgodb, the function strigifys whatever is in objectId value

export let products = loadJson.sync('./data/products.json'); //Saving the data  from the wanted file to a variable 

export  function getProducts() {
    return getProductsCollection().find({}).toArray();
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