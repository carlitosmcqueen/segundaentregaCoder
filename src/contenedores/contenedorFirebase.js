import admin from "firebase-admin"
import config from "../../config.js"

const connection = admin.initializeApp({
    credential: admin.credential.cert(config.firebase),
    databaseURL: "https://segundaentrega-9bb37.firebaseio.com"
})

const db = admin.firestore()

class ContenedorFirebase {
    constructor(collection) {
        this.db = db.collection(collection)
    }

    async save(carrito) {
        try {
            const data = await this.db.add(carrito)
            return { ...carrito, id: data.id }
        } catch (e) {
            console.error("No se pudo guardar", e)
        }
    }

    async getById(id) {
        try {
            const data = await this.db.doc(id).get()
            const carrito = data.data()
            return { ...carrito, id }
        } catch (e) {
            console.error("no se pudo acceder al contenido", e)
        }

    }
    async getAll() {
        try {
            
            const result = []
            const snapshot = await this.db.get();
            snapshot.forEach(doc => {
                result.push({ id: doc.id, ...doc.data() })
            })
            return result
        } catch (error) {
            console.log(error)
        }
    }
    async deleteById(id) {
        try {
            const data = await this.db.doc(id).delete()
            return data 
        } catch (e) {
            console.error("No se pudo eliminar carrito", e)
        }
    }
    async deleteAll(){
        await this.db.deleteMany({})
    }


    async updateById(element) {
        try {
            const nuevoElement = await this.db.doc(element.id).set(element)
            return nuevoElement
        } catch (e) {
            console.error("no se pudo modificar el contenido", e)
        }
    }
}
export default ContenedorFirebase