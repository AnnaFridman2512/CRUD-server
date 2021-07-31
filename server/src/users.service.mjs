import loadJson from 'load-json-file';
import {getUsersCollection} from './db/connect.mjs';

let users = loadJson.sync('./data/users.json'); //Saving the data  from the wanted file to a variable 

export async function getUsers() {
    return getUsersCollection().find({}).toArray();
}

export async function getUser(userId){
    return  getUsersCollection()
    .find({userId: parseInt(userId)})
    .toArray();
}

export function addUser(user){
    users.push(user);
}

export function deleteUser(userId){
    users = users.filter(user => user.userId != userId);//"users" is an array so we filter it by acountNumber. 
}

export function editUser(userId, newUser){
    let [user]= users.filter(user => user.userId == userId);//"users" is an array so we filter it by acount-number. the distructuring is to get a single object and not an array with a single object
    user.name = newUser.name, //So through the query string  we can reach it's values and change them
    user.age = newUser.age,
    user.userId = newUser.userId;
}

