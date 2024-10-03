import { Router } from "express"

import filmesRoutes from "./filmes.routes.js"

const routes = Router()

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor tá bala"});
})


export default routes