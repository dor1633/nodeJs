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

export default {
    getAllUsers,
    getUserById,
    addNewUser
}