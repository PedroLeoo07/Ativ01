import { Router } from "express"

import planetasRoutes from "./planetas.routes.js";

const routes = Router()



routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor tá bala"});
})

routes.use("/planetas", planetasRoutes)

export default routes