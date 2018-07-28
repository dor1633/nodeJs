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

const getAllUsers = () => {
    return users;
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