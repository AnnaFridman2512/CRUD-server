import loadJson from 'load-json-file';
import {getPostsCollection} from './db/connect.mjs';
import Mongo from 'mongodb';
const {ObjectId}= Mongo;//extracting objectId function from momgodb, the function strigifys whatever is in objectId value

let posts = loadJson.sync('./data/posts.json'); //Saving the data  from the wanted file to a variable 



export function getPosts() {
    return getPostsCollection().find({}).toArray();
}

export function getPost(id){
    return  getPostsCollection()
    .findOne({_id: ObjectId(id)});//findOne- is a mongoDB method. finds the post that its _id  is the same as the id we pased in the function
                                  //the _id is what mongo gives each object, it includes letters and numbers so we can't parseit
}                                 //we use the ObjectId function to turn it to a mongo ObjectId object


export function addPost(post){
    return getPostsCollection()
    .insertOne(post)//insertOne- is a mongoDB method
    .toArray();
}

export function deletePost(id){
    return getPostsCollection()
    .deleteOne({_id: ObjectId(id)})//deleteOne- is a mongoDB method,delete the object that has the same id as we passed in the argument
}

export function editPost(id, newPost){
    return getPostsCollection()
    .updateOne(//updateOne - is a mongoDB method
        {_id: ObjectId(id)},//first argument tells which product to update (by its id)
        {$set: newPost}//$set - is mongoDB operator. Will add a new field with the specified value we passed in "newPost"
    )                     //$set - tells mongo to add the key-value pair if it doesn't  exist, or to change it if it does.
}


export function getPostByUserId(userId){
    return posts.filter(post => post.userId == userId);
}