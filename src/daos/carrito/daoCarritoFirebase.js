import ContenedorFirebase from '../../contenedores/contenedorFirebase.js';

class carritoDaoFirebase extends ContenedorFirebase {
    constructor(){
        super("carritos");
    }
}

export default carritoDaoFirebase;