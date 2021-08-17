import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
       // _id: String,
       name: String,
        //age: Number,
        //userId: String,
        //email: String,
        //password: String
});

  export const User = mongoose.model('User', usersSchema);//'User is the name of the collection in the db
                                                          //If there is no 'User' collection- it's gonna be created automatucly
