import ContenedorFirebase from '../../contenedores/contenedorFirebase.js';

class productosDaoFirebase extends ContenedorFirebase {
    constructor(){
        super("productos");
    }
}

export default productosDaoFirebase