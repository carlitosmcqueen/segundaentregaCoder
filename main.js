import express from "express";

const app = express();

import { productosRouter } from './src/rutas/productos.js';
import { carritoRouter } from './src/rutas/carrito.js';
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/productos", productosRouter);
app.use("/carrito", carritoRouter);


app.listen(8080, () => {
  console.log("Server ON");
});
