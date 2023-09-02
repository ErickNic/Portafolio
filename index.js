import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'
import { proyectRoutes } from "./routes/proyectsRoute.js";
import { userRoutes } from "./routes/userRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE,OPTIONS');

  next();
});
app.use('/proyect',proyectRoutes);
app.use('/user', userRoutes);

mongoose.connect( `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.5rsxkjh.mongodb.net/${process.env.DB_NM}?retryWrites=true&w=majority`, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => {
    console.log('Conexión exitosa a MongoDB');
    app.listen(PORT, () => {
        console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
})
.catch((error) => {
console.error('Error al conectar a MongoDB:', error);
});