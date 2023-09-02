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
    const {title,description,images} = req.body;
    let createdProyect;
    try {
        createdProyect = new proyectModel({
            title,
            description,
            images
        })
        await createdProyect.save();
    } catch (error) {
        return next(()=>{
            console.log(`An error occurred during the creation proyect time`)
        })
    }
    res.status(201).json(createdProyect)
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
export const addImageController = async (req,res,next) =>{
    const {} = req.body;
}
export const deleteImageController = async (req,res,next) =>{

}