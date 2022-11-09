import mongoose from "mongoose";
import config from "../../config.js";

await mongoose.connect(config.mongo.uri, config.mongo.option)
class ContenedorMongo {
    
    constructor(coleccion,esquema){
        this.db = mongoose.model(coleccion,esquema)
    }
    async save(data) {
        try {
            const result = await this.db.create(data);
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            const result = await this.db.find({});
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id) {
        try {
            const result = await this.db.findOne({ _id: id });
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async updateById(id, data) {
        try {
            const result = await this.db.updateOne({ _id: id }, { $set: data });
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id) {
        try {
            const result = await this.db.deleteOne({ _id: id });
            return result;
        } catch (error) {
            console.log(error);
        }
    }
    async deleteAll() {
        await this.db.deleteMany({});
      }
}

export default ContenedorMongo