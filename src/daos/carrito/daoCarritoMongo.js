import ContenedorMongo from "../../contenedores/contenedorMongo.js";

class carritoDaoMongo extends ContenedorMongo{
    constructor(){
        super("carrito",{productos:Array})
    }
    async createCart(){
        try{
            const cart = await this.db.create({productos:[]})
            return cart
        }catch(e){
            console.log(e)
        }
    }

    async addProduct(id,productoCarrito){
        try{
            const carrito = await this.db.updateOne({_id:id}, {$push:{productos : productoCarrito}})
            return carrito
        }catch(e){
            console.log(e)

        }
    }

}
export default carritoDaoMongo
