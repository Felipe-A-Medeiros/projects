import e, { Router } from "express";
import SelecaoController from './app/controllers/Selecaocontroller.js';
const router = Router();

//rotas
router.get('/selecoes', SelecaoController.index) 
router.get('/selecoes/id/:id', SelecaoController.show)
router.post('/selecoes', SelecaoController.store) 
router.put('/selecoes/:id', SelecaoController.update) 
router.delete('/selecoes/:id', SelecaoController.delete) 

export default router;