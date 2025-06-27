import express from 'express' 
import router from './routes.js'
import cors from 'cors' // Importa o middleware CORS para permitir requisições de diferentes origens
const app = express() 

app.use(cors()) // Usar o cors para permitir requisições de diferentes origens

//indicar que o express vai receber dados no formato JSON
app.use(express.json()) 

//usar router   
app.use(router)

//ROTAS CRUD


export default app