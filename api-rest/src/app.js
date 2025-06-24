import express from 'express' 
const app = express() 
import conexao from '../infra/conexao.js'

//indicar que o express vai receber dados no formato JSON
app.use(express.json()) 



function BuscarSelecaoporid(id){
  return selecoes.filter(selecao => selecao.id == id);
}


function BuscarIndex(id){
  return selecoes.findIndex(selecao => selecao.id == id);
}

app.get('/selecoes/id/:id', (req, res) => {
  const id = req.params.id 
  const sql = "SELECT * from selecoes WHERE id = ?"
   conexao.query(sql, id, (erro, resultado) => {
    const linha = resultado[0]
    if (erro) {
      res.status(404).json({"erro": erro})
    } else {
      res.status(200).json(linha)
    }
  })

})



app.get('/selecoes', (req, res) => {
   const sql = "SELECT * from selecoes"
   conexao.query(sql, (erro, resultado) => {
    if (erro ) {
      console.log(erro)
    } else {
      res.status(200).json(resultado)
    }
  })
})

app.post('/selecoes', (req, res) => {
 // selecoes.push(req.body)
 // res.status(201).send('Seleção adicionada com sucesso!')
      const selecao = req.body
      const sql = "INSERT INTO selecoes SET ?;"
      conexao.query(sql, selecao, (erro, resultado) => {
        
        if (erro) {
            res.status(400).json({"erro": erro})
        } else {
           res.status(201).json(resultado)
        }
      })

})

app.delete('/selecoes/:id', (req, res ) => {
  // let index = BuscarIndex(req.params.id)
  // selecoes.splice(index, 1)
  // res.send(`Seleção com id ${req.params.id} removida com sucesso!`)
  const id = req.params.id
   const sql = "DELETE from selecoes WHERE id = ?"
   conexao.query(sql, id, (erro, resultado) => {

    if (erro) {
      res.status(404).json({"erro": erro})
    } else {
      res.status(200).json(resultado)
    }
  })
})

app.put('/selecoes/:id', (req, res ) => {
  // let index = BuscarIndex(req.params.id)
  // selecoes[index].selecao = req.body.selecao
  // selecoes[index].grupo   = req.body.grupo
  // res.json(selecoes)
      const id = req.params.id
      const selecao = req.body
      const sql = "UPDATE selecoes SET ? WHERE id = ?;"
      conexao.query(sql, [selecao, id], (erro, resultado) => {

        if (erro) {
            res.status(400).json({"erro": erro})
        } else {
           res.status(200).json(resultado)
        }
      })
} ) 


export default app