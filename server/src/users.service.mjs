
import  {User}  from './db/User.model.mjs';
//import {Product} from './db/Product.model'
import Mongo from 'mongodb';
const {ObkectId} = Mongo;

//import { getProduct } from './products.service.mjs';



export  function getUsers() {
    return User.find();
}

export async function getUser(userId){
     return User.findOne({_id: ObkectId(userId)});
}

export async function addUser(user){
   const newUser = new User(user);
   return newUser.save();
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

