import { Router, Request, Response } from 'express'

const route = Router()
///// get  - buscar dados 
///// post - Criar dados 
////  put - Editar dados ENTIDADE COMPLETA
//// patch - Editar dados apenas uma parcialidade
//// DELETE - deletar dados
route.get('/basic', (req: Request, res: Response) => {
    res.json('Hello World')
})

{name: Rafael, cpf: 09311208731274812}