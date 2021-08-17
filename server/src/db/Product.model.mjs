import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
         id: Number,
         userId: String,
         title: String,
         price: {
           type: Number,
           required: true
         },
         description: String,
         category: String,
         image: String
});

  export const Product = mongoose.model('Product', productsSchema);//'Product' is the name of the model in the db
                                                                   //'products' collection- it's gonna be created automatucly when we add new peoduct
