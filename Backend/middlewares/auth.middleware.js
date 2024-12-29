const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET="uber-secret";
const blackListTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');

module.exports.authUser = async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:'Unauthorized'});
    }   
    const isBlacklisted = await blackListTokenModel.findOne({ token:token});
    if(isBlacklisted){
        return res.status(401).json({message:'Unauthorized'});
    }
    try {
        const decoded = jwt.verify(token,JWT_SECRET);
        const User = await userModel.findById(decoded._id)
        req.user = User;
        return next();

    }
    catch (error) {
        return res.status(401).json({message:'Unauthorized'});
    }
}

module.exports.authCaptain = async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:'Unauthorized'});
    }   
    const isBlacklisted = await blackListTokenModel.findOne({ token:token});
    if(isBlacklisted){
        return res.status(401).json({message:'Unauthorized'});
    }
    try {
        const decoded = jwt.verify(token,JWT_SECRET);
        const Captain = await captainModel.findById(decoded._id)
        req.captain = Captain;
        return next();
    }
    catch (error) {
        return res.status(401).json({message:'Unauthorized'});
    }
}