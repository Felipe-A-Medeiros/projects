import mysql from "mysql2" 

const conexao = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: "Felipe@157",
    database: "db-copa"
});

export default conexao;