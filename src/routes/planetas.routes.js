import { Router } from "express"

const planetasRoutes = Router()


let planetas = [
    {
        id: Number(Math.floor (Math.random() *999999) + 1),
        nome: "Dev",
        temperatura: 13.3,
        agua: false, // Indicação de existência de água
        atm: ["JS", "NODE", "VS", "Code"]
    }
]

// Rota para buscar todos os elementos do array planetas
planetasRoutes.get("/", (req, res) => {
    return res.status(200).send(planetas)
})  


// Rota para cadastrar um novo planeta
planetasRoutes.post("/", (req, res) => {
    const {
        nome,
        temperatura,
        agua,
        atm
    } = req.body

    if(!nome || !temperatura || !agua){
        return res.status(404).send({
            message: "Os campos nome, temperatura e água são obrigatórios!",
        })
    }

    //Validação de existência de água
    if(agua != "sim" && agua != "não"){
        return res.status(404).send({
            message: "Digite 'sim' ou 'não'!",
        })
    }

    const novoPlaneta = {
        id:  Number(Math.floor (Math.random() *999999) + 1),
        nome,
        temperatura,
        agua,
        atm
    }
    planetas.push(novoPlaneta)
    return res.status(201).send({
        message: "Planeta cadastrado", novoPlaneta
    })
})

// Rota para buscar um elemento específico do array planetas
planetasRoutes.get("/:id", (req, res) => {
    const { id } = req.params

    console.log(id)

    const filme = filme.find((movie) => movie.id === Number(id))

    console.log(filme)

    if (!filme) {
        return res.status(404).send({
            message: "Planeta não encontrado"
        })
    }
    return res.status(200).send(filme)
})

// Rota para editar uma rota de filme
planetasRoutes.put("/:id", (req, res) => {
    const { id } = req.params

    const filme = planetas.find((movie) => movie.id === Number(id))

    if (!filme) {
        return res.status(404).send({ message: "Planeta não encontrado" })
    }

    const { nome, temperatura, emCartaz } = req.body

    filme.nome = nome
    filme.temperatura = temperatura
    filme.emCartaz = emCartaz

    return res.status(200).send({ message: "Planeta atualizado", filme })
}
)

// Rota para deletar um filmeMarcante
planetasRoutes.delete("/:id", (req, res) => {
    const { id } = req.params

    const filme = guloseimas.find((doce) => doce.id === Number(id))

    if (!filme) {
        return res.status(404).send({ message: "Planeta não encontrado" })
    }

    planetas = planetas.filter((movie) => movie.id === Number(id))

    return res.status(200).send({ message: "Planeta deletado!", filme })
})

export default planetasRoutes