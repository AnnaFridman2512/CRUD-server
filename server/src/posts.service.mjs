import loadJson from 'load-json-file';
import {getPostsCollection}  from './db/connect.mjs';

let posts = loadJson.sync('./data/posts.json'); //Saving the data  from the wanted file to a variable 

export function getPosts() {
    return getPostsCollection().find({}).toArray();
}

export function getPost(id){
    return  getPostsCollection()
    .find({id: parseInt(id)})//find all posts that their id is the same as the id we pased in the function
                             //we get the id as a string, but in the data base we save it as a number, so we need to parseInt() it
    .toArray();
}

export function addPost(post){
    return getPostsCollection()
    .insertOne(post)//insertOne- is a mongoDB method
    .toArray();
}

export function deletePost(id){
    return getPostsCollection()
    .deleteOne({id: parseInt(id)})//deleteOne- is a mongoDB method,delete the object that has the same id as we passed in the argument
}

export function editPost(id, newPost){
    return getPostsCollection()
    .updateOne(//updateOne - is a mongoDB method
        {id: parseInt(id)},//first argument tells which product to update (by its id)
        {$set: newPost}//$set - is mongoDB operator. Will add a new field with the specified value we passed in "newPost"
    )                     //$set - tells mongo to add the key-value pair if it doesn't  exist, or to change it if it does.
}


export function getPostByUserId(userId){
    return posts.filter(post => post.userId == userId);
}