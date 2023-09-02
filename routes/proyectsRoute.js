import express from 'express';
const router = express.Router();
import { getAllController,createOneController,deleteOneController,updateOneController } from '../controllers/proyectControllers.js';
import  authMiddleware from '../middleware/authMiddleware.js';

router.get('/getall',getAllController);
router.use(authMiddleware);
router.post('/create',createOneController);
router.delete('/delete',deleteOneController);
router.patch('/update',updateOneController);


export {router as proyectRoutes}