const express = require ('express')
const conexao = require ('./db')
const app = express()




//manipulação de dados
app.use(express.json());
app.use(express.urlencoded({extends:false}))


//view veiculos cadastrados
app.get('/viewall',(req,res)=>{ 
conexao.query('SELECT * FROM veiculos', function view(erro,retorno){
    if (erro) throw erro
    res.send(retorno)
  
})

});

//deletar por id 
app.delete('/remover/:id', function(req,res){
    const id = req.params.id;
    conexao.query(`DELETE FROM veiculos WHERE id = ?`,[id], function (erro,retorno){
        if (erro) throw erro

        res.send(retorno)
    });
});

 app.get('/viewid/:id', (req, res) => { //view id
    const { id } = req.params; 
   conexao.query(`SELECT * FROM veiculos WHERE id=${id}`,(err,result)=>{
    res.send(result);
   })
 });

 app.put('/editar/:id', function(req,res){
 conexao.query(`SELECT * FROM veiculos WHERE id=${req.params.id}`,function(erro,result){
    // caso haja erro comando sql
    if(erro) throw erro

    //caso execute 
  res.send(result)
 })
    
 })

 app.put('/editar/:id', function(req,res){
    let id=req.params
    let marca=req.body.marca;
    let modelo=req.body.modelo;
    let ano =req.body.ano;
    let prop=req.body.proprietario;
    let cor=req.body.cor;

    const query = `UPDATE veiculos SET marca = ?, modelo = ?, ano = ?, proprietario = ?, cor = ? WHERE id = ?`;
    const values = [marca, modelo, ano, prop, cor, id];
    
    conexao.query(query, values, function (erro, retorno) {
        if (erro) throw erro

        console.log(retorno)
        res.send(retorno)
    })
 })
 app.get('/search', function (req,res){
    let id=req.query.id
    const query = `SELECT * FROM veiculos WHERE id=?`;
    const values=[id];
    conexao.query(query,values, function(erro, retorno){
        if (erro) throw erro
       res.send(retorno)
    })
 })
 app.get('/searchYear', function (req,res){
    let year=req.query.ano
    const query=`SELECT * FROM veiculos WHERE ano=?`;
    const values=[year]
    conexao.query(query,values, function(erro,retorno){
        if (erro) throw erro
        res.send(retorno)
    })
 })

 app.get('/searchColor',function(req,res){
    let cor=req.body.cor
    const query=`SELECT * FROM veiculos WHERE cor=?`;
    const values=[cor]
    conexao.query(query,values, function (erro,retorno){
        if (erro) throw erro
        res.send(retorno)
    })
 })
 app.post('/cadastrar', function (req,res){ //cadastro 
    let marca=req.body.marca;
    let modelo=req.body.modelo;
    let ano =req.body.ano;
    let prop=req.body.proprietario;
    let cor=req.body.cor;

    let sql = ` INSERT INTO veiculos (marca,  modelo, ano, proprietario, cor) VALUES ('${marca}', '${modelo}', ${ano}, '${prop}', '${cor}')`
    conexao.query(sql, function(erro,retorno){
       //caso ocorra erro
        if(erro) throw erro
        
        //caso ocorra o cadastro 
        console.log(retorno)
        res.send(retorno)

    });

})

app.listen(3030, ()=>{
    console.log(`example app listening on port ${3030}`)
  })

