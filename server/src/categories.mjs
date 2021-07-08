import express from 'express';
import loadJson from 'load-json-file';

export const categoriesRouter = express.Router();
let categories = loadJson.sync('./data/categories.json');

categoriesRouter.get("/", (req, res) => {//No need to ""/categories",  (req, res)", only "/", (req, res). because "/categories" is defined in server.mjs app.use('/categories', categoriesRouter);

    res.send(categories);////using loadJson to get the data from categories.json file 
});

categoriesRouter.post('/:category', (req, res) =>{//don't need to write "/categories/:category", only "/:category", because /categories is defined in users.mjs app.use('/categories', categoriesRouter);;
   categories.push(req.params.category);
   res.send("Category added");
});

categoriesRouter.delete('/:category', (req, res) =>{
    categories= categories.filter(category => category != req.params.category);
    res.send("category deleted");
});
