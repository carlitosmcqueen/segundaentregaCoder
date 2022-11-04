import daos from "./src/daos/index.js"


(async () => {

    const {carritoDao,productosDao } = await daos()

console.log(await carritoDao.save({productos:["papas","supermario","jose"]}))
})()