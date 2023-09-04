import express from 'express';
const router = express.Router();
import { getAllController,createOneController,deleteOneController,updateOneController, markProyectAsRelevant,deleteImageFromImagesController, addImageToImagesController, addstackToTechStackController, deleteStackFromTechstackController } from '../controllers/proyectControllers.js';
import  authMiddleware from '../middleware/authMiddleware.js';

router.get('/getall',getAllController);
router.use(authMiddleware);
router.post('/create',createOneController);
router.delete('/delete',deleteOneController);
router.patch('/update',updateOneController);
router.patch('/update/markrelevance',markProyectAsRelevant);
router.patch('/update/image/add',addImageToImagesController);
router.patch('/update/image/delete',deleteImageFromImagesController);
router.patch('/update/techstack/add',addstackToTechStackController);
router.patch('/update/techstack/delete',deleteStackFromTechstackController);


export {router as proyectRoutes}