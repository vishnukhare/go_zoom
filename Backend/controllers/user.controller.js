const userModel = require("../models/user_model");
// const { use } = require("../routes/user.routes");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");



module.exports.registerUser = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { firstname, lastname } = req.body.fullname;
    const { email, password } = req.body;



    try {
        const hashPassword = await userService.hashPassword(password);
        const user = await userService.createUser(firstname, lastname, email, hashPassword);
        const token = user.generateAuthToken();
        res.status(201).json(user,token);
    } catch (error) {
        next(error);
    }

    // const hashPassword = await userService.hashPassword(password);

    // const user = await userService.createUser({
    //     firstname: fullname.firstname,
    //     lastname: fullname.lastname,
    //     lastname, 
    //     email, 
    //     password: hashPassword
    // });
    // const token = user.generateAuthToken();

    // res.status(201).json({ data: user, token });
};