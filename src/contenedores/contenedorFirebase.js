import admin from "firebase-admin"
import config from "../../config.js"
admin.initializeApp({
    credential: admin.credential.cert(config.firebase),
    databaseURL: "https://segundaentrega-9bb37.firebaseio.com"
})

const db = admin.firestore()

class ContenedorFirebase {
    constructor(collection) {
        this.db = db,
        this.collection = db.collection(collection);

    }

    async save(carrito) {
        try {
            const data = await this.collection.add(carrito)
            return {data}
        } catch (e) {
            console.error("No se pudo guardar", e)
        }
    }

    async getById(id) {
        try {
            const data = await this.collection.doc(id).get()
            return data.data()
        } catch (e) {
            console.error("no se pudo acceder al contenido", e)
        }

    }
    async getAll() {
        try {
            const result = await this.collection.get();
            const docs = result.docs;
            const output = docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            return output;
        } catch (error) {
            console.log(error);
        }
    }
    async deleteById(id) {
        try {
            const result = await this.collection.doc(id).delete();
            return result;
        } catch (error) {
            console.log(error);
        }
    }
    async deleteAll(){
        await this.collection.deleteMany({})
    }


    async updateById(id,data){
        try {
            const result = await this.collection.doc(id).update(data);
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}
export default ContenedorFirebase