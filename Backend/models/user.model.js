const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const JWT_SECRET = "uber-secret";
const { default: mongoose } = require("mongoose");


const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [ 3, 'First name must be at least 3 characters long' ],
        },
        lastname: {
            type: String,
            minlength: [ 3, 'Last name must be at least 3 characters long' ],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength: [ 10, 'Email must be at least 5 characters long' ],
        match: [ /^\S+@\S+\.\S+$/, 'Please enter a valid email' ]
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, "uber-secret", { expiresIn: '24h' });
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);


module.exports = userModel;