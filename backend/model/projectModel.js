import mongoose from "mongoose";


const ProjectModel = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    
},{collection:'projects'})