import ContenedorFirebase from '../../contenedores/contenedorFirebase.js';

class carritoDaoFirebase extends ContenedorFirebase {
    constructor(){
        super("carrito");
    }
    async createCart() {
        try {
            const cart = await this.save({ productos: [] });
            return cart;
        } catch (err) {
            console.log(err);
        }
        
    }
    async addProduct(cartId, data) {
        try {
            const cart = await this.getById(cartId);
            const newCart = [...cart.productos, data];
            await this.updateById(cartId, { productos: newCart });
        } catch (err) {
            console.log(err);
        }
    }

}

export default carritoDaoFirebase;