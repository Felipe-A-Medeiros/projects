import app from './app.js'; // Importa o aplicativo Express

import conexao from '../infra/conexao.js';

const PORT = 3000; 

// fazera conexão com o banco de dados
conexao.connect((erro) => {
    if (erro) {
        console.log('Erro ao conectar ao banco de dados:', erro);
    }
    else{ 
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
        // escutando a porta do servidor
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    }
   
});
