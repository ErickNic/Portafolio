import mongoose from "mongoose";
import proyectModel from "../model/proyectModel.js";

export const getAllController = async (req,res,next) => {
    let proyects
    try {
        proyects = await proyectModel.find({})
    } catch (error) {
        return next(()=>{
            res.json('an error occurred during the proyect loading process')
        })
    }
    res.json({
        messsage:'successfully loaded proyects',
        proyects:proyects
    })
}
export const createOneController = async (req,res,next) => {
    /* console.log(req.auth);
    res.json('createOne'); */
    const {title,description} = req.body;
    let {images,techStack,relevant} = req.body;
    techStack===undefined?techStack=[]:techStack=techStack;
    images===undefined?images=[]:images=images;
    let createdProyect;
    try {
        createdProyect = new proyectModel({
            title,
            description,
            images,
            techStack,
            relevant
        })
        await createdProyect.save();
    } catch (error) {
        return next(()=>{
            console.log(`An error occurred during the creation proyect time`)
        })
    }
    
    res.status(201).json(createdProyect);
}
export const deleteOneController = async (req,res,next) => {
    const {proyectId}  = req.body;
    let deletedProyect
    try {
        deletedProyect = await proyectModel.findByIdAndDelete(proyectId)
    } catch (error) {
        return next(()=>{
            console.log(`An error occurred during deleting process`)
        })
    }
    res.json({message:'Deleted successfully',deletedProyect:deletedProyect})
}
export const updateOneController = async (req,res,next) => {
    const {id,updatingData} = req.body;
    let updatedProyect;
    try {
        updatedProyect = await proyectModel.findByIdAndUpdate(id,updatingData,{new:true});
    } catch (error) {
        const err =  new HttpError('An error has occurred while updating',501);
        return err;
    }
    res.json({message:'updated Successfully', updatedProyect: updatedProyect})
}
export const markProyectAsRelevant = async (req,res,next) =>{
    const {proyectId} = req.body;

    let relevantProyects;
    try {
        relevantProyects = await proyectModel.find({relevant:true});
        if(relevantProyects.length ===0){
            console.log('no items in here');
        }else if(relevantProyects.length ===4){
            console.log(`This place is full`)
        }else{
            await proyectModel.findByIdAndUpdate(proyectId,{relevant:true},(err,doc) =>{
                if (err){
                    console.log(err)
                }
                console.log(doc)
            });
        }
    } catch (error) {
        console.log(error);
    }
    res.status(201).json('relevant Proyect')
}
export const addImageToImagesController = async (req,res,next) =>{
    const {data,proyectId} = req.body;
    let result;
    try {
        result = await proyectModel.findByIdAndUpdate(proyectId,{$push:{images:data}},{new:true});
    } catch (error) {
        console.log(`There's been an error`)
    }
    res.status(201).json({message:'image added sucessfully',newObject:result});
}
export const deleteImageFromImagesController = async (req,res,next) =>{
    const {imgId,proyectId} = req.body;
    let result;
    try {
        result = await proyectModel.findByIdAndUpdate(proyectId,{$pull:{images:{_id:{$eq:new mongoose.Types.ObjectId(imgId)}}}},{new:true}).exec()
    } catch (error) {
        res.json({message:error})
    }
    res.json({message:`the image which ID is ${imgId} has been deleted from proyect/id:${proyectId}`})
}
export const addstackToTechStackController = async (req,res,next) =>{
    const {data,proyectId} = req.body;
    let result;
    try {
        result = await proyectModel.findByIdAndUpdate(proyectId,{$push:{techStack:data}},{new:true});
    } catch (error) {
        console.log(`There's been an error`);
    }
    res.status(201).json({message:'image added sucessfully',newObject:result});
}
export const deleteStackFromTechstackController = async (req,res,next) =>{
    const {imgId,proyectId} = req.body;
    let result;
    try {
        result = await proyectModel.findByIdAndUpdate(proyectId,{$pull:{techStack:{_id:{$eq:new mongoose.Types.ObjectId(imgId)}}}},{new:true}).exec()
    } catch (error) {
        res.json({message:error})
    }
    res.json({message:`the image which ID is ${imgId} has been deleted from proyect/id:${proyectId}`})
}