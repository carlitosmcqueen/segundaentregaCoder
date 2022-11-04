import ContenedorMongo from "../../contenedores/contenedorMongo.js";

class carritoDaoMongo extends ContenedorMongo{
    constructor(){
        super("carrito",{
            productos: {type:[],default:[]},

        })
    }
}

export default carritoDaoMongo