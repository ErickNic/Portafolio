import userModel from "../model/userModel.js";
import bcrypt from 'bcryptjs';
import mongoose from "mongoose";
import jwt  from "jsonwebtoken";
import 'dotenv/config'
export const loginController = async (req,res,next) =>{
    const {password,email} = req.body;
    let userExists;
    try {
        userExists = await userModel.findOne({email:email}).exec();
    } catch (error) {
        next(()=>{
            console.log(`There's been an error looking for the email`)
        })
    }
    console.log(userExists)
    if(!userExists){
        return next(()=>{
            console.log('The email provided is not registered');
        })
    }
    let isValidPassword = false;
    try{
        isValidPassword = await bcrypt.compare(password,userExists.password);
    }catch(err){
        console.log(`There' been an error validating the password`);
        return next(err);
    }
    if(!isValidPassword){
        return next(()=>{
            console.log('The password does not match')
        })
    }
    let token;
    try{
        token = jwt.sign({
            userId:userExists.id,
            email: userExists.email
        },process.env.JWTFIRM_SECRETPHRASE, {expiresIn:'1h'});

    }catch(err){
        console.log(`An error occurred creating the token`);
        return next(err);
    }
    res
    .status(201)
    .json({ userId: userExists.id, email: userExists.email, token: token });
}
export const signinController = async (req,res,next) =>{
    const {name, email,password} = req.body;
    let userExists;
    try{
        userExists = await userModel.findOne({email:email});
    }catch(err){
        console.log('An error occurred identifying if user already exists')
        return next(err)
    }
    if(userExists){
        console.log(`This email's already used`)
        return next(()=>{
            console.log('try using another email')
        })
    }
    let hashPassword;
    try{
        const salt = bcrypt.genSaltSync(10);
        hashPassword = await bcrypt.hash(password,salt);
        
    }catch(err){
        console.log(`There's been an error hashing the password\n ${err}`)
        return next(err);
    }
    const createdUser = new userModel({
        name: name,
        email:email,
        password:hashPassword
    })
    try{
        await createdUser.save();
    }catch(err){
        console.log(createdUser)
        console.log(`An error occurred saving the created user`)
        return next(err);
    }
    let token;
    try{
        token = jwt.sign({
            userId:new mongoose.Types.ObjectId(createdUser._id),
            email: createdUser.email
        },process.env.JWTFIRM_SECRETPHRASE, {expiresIn:'1h'});

    }catch(err){
        console.log(`An error occurred creating the token`);
        return next(err);
    }
    res
    .status(201)
    .json({ userId: createdUser.id, email: createdUser.email, token: token });
}
export const changePasswordController  = async (req,res,next) =>{
    const {actualPassword,newPassword} = req.body;
    const ObjectId = new mongoose.Types.ObjectId(req.userId);
    const user = await userModel.findById(req.userId);
    let isValidPassword = false;
    try{
        isValidPassword = await bcrypt.compare(actualPassword,user.password);
    }catch(err){
        console.log(`There' been an error validating the password`);
        return next(err);
    }
    if(!isValidPassword){
        const error = new httpError('The password does not match!!!',401)
        return next(error)
    }
    let newHashPassword;
    try{
        const salt = bcrypt.genSaltSync(10);
        newHashPassword = await bcrypt.hash(newPassword,salt);
        await userModel.findByIdAndUpdate(req.userId,{ $set: { password: newHashPassword }});
        
    } catch (error) {
        console.log(error);
        return next(err);
    }
    res.json('compared Password');
}
export const uploadFile = async (req,res,next) =>{}
export const getAlluploadedFile = async (req,res,next) =>{}
export const DeleteaUploadedFile = async (req,res,next) =>{}