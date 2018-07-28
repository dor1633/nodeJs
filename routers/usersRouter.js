import exp from 'express'
import usersBL from '../src/BL/usersBL'

const router = exp.Router();


router.get('/', (req, res) => res.send(usersBL.getAllUsers()));

router.get('/:id', (req, res) => {
    let userId = req.params.id;

    let user = usersBL.getUserById(userId);

    if(user) {
        res.send(user);
    } else {
        res.status(404).send({error: "id is not exist"});
    }
});

router.post('/', (req, res) => {
    let userDetails = req.body;

    let returnUser = usersBL.addNewUser(userDetails);

    if(returnUser) {
        res.send(returnUser);
    } else {
        res.status(400).send({message: "Error..........."});
    }
});



module.exports = router;