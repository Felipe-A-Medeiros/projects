import express from 'express' 
const app = express() 
import SelecaoController from './app/controllers/selecaocontroller.js'

//indicar que o express vai receber dados no formato JSON
app.use(express.json()) 

//ROTAS CRUD
app.get('/selecoes', SelecaoController.index) 
app.get('/selecoes/id/:id', SelecaoController.show)
app.post('/selecoes', SelecaoController.store) 
app.put('/selecoes/:id', SelecaoController.update) 
app.delete('/selecoes/:id', SelecaoController.delete) 

export default app