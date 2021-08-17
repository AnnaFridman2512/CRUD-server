import loadJson from 'load-json-file';
import  {User}  from './db/User.model.mjs';
//import {Products} from './db/Products.model'
import Mongo from 'mongodb';
const {ObkectId} = Mongo;

//import { getProduct } from './products.service.mjs';

//let users = loadJson.sync('./data/users.json'); //Saving the data  from the wanted file to a variable 

export  function getUsers() {
    return User.find();
}

export async function getUser(userId){
     return User.findOne({_id: ObkectId(userId)});
}

export async function addUser(user){
   const newUser = new User(user);
   return newUser.save();
  
    //if(!user.name) throw new Error("Missing user name");//What happns if there is no username 
    //if(!user.id) throw new Error("Missing user id");//What happns if there is no id 
    //if(!user.password) throw new Error("Missing user password");//What happns if there is no password 
    //if(!user.email) throw new Error("Missing user email");//What happns if there is no age 
    //if(!emailRegEx.test(user.email)) throw new Error("Not valid email")//test()- is RegExs method that checks if emailRegEx is true

    //const {name,id, email, password} = user;

    
    //const {insertedId} = await getUsersCollection()//insertedId- we get it as a response from mongoDB, it'd the _id string of the new object created

    //.insertOne({name, email, age, id, password});//insertOne- is a mongoDB method
    //return getUser(insertedId);
}

export async function deleteUser(userId){

    return User.findOneAndDelete({_id: ObjectId(userId)});

}

export async function editUser(id, newUser){
        return User.findOneAndUpdate(
            {_id: ObjectId(id)},
            { $set: newUser }
        );

  //  await getUsersCollection()
    //.updateOne(//updateOne - is a mongoDB method
      //  {_id: ObjectId(Userid)},//first argument tells which user to update (by its _id)
        //{$set: newUser}//$set - is mongoDB operator. Will add a new field with the specified value we passed in "newUser"
    //)                   //$set - tells mongo to add the key-value pair if it doesn't  exist, or to change it if it does.
    //return getUser(Userid);
}

