import loadJson from 'load-json-file';
import {getUsersCollection} from './db/connect.mjs';

let users = loadJson.sync('./data/users.json'); //Saving the data  from the wanted file to a variable 

export  function getUsers() {
    return getUsersCollection().find({}).toArray();
}

export  function getUser(userId){
    return  getUsersCollection()
    .find({userId: parseInt(userId)})
    .toArray();
}

export async function addUser(user){
    return getUsersCollection()
    .insertOne(user)//insertOne- is a mongoDB method
    .toArray();
}

export function deleteUser(userId){
    return getUsersCollection()
    .deleteOne({userId: parseInt(userId)})//deleteOne- is a mongoDB method,delete the object that has the same userId as we passed in the argument
}

export function editUser(userId, newUser){
    return getUsersCollection()
    .updateOne(//updateOne - is a mongoDB method
        {userId: parseInt(userId)},//first argument tells which product to update (by its userId)
        {$set: newUser}//$set - is mongoDB operator. Will add a new field with the specified value we passed in "newUser"
    )                   //$set - tells mongo to add the key-value pair if it doesn't  exist, or to change it if it does.
}

