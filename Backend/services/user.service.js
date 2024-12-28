const userModel = require('../models/user_model');

module.exports.createUser = async (firstname, lastname, email, password) => {
    if (!firstname || !lastname || !email || !password) {
        throw new Error('All fields are required');
    }
    const user = await userModel.create({
        fullname: { firstname, lastname },
        email,
        password
    });

    return user;
};

module.exports.hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};