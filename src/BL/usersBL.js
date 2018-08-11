import usersDAL from '../DAL/usersDAL'

const getAllUsers = () => { 
     return usersDAL.getAllUsers();
}

const getUserById = (userId) => {
   return usersDAL.findUser(userId);
}

const addNewUser = (userDetails) => {

    let details = {name: ""};

    if(!userDetails.name) {
        return null;
    } else {
        details.name = userDetails.name;

        return usersDAL.addUser(details);
    }
}

function A(a,b,c) {
    // if the number is not a b c 
}

function B() {
    // return all
}

function C(a) {
    // if the number is a 
}

function D(a,b,c,d) {
    // if the number is bigger then a and b and less than c and d
}

export default {
    getAllUsers,
    getUserById,
    addNewUser,
    A,
    B,
    C,
    D
}