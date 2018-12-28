import mongo from 'mongodb'

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
                db.close();                
                resolve(result);
            });
        });
    });
}

const findUser = (id) => {
    return new Promise((resolve, reject) => {
        MONGO_CLIENT.connect(MONGO_CONNECT_URL,  { useNewUrlParser: true }, function(err, db) {
            if (err) reject(err);
            let dbConnection = db.db("Dor");
            dbConnection.collection(COLLECTION_NAME).findOne({_id: id}, function(err, result) {
                if (err) reject(err);
                db.close();                
                resolve(result);
            });
        });
    });
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