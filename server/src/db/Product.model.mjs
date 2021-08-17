import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
        // _id: String,
        // id: Number,
        // userId: String,
         title: String,
        // price: Number,
        // description: String,
        // category: String,
        // image: String
});

  export const Product = mongoose.model('Product', productsSchema);//'User is the name of the collection in the db
                                                          //If there is no 'User' collection- it's gonna be created automatucly\\
