const mongoose = require('mongoose');
const bcrypy = require('bcrypt');
const validator = require('validator');
const schema = mongoose.Schema;
const userSchema = new schema({
    _id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['learner', 'trainer'],
        default: 'learner'
    },
    phone: {
        type: Number
    },
}, { timestamps: true })

// static signup methode
userSchema.statics.signup = async function (_id, firstName, lastName, password, role, phone) {
    if (!_id || !firstName || !lastName || !password || !role) {
        throw Error('All fields must be filled')
    }
    // 
    if (role === 'trainer') {
        if (!phone) {
            throw Error('Phone number is required ')
        }
    }

    if (!validator.isEmail(_id)) {
        throw Error('email is not valid')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({ _id });
    if (exists) {
        throw Error('email already in use');
    }
    const salt = await bcrypy.genSalt(3);
    // console.log(salt);
    const hash = await bcrypy.hash(password, salt);
    const user
        = await this.create({
            _id,
            firstName,
            lastName,
            password: hash,
            role,
            phone
        })
    return user
        ;
}

//
userSchema.statics.login = async function (_id, password) {
    //console.log("in statics.login, email: ", _id, "password: ", password )
    if (!_id || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(_id)) {
        throw Error('email is not valid')
    }
    const user = await this.findById(_id);

    if (!user) {
        throw Error(' incorrect  email');
    }
    const match = await bcrypy.compare(password, user.password);
    //console.log(password, user.password, match )
    if (!match) {
        throw Error('incorrect password')
    }
    return user;

}
module.exports = mongoose.model('user', userSchema);