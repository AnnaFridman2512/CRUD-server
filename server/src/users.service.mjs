import loadJson from 'load-json-file';
import {getUsersCollection} from './db/connect.mjs';
import Mongo from 'mongodb';
const {ObjectId}= Mongo;//extracting objectId function from momgodb, the function strigifys whatever is in objectId value
//let users = loadJson.sync('./data/users.json'); //Saving the data  from the wanted file to a variable 


export  function getUsers() {
    return getUsersCollection().find({}).toArray();
}

export  function getUser(userId){
    return  getUsersCollection()
    .findOne({_id: ObjectId(userId)});//findOne- is a mongoDB method. finds the user  that its _id  is the same as the id we pased in the function
                                  //the _id is what mongo gives each object, it includes letters and numbers so we can't parseit
}                                 //we use the ObjectId function to turn it to a mongo ObjectId object

export async function addUser(user){
    return getUsersCollection()
    .insertOne(user)//insertOne- is a mongoDB method
    .toArray();
}

export function deleteUser(id){
    return getUsersCollection()
    .deleteOne({_id: ObjectId(id)})//deleteOne- is a mongoDB method,delete the object that has the same userId as we passed in the argument
}

export function editUser(id, newUser){
    return getUsersCollection()
    .updateOne(//updateOne - is a mongoDB method
        {_id: ObjectId(id)},//first argument tells which user to update (by its _id)
        {$set: newUser}//$set - is mongoDB operator. Will add a new field with the specified value we passed in "newUser"
    )                   //$set - tells mongo to add the key-value pair if it doesn't  exist, or to change it if it does.
}

