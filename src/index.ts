import express, { Request, Response } from 'express'
import UsuarioRouter from './routes/UsuarioRoutes'
import LeilaoRouter from './routes/LeilaoRoutes'
import LanceRouter from './routes/LeilaoRoutes'


const app = express()
const port = 3000

app.use(express.json())
app.use('/api', UsuarioRouter)
app.use('/api', LeilaoRouter)
app.use('/api', LanceRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Sistema Leiloeiro - ULL')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})