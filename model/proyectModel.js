import mongoose from "mongoose";
const techStack = new mongoose.Schema({
    name:{type:String,required:true},
    imageURL:{type:String,required:true}
})
const proyectSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    images:[{type:String,required:true,default:[]}],
},{collection:'proyect'})

export default mongoose.model('proyect',proyectSchema)