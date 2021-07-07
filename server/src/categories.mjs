import express from 'express';
import loadJson from 'load-json-file';

export const categoriesRouter = express.Router();
let categories = loadJson.sync('./data/categories.json');

categoriesRouter.get('/categories', (req, res) => {
    res.send(categories);////using loadJson to get the data from categories.json file 
});

categoriesRouter.post('/categories/:category', (req, res) =>{
   categories.push(req.params.category);
   res.send("Category added");
});

categoriesRouter.delete('/categories/:category', (req, res) =>{
    categories= categories.filter(category => category != req.params.category);
    res.send("category deleted");
});
