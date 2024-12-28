const express = require('express');
const router = express.Router();
const { body }=require("express-validator")
const userController = require("../controllers/user.controller");


router.post("/register",[
    body("email").isEmail().withMessage("Email is required"),
    body('fullname.firstname').isLength({min:3}).withMessage("first name must be at least 3 characters long"),
    body('fullname.lastname').isLength({min:3}).withMessage("Last name must be at least 3 characters long"),
    body("password").isLength({min:6}).withMessage("Password is required")
],
    userController.registerUser
);


module.exports = router;