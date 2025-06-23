import express from 'express' 
const app = express() 

//indicar que o express vai receber dados no formato JSON
app.use(express.json()) 



function BuscarSelecaoporid(id){
  return selecoes.filter(selecao => selecao.id == id);
}


function BuscarIndex(id){
  return selecoes.findIndex(selecao => selecao.id == id);
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/selecoes', (req, res) => {
  res.send('lista de seleções')
})

app.get('/selecoes/:id', (req, res) => {
    //let index = req.params.id
    console.log(index)
})

app.post('/selecoes', (req, res) => {
  selecoes.push(req.body)
  res.status(201).send('Seleção adicionada com sucesso!')
})

app.delete('/selecoes/:id', (req, res ) => {
  let index = BuscarIndex(req.params.id)
  selecoes.splice(index, 1)
  res.send(`Seleção com id ${req.params.id} removida com sucesso!`)

} ) 

app.put('/selecoes/:id', (req, res ) => {
  let index = BuscarIndex(req.params.id)
  selecoes[index].selecao = req.body.selecao
  selecoes[index].grupo   = req.body.grupo
  res.json(selecoes)
} ) 


export default app