let users = [
    {
        id: 100,
        name: "Dor Buchris"
    },
    {
        id: 101,
        name: "Mishok the Pidar"
    },
    {
        id: 102,
        name: "Boker Dov Dovi Dov"
    },
    {
        id: 103,
        name: "Jenia blat"
    },
    {
        id: 104,
        name: "Liorik"
    }];    













import mongo from 'mongodb'
import { resolve } from 'path';

const MONGO_CLIENT = mongo.MongoClient;
const MONGO_CONNECT_URL = "mongodb://localhost:27017/";
const COLLECTION_NAME = "Users";

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        MONGO_CLIENT.connect(MONGO_CONNECT_URL,  { useNewUrlParser: true }, function(err, db) {
            if (err) reject(err);
            let dbConnection = db.db("Dor");
            dbConnection.collection(COLLECTION_NAME).find({}).toArray(function(err, result) {
                if (err) reject(err);
                console.log(result);
                db.close();
                resolve(result);
            });
        });
    });
}

const findUser = (id) => {

    for(let index=0;index<users.length;index++) {
        if(users[index].id == id) {
            return users[index];
        }
    }

    return null;
}

const addUser = (user) => {
    user.id = users[users.length - 1].id + 1;
    users.push(user);
    
    return user;
}


export default {
    getAllUsers,
    findUser,
    addUser
}