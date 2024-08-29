import { Router } from "express"

const personagensRoutes = Router()

const personagens = [
    {
         id: 100,
         nome: "Totoro",
         studio: "Ghibli",
         vivo: true
    },

    {
         id: 101,
         nome: "Cinderela",
         studio: "Disney",
         vivo: true
    },

    {
         id: 102,
         nome: "Boo",
         studio: "Pixar",
         vivo: true
    }
]

app.get("/personagens", (req, res) => {
    return res.status(200)
    .send( personagens )
})