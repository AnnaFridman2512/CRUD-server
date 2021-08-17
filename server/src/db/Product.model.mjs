import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
         id: Number,
         userId: String,
         title: String,
         price: {
           type: Number,
           min: 0,
           //set: v => Math.floor(v),//When price is passed Math.floor it when saving to db
           required: true
         },
         description: String,
         category: {
           type: String,
           enum: ["electronics", "jewelery","men's clothing", "women's clothing" ]
           //enum defines what category i can enter
         },
         image: String
});

  export const Product = mongoose.model('Product', productsSchema);//'Product' is the name of the model in the db
                                                                   //'products' collection- it's gonna be created automatucly when we add new peoduct
