const mysql = require("mysql2")

const conexao=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'empresa'
});

conexao.connect(function(erro){
    if (erro) throw erro;
    console.log("conexão feita!")
})

module.exports = conexao
