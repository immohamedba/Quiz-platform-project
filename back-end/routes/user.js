const express = require('express');
const {
    getUsers,
    createUser,
    getUser,
    deleteUser,
    updateUser,
    loginUser,
    singupUser
} = require('../controllers/userController');
const router = express.Router();

//Get all user
router.get('/', getUsers)

//Get a single user
router.get('/:id', getUser)

//Post a new user
router.post('/', createUser);

//delete a user
router.delete('/:id', deleteUser)

// update a user
router.patch('/:id', updateUser)

// Authentification and registration
router.post('/login', loginUser);
router.post('/signup', singupUser);

module.exports = router;