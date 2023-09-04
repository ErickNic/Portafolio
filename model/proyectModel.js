import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";
const ElementModel = new mongoose.Schema({
    name:{type:String,required:true},
    imageURL:{type:String,required:true}
})
ElementModel.plugin(mongooseUniqueValidator);
const proyectSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    techStack:[{type:ElementModel,required:true,default:[]}],
    relevant:{type:Boolean,required:true,default:false},
    images:[{type:ElementModel,required:true,default:[]}],
},{collection:'proyect'})

proyectSchema.plugin(mongooseUniqueValidator);
export default mongoose.model('proyect',proyectSchema)