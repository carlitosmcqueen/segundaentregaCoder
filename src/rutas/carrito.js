import express from 'express';
import { Router } from 'express';
import daos from "../daos/index.js";

const app = express();
app.use(express.json());
const {carritoDao,productosDao } = await daos()
const router = Router()


router.get("/", async (req, res) => {
    try {
        const data = await carritoDao.getAll()
        res.send(data);
    } catch (err) {
        res.status(404).send(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await carritoDao.getById(id);
        res.send(data);
    } catch (err) {
        res.status(404).send(err);
    }
});


router.post("/", async (req, res) => {
    try {
        const data = req.body;
        await carritoDao.createCart(data);
        res.send(data);
    } catch (err) {
        res.status(404).send(err);
    }
});

router.post("/:id/productos/:id_producto", async (req, res) => {
    try {
        const { id, id_producto } = req.params;
        const ProductoCompleto = await productosDao.getById(id_producto);
        await carritoDao.addProduct(id, ProductoCompleto);
        res.send("Producto agregado al carrito");
    } catch (err) {
        res.status(404).send(err);
    }
});


router.put("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const prodNuevo = req.body;
        carritoDao.updateById(id, prodNuevo);
        res.send(`Producto con id ${id} actualizado`);
    } catch (err) {
        res.status(404).send(err.msg);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await carritoDao.deleteById(id);
        res.send(`El producto con id ${id} fue eliminado`);
    } catch (err) {
        res.status(404).send(err.msg);
    }
});

export { router as carritoRouter }
