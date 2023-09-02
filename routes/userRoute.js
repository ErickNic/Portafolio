import express from 'express';
import { loginController,changePasswordController,signinController } from '../controllers/userController.js';
import  authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();


router.post('/login',loginController);
router.post('/register',signinController);

router.use(authMiddleware);
router.patch('/changeps',changePasswordController);

export {router as userRoutes}