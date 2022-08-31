const mongoose = require('mongoose');
const bcrypy = require('bcrypt');
const validator = require('validator');
const schema = mongoose.Schema;
const learnerSchema = new schema({
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
}, { timestamps: true })

// static signup methode
/*learnerSchema.statics.sign = async function () {
    console.log("Hey !");
}*/
learnerSchema.statics.signup = async function (_id, firstName, lastName, password) {
    if (!_id || !firstName || !lastName || !password) {
        throw Error('All fields must be filled')
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
    const salt = await bcrypy.genSalt(10);
    // console.log(salt);
    const hash = await bcrypy.hash(password, salt);
    const learner = await this.create({
        _id,
        firstName,
        lastName,
        password: hash
    })
    return learner;
}

//
learnerSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('email is not valid')
    }
    const learner = await this.findOne({ email });

    if (!learner) {
        throw Error(' incorrect  email');
    }
    const match = await bcrypy.compare(password, learner.password);
    console.log(password, learner.password, match )
    if ( !match) {
        throw Error('incorrect password')
    }
    return learner;

}
module.exports = mongoose.model('learner', learnerSchema);