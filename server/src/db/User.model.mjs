import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
       username: {
         type:String,
         maxLength: 25
        },
       age: Number,
       userId: String,
       email: {
         type: String,
         match:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
         //match- is email validation with REGEXP
         required: true 
       },
       phone: String,
       password: {
        type: String,
        required: true ,
        validate: {
          validator:v => {
          if(v.length > 6) return false;//if password shorter than 6 digits
          if(!/[A-Z]/.test(v)) return false;//if password has no big letters
          if(!/[\*\?\-\+\_\!]/.test(v)) return false;//if password has no special signs

          return true;
        },
        message: prop => `${prop.value} is an invalid password`
      },
        select: false//password is not gonna be shown when get user/s
      },
      signUpDate:{//Is going to be added outomaticaly cuz "default" added
        type: Date,
        default: () => Date.now()
      }
});

  export const User = mongoose.model('User', usersSchema);//'User is the name of the collection in the db
                                                          //If there is no 'users' collection- it's gonna be created automatucly when i create new user
