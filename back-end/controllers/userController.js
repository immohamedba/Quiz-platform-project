const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

// Authentification 

// signup user
const singupUser = async (req, res) => {
// a vefier si ça marche
    const { _id, firstName, lastName, password, role, phone } = req.body;
    try {
        const user = await User.signup(_id, firstName, lastName, password, role, phone);
        // create a Taken
        const token = createToken(user._id);
        res.status(200).json({ _id, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
// login user
const loginUser = async (req, res) => {
    const { _id, password } = req.body;
    console.log("in login User ", _id, password)
    try {
        const user = await User.login(_id, password);
        // create a Taken
        const token = createToken(user._id);

        res.status(200).json({ _id, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// get all users
const getUsers = async (req, res) => {
    // user.sign();

    const user = await User.find({}).sort({ createdAt: -1 })
    res.status(200).json(user);
}
// get single user 
const getUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id)

    if (!user) {
        return res.status(404).json({ error: 'No such user' })
    }
    res.status(200).json(user)
}

// create a new user
const createUser = async (req, res) => {
    const { _id, firstName, lastName, password } = req.body;
    try {
        const user = await User.create({ _id, firstName, lastName, password })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
// delete user
const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndDelete({ _id: id });
    if (!user) {
        return res.status(404).json({ error: 'No such user' })
    }
    res.status(200).json(user);
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(
        { _id: id },
        { ...req.body }
    )
    if (!user) {
        return res.status(404).json({ error: 'No such user' })
    }
    res.status(200).json(user)
}

module.exports = {
    getUsers,
    createUser,
    getUser,
    deleteUser,
    updateUser,
    loginUser,
    singupUser
} 