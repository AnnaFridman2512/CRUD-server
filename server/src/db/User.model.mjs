import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
       username: String,
       age: Number,
       userId: String,
       email: {
         type: String,
         required: true //
       },
       phone: String,
       password: {
        type: String,
        required: true //
      }
});

  export const User = mongoose.model('User', usersSchema);//'User is the name of the collection in the db
                                                          //If there is no 'users' collection- it's gonna be created automatucly when i create new user
