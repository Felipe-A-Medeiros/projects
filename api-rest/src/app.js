import express from 'express' 
import router from './routes.js'
const app = express() 


//indicar que o express vai receber dados no formato JSON
app.use(express.json()) 

//usar router   
app.use(router)

//ROTAS CRUD


export default app