import conexao from "../database/conexao.js";
 
class SelecaoRepository {
    //Crud 
        create(selecao) { 
            return new Promise((resolve, reject) => {
                const sql = "INSERT INTO selecoes SET ?";
                conexao.query(sql, selecao, (erro, resultado) => {
                    if (erro) return reject("não foi possivel cadastrar")
                    // fazer o parse do resultado
                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
                })
            })
        }
        
        findAll() {
            const sql = "SELECT * from selecoes"
            return new Promise((resolve, reject) => {
                conexao.query(sql, (erro, result) => {
                    if (erro) return reject("não foi possivel localizar")
                        const row = JSON.parse(JSON.stringify(result))
                        return resolve(row)
                })
            })
        }
        findById(id) {
            
            const sql = "SELECT * from selecoes WHERE id = ?"
            return new Promise((resolve, reject) => {
                conexao.query(sql, id, (erro, resultado) => {
                    if (erro) return reject("não foi possivel localizar")
                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
                })
            })
        }

        update(selecao, id) { 
            const sql = "UPDATE selecoes SET ? WHERE id = ?"
            return new Promise((resolve, reject) => {
                conexao.query(sql, [selecao, id], (erro, resultado) => {
                    if (erro) return reject("não foi possivel localizar")
                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
                })
            })
        } 
        delete(id) { 
            const sql = "DELETE from selecoes WHERE id = ?"
            return new Promise((resolve, reject) => {
                conexao.query(sql, id, (erro, resultado) => {
                    if (erro) return reject("não foi possivel apagar")
                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
                })
            })
        }
    }

export default new SelecaoRepository();
