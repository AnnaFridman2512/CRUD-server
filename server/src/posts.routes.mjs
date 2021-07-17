import express from 'express';

import { deletePost } from './posts.service.mjs';
import { editPost } from './posts.service.mjs';
import { addPost } from './posts.service.mjs';
import {getPosts} from './posts.service.mjs';
import {getPost} from './posts.service.mjs';


export const postsRouter = express.Router();




postsRouter.get("/", (req, res) => {//Get all posts
                              //No need to " "/posts",  (req, res)", only "/" (req, res). because "/posts" is defined in server.mjs app.use('/posts', postsRouter);
    res.send(getPosts());//getPosts() function is imported from './posts.service.mjs
});

//Create post 
postsRouter.post("/", (req, res) => {//If we want to create a new post we use post instead of get
                               //No need to " "/posts",  (req, res)", only (req, res). because "/posts" is defined in server.mjs app.use('/users', postsRouter);
    res.send(addPost(req.body));//addPost() function is imported from './posts.service.mjs
});

//Get single post from the posts array 
postsRouter.get("/:id", (req, res) => {//If we want to see a single post by its id, we use :id , we save whatever is writen after posts/ and saves it in id variable (can call "id" whatever instead)
                                                 //don't need to write "/posts/:id", only "/:id", because /posts is defined in posts.mjs app.use('/posts', postRouter);
    res.send(getPost(req.params.id));//getPost() function is imported from './posts.service.mjs
});


//Update post 
postsRouter.put("/:id", (req, res) => {//If we want to update a post we use put instead of get. we use :id to save whatever is writen after posts/ and saves it in id variable (can call "id" whatever instead)
    res.send(editPost(req.params.id, req.body));//editPost() function is imported from './posts.service.mjs
});

//Delete post
postsRouter.delete("/:id", (req, res) => {//If we want to delete a post we use delete instead of get
    res.send(deletePost(req.params.id));
});