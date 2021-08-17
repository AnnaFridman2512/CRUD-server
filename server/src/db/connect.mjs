
import mongoose from 'mongoose';

export const connect = () =>{
    mongoose.connect('mongodb://localhost:27017/fakestore', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        console.log('connected')
    }).catch(err => console.log(err));
}

