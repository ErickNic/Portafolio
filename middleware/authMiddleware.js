import jwt from 'jsonwebtoken'
import 'dotenv/config';

const authMiddleware = async(req,res,next) =>{
    if (req.method === 'OPTIONS') {
        return next();
      }
      try {
        const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
        if (!token) {
          throw new Error('Authentication failed!');
        }
        const decodedToken = jwt.verify(token, process.env.JWTFIRM_SECRETPHRASE);
        req.userData = { userId: decodedToken.userId };
        next();
      } catch (err) {
        return next(err)
      }
}
export default authMiddleware;