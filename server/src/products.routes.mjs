import express from 'express';

import { deleteProduct } from './products.service.mjs';
import { editProduct } from './products.service.mjs';
import { addProduct } from './products.service.mjs';
import {getProducts} from './products.service.mjs';
import {getProduct} from './products.service.mjs';

export const productsRouter = express.Router();


//Get all products
productsRouter.get("/" , async (req, res) => {//No need to ""/products",  (req, res)", only "/", (req, res). because "/products" is defined in server.mjs app.use('/products', productsRouter);
    res.send(await getProducts());// getProducts is a function from products.service.mjs
});

//Create product 
productsRouter.post("/",(req, res) => {//If we want to create a new product we use post instead of get
                                  //No need to ""/products",  (req, res)", only "/", (req, res). because "/products" is defined in server.mjs app.use('/products', productsRouter);

    res.send(addProduct(req.body));//"addProduct" is a Function from products.service.mjs  
                            //express doesn't know how to deal with adding objects so we use "body" that came with express
                            //it parses the object
                             //{id: req.query.id, //So through the query string  we can reach it's values and change them
                             //title: req.query.title, 
                             //price: req.query.price,
                             //description: req.query.description,
                             //category: req.query.category,
                             //Image: req.query.Image}
});

//Get single product from the products array 
productsRouter.get("/:id", async (req, res) => {//If we want to see a single product by its id, we use :id , we save whatever is writen after products/ and saves it in id variable (can call "id" whatever instead)
                                          //don't need to write "/products/:id", only "/:id", because /products is defined in server.mjs app.use('/products', productsRouter);
    res.send(await getProduct(req.params.id));
});

//Update single product 
productsRouter.put("/:id", (req, res) => {//If we want to update a product we use put instead of get. we use :id to save whatever is writen after products/ and saves it in id variable (can call "id" whatever instead)
    res.send(editProduct(req.params.id, req.body));
});

//Delete single product
productsRouter.delete("/:id", (req, res) => {//If we want to delete a product we use delete instead of get
    res.send(deleteProduct(req.params.id));
});