import Mongo from 'mongodb';

const client = new Mongo.MongoClient('mongodb://localhost:27017');

let db;

client.connect(async () => {
     db = client.db('fakestore');
});

export function getProductsCollection(){
    return db.collection('Products');
}

export function getUsersCollection(){
    return db.collection('Users');
}


export function getPostsCollection(){
    return db.collection('Posts');
}