import * as dotenv from "dotenv"
dotenv.config()
const daos = {
    mongo: async ()=>{
        const {default :carritoDaoMongo } = await import("./carrito/daoCarritoMongo.js")
        const {default : productosDaoMongo} = await import("./productos/daoProductosMongo.js")

        return {
            carritoDao: new carritoDaoMongo(),
            productosDao: new productosDaoMongo()
        }
    },
    firebase: async()=>{
        const {default:carritoDaoFirebase} = await import("./carrito/daoCarritoFirebase.js")
        const {default: productosDaoFirebase} = await import("./productos/daoProductosFirebase.js")

        return{
            carritoDao : new carritoDaoFirebase(),
            productosDao: new productosDaoFirebase()
        }
    }
}
export default daos[process.env.TIPO]
