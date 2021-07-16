import express from 'express';
import loadJson from 'load-json-file';

export const productsRouter = express.Router();
export let products = loadJson.sync('./data/products.json'); //Saving the data  from the wanted file to a variable 


productsRouter.get("/" , (req, res) => {//Get all products
                                  //No need to ""/products",  (req, res)", only "/", (req, res). because "/products" is defined in server.mjs app.use('/products', productsRouter);
    res.send(products);//Using loadJson to get the data from products.json file 
});

//Create product 
productsRouter.post("/",(req, res) => {//If we want to create a new product we use post instead of get
                                  //No need to ""/products",  (req, res)", only "/", (req, res). because "/products" is defined in server.mjs app.use('/products', productsRouter);

    products.push(req.body);//"products" is an array, so we can push a new object to it, each product is an object
                            //express doesn't know how to deal with adding objects so we use body that came with express
                            //it parses the object
                             //{id: req.query.id, //So through the query string  we can reach it's values and change them
                             //title: req.query.title, 
                             //price: req.query.price,
                             //description: req.query.description,
                             //category: req.query.category,
                             //Image: req.query.Image}
                             

    res.send("added");
});

//Get single product from the products array 
productsRouter.get("/:id", (req, res) => {//If we want to see a single product by its id, we use :id , we save whatever is writen after products/ and saves it in id variable (can call "id" whatever instead)
                                                   //don't need to write "/products/:id", only "/:id", because /products is defined in server.mjs app.use('/products', productsRouter);
    let [product]= products.filter(product => product.id == req.params.id);//"products" is an array so we filter it by id. the distructuring is to get a single object and not an array with a single object
                                                                          //params.id gets the :productId variable
    res.send(product);
});

//Update single product 
productsRouter.put("/:id", (req, res) => {//If we want to update a product we use put instead of get. we use :id to save whatever is writen after products/ and saves it in id variable (can call "id" whatever instead)
    let [product]= products.filter(product => product.id == req.params.id);//"products" is an array so we filter it by id. the distructuring is to get a single object and not an array with a single object
    product.title = req.query.title, //So through the query string  we can reach it's values and change them
    product.price = req.query.price,
    product.description = req.query.description,
    product.category = req.query.category,
    product.Image = req.paquery.Image
    res.send("updated");
});

//Delete single product
productsRouter.delete("/:id", (req, res) => {//If we want to delete a product we use delete instead of get
    products = products.filter(product => product.id != req.params.id);//"products" is an array so we filter it by id. 
    res.send("deleted");
});