import express from 'express';
import cors from 'cors';
import loadJson from 'load-json-file';//Loads a JSON file from a file or a URL, 
                                      //and returns an Object. Note that even if the JSON file contains an Array, 
                                      //an Object will be returned with index numbers as keys.
                                      //This method is asynchronous, meaning it may not finish before the next line in your sketch is executed.
                              

const app = express();
app.use(cors()); //Localhost 3000 can get info from 8080 even thow they are both local
app.use(express.json());//Used to parse JSON bodies

//CRUD - create read apdate delete
//Protocol CRUD Servers: REST (Representational state transfer)
//Rest URL /[object name]s - this is how we write the routs, name of the object in numerous way 'product'- /products



let products = loadJson.sync('./data/products.json'); //Saving the data  from the wanted file to a variable 


app.get("/products",  (req, res) => {//Get all products
    res.send(products);//Using loadJson to get the data from products.json file 
});

//Create product 
app.post("/products", (req, res) => {//If we want to create a new product we use post instead of get
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
app.get("/products/:id", (req, res) => {//If we want to see a single product by its id, we use :id , we save whatever is writen after products/ and saves it in id variable (can call "id" whatever instead)
    let [product]= products.filter(product => product.id == req.params.id);//"products" is an array so we filter it by id. the distructuring is to get a single object and not an array with a single object
                                                                          //params.id gets the :productId variable
    res.send(product);
});

//Update single product 
app.put("/products/:id", (req, res) => {//If we want to update a product we use put instead of get. we use :id to save whatever is writen after products/ and saves it in id variable (can call "id" whatever instead)
    let [product]= products.filter(product => product.id == req.params.id);//"products" is an array so we filter it by id. the distructuring is to get a single object and not an array with a single object
    product.title = req.query.title, //So through the query string  we can reach it's values and change them
    product.price = req.query.price,
    product.description = req.query.description,
    product.category = req.query.category,
    product.Image = req.paquery.Image
    res.send("updated");
});

//Delete single product
app.delete("/products/:id", (req, res) => {//If we want to delete a product we use delete instead of get
    products = products.filter(product => product.id != req.params.id);//"products" is an array so we filter it by id. 
    res.send("deleted");
});



//-------------------------------------------------------------------------------------------------------------------------------------




let users = loadJson.sync('./data/users.json'); //Saving the data  from the wanted file to a variable 


app.get("/users",  (req, res) => {//Get all users
    res.send(users);//Using loadJson to get the data from products.json file 
});

//Create user 
app.post("/users", (req, res) => {//If we want to create a new user we use post instead of get
    users.push(req.body);//"users" is an array, so we can push a new object to it, each product is an object
                            //express doesn't know how to deal with adding objects so we use body that came with express
                            //it parses the object                  

    res.send("added");
});

//Get single user from the users array 
app.get("/users/:acountNumber", (req, res) => {//If we want to see a single user by its acountNumber, we use :acountNumber , we save whatever is writen after users/ and saves it in acount-number variable (can call "acount-number" whatever instead)
    let [user] = users.filter(user => user.acountNumber == req.params.acountNumber);//"products" is an array so we filter it by id. the distructuring is to get a single object and not an array with a single object
                                                                          //params.id gets the :productId variable
    res.send(user);
});

//Update single user 
app.put("/users/:acountNumber", (req, res) => {//If we want to update a product we use put instead of get. we use :id to save whatever is writen after products/ and saves it in id variable (can call "id" whatever instead)
    let [user]= users.filter(user => user.acountNumber == req.params.acountNumber);//"users" is an array so we filter it by acount-number. the distructuring is to get a single object and not an array with a single object
    user.name = req.query.name, //So through the query string  we can reach it's values and change them
    user.age = req.query.age,
    user.acountNumber = req.query.acountNumber
    res.send("updated");
});

//Delete single user
app.delete("/users/:acountNumber", (req, res) => {//If we want to delete a user we use delete instead of get
    users = users.filter(user => user.acountNumber != req.params.acountNumber);//"users" is an array so we filter it by acountNumber. 
    res.send("deleted");
});

//______________________________________________________________________________________________________________________________

let categories = loadJson.sync('./data/categories.json');

app.get('/products/categories', async (req, res) => {
    res.send(categories);////using loadJson to get the data from categories.json file 
});
app.listen(8080);

console.log('it works');