import ContenedorFirebase from '../../contenedores/contenedorFirebase.js';

class carritoDaoFirebase extends ContenedorFirebase {
    constructor(){
        super("carritos");
    }
    async createCart() {
        try {
            const cart = await this.create({ products: [] });
            return cart;
        } catch (err) {
            console.log(err);
        }
        
    }
    async addProduct(cartId, data) {
        try {
            const cart = await this.readById(cartId);
            const newCart = [...cart.products, data];
            await this.update(cartId, { products: newCart });
        } catch (err) {
            console.log(err);
        }
    }

}

export default carritoDaoFirebase;