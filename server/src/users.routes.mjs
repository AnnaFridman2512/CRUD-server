import express from 'express';

import { deleteUser } from './users.service.mjs';
import { editUser } from './users.service.mjs';
import { addUser } from './users.service.mjs';
import {getUsers} from './users.service.mjs';
import {getUser} from './users.service.mjs';
import {getProductsByUserId} from './products.service.mjs';


export const usersRouter = express.Router();



//Get all users
usersRouter.get("/", async (req, res) => {
                              //No need to " "/users",  (req, res)", only "/" (req, res). because "/users" is defined in server.mjs app.use('/users', usersRouter);

    res.send(await getUsers());//getUsers() function is imported from './users.service.mjs
});

//Create user 
usersRouter.post("/", async (req, res) => {//If we want to create a new user we use post instead of get
                               //No need to " "/users",  (req, res)", only (req, res). because "/users" is defined in server.mjs app.use('/users', usersRouter);
                 
    res.send(await addUser(req.body));//addUser() function is imported from './users.service.mjs
});

//Get single user from the users array 
usersRouter.get("/:userId", async (req, res) => {//If we want to see a single user by its acountNumber, we use :acountNumber , we save whatever is writen after users/ and saves it in acount-number variable (can call "acount-number" whatever instead)
                                                 //don't need to write "/users/:acountNumber", only "/:id", because /products is defined in users.mjs app.use('/users', usersRouter);
    res.send(await getUser(req.params.userId));//getUser() function is imported from './users.service.mjs
});

//get all products with a spesific userId
usersRouter.get("/:userId/products",async (req, res) => {
    res.send(await getProductsByUserId(req.params.userId));
});



//Update single user 
usersRouter.put("/:userId",async (req, res) => {//If we want to update a product we use put instead of get. we use :id to save whatever is writen after products/ and saves it in id variable (can call "id" whatever instead)
    res.send(await editUser(req.params.userId, req.body));//editUser() function is imported from './users.service.mjs
});

//Delete single user
usersRouter.delete("/:userId",async (req, res) => {//If we want to delete a user we use delete instead of get
    res.send(await deleteUser(req.params.userId));
});