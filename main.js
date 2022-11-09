import express from "express";
const app = express();

import { productosRouter } from './src/rutas/productos.js';
import { carritoRouter } from './src/rutas/carrito.js';
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/carrito", carritoRouter);
app.use("/productos", productosRouter);


app.listen(8080, () => {
  console.log("conectado");
});
