import express from 'express';

//import loadJson from 'load-json-file';//Loads a JSON file from a file or a URL, 
                                      //and returns an Object. Note that even if the JSON file contains an Array, 
                                      //an Object will be returned with index numbers as keys.
                                      //This method is asynchronous, meaning it may not finish before the next line in your sketch is executed.
                              
import {productsRouter} from './src/products.routes.mjs';
import {usersRouter} from './src/users.routes.mjs';
import {categoriesRouter} from './src/categories.routes.mjs';
import {postsRouter} from './src/posts.routes.mjs';

import './src/db/connect.mjs';//connecting to mongodb

const app = express();
//app.use((req, res, next) =>{
//   const time = Date.now();
//    next();
//   const time2 = Date.now();
//   console.log(`Request took ${time2-time} ms'` );
//});

app.use(express.json());//Used to parse JSON bodies
app.use('/products', productsRouter); //productsRouter is executed only when the rout is '/products'
app.use('/users', usersRouter);//usersRouter is executed only when the rout is '/users'
app.use('/categories', categoriesRouter);//categoriesRouter is executed only when the rout is '/categories'
app.use('/posts', postsRouter);
app.use(express.static('../react-app/build'));

//CRUD - create read apdate delete
//Protocol CRUD Servers: REST (Representational state transfer)
//Rest URL /[object name]s - this is how we write the routs, name of the object in numerous way 'product'- /products




app.listen(8080);

console.log('Server up and running on localhost:8080');