const express = require ('express')
const conexao= require('./db')
const app = express()

app.use(express.json());

app.post('/cadfunc', function(req,res){
    const {nome,sobrenome,cargo_id}=req.body
    let sql= `INSERT INTO funcionario (nome, sobrenome, cargo_id) VALUES ('${nome}', '${sobrenome}', '${cargo_id}')`
    conexao.query(sql, function (err,ret){
        if (err) throw err
        res.send(ret)
        console.log(ret)
    })
})

app.post('/cadcargo', function(req,res){
    const {cargo,dep_id}=req.body
    let sql= `INSERT INTO cargo (cargo, dep_id) VALUES (?, ?)`
    let valor=[cargo,dep_id]
    conexao.query(sql,valor, function(err,ret){
        if (err) throw err
        res.send(ret)
        console.log(ret)
    })
})

app.post('/caddep', function(req,res){
    const {departamento}=req.body
    let sql= `INSERT INTO departamento (departamento) VALUES (?)`
    let valor=[departamento]
    conexao.query(sql,valor, function(err,ret){
        if (err) throw err
        res.send(ret)
        console.log(ret)
    })
})

app.get('/depid/:id', function(req,res){ //vizualizar departamento por id
    const {id}=req.params
    let sql= `SELECT * FROM departamento WHERE id_dep=?`
    let valor=[id]
    conexao.query(sql,valor, function (err,ret){
        if (err) throw err
        res.send (ret)
        console.log(ret)
    })
})

app.get('/funcid/:id', function(req,res){ //vizualizar funcionario por id
    const {id}=req.params
    let sql= `SELECT * FROM vw_funcionario_por_id WHERE id = ?; `
    let valor=[Number(id)]
    conexao.query(sql,valor, function (err,ret){
        if (err) throw err
        res.send (ret)
        console.log(ret)
    })
})

app.get('/cargoid/:id', function(req,res){ //vizualizar cargo por id
    const {id}=req.params
    let sql= `SELECT * FROM vw_cargo_por_id WHERE id_cargo=?`
    let valor=[Number(id)]
    conexao.query(sql,valor, function (err,ret){
        if (err) throw err
        res.send (ret)
        console.log(ret)
    })
})

app.get('/dep/:cargo', function (req,res){
    const {cargo}=req.params
    let sql= `SELECT * FROM vw_cargo_por_dep WHERE cargo=?`
    let valor=[cargo]
    conexao.query(sql,valor, function (err,ret){
        if (err) throw err
        res.send (ret)
        console.log(ret)
    })
})

app.get('/funcnome/:nome', function (req,res){
    const {nome}=req.params
    let sql= `SELECT * FROM vw_func_por_nome where nome=?`
    let valor=[nome]
    conexao.query(sql,valor, function (err,ret){
        if (err) throw err
        res.send (ret)
        console.log(ret)
    })
})

app.put('/editarfunc/:id', function(req,res){
    let id=req.params.id
    const {nome,sobrenome,id_cargo}=req.body

    const sql= `UPDATE funcionario set nome=?, sobrenome=?,cargo_id=? where id=?`
    const valor=[nome,sobrenome,Number(id_cargo),id]
    conexao.query(sql,valor, function (err,ret){
        if (err) throw err
        res.send (ret)
        console.log(ret)
    })
})

app.put('/editarcargo/:id', function(req,res){
    const id=req.params.id
    const {cargo,dep_id}=req.body

    const sql= `UPDATE cargo set cargo=?,dep_id=? where id_cargo=?`
    const valor=[cargo,dep_id,id]
    conexao.query(sql,valor, function (err,ret){
        if (err) throw err
        res.send (ret)
        console.log(ret)
    })
})

app.put('/editardep/:id', function(req,res){
    const id=req.params.id
    const {departamento}=req.body

    const sql= `UPDATE departamento set departamento=? where id_dep=?`
    const valor=[departamento,id]
    conexao.query(sql,valor, function (err,ret){
        if (err) throw err
        res.send (ret)
        console.log(ret)
    })
})

app.delete('/delfunc/:id', function(req,res){
    let id=req.params.id

    const sql= `DELETE FROM funcionario where id=?`
    const valor=[id]
    conexao.query(sql,valor, function (err,ret){
        if (err) throw err
        res.send (ret)
        console.log(ret)
    })
})


app.delete('/delcargo/:id', function(req, res) {
    const id = req.params.id;

    const sqlUpdateFuncionarios = `UPDATE funcionario SET cargo_id = NULL WHERE cargo_id = ?`;

    conexao.query(sqlUpdateFuncionarios, [id], function(err, result) {
       if(err) throw err
       console.log(result)
       res.send(result)


        const sqlDeleteCargo = `DELETE FROM cargo WHERE id_cargo = ?`;

        conexao.query(sqlDeleteCargo, [id], function(err, result) {
            if (err) throw err
            console.log(result)
            res.send(result)
        });
    });
});



app.delete('/deldep/:id', function(req,res){
    const id=req.params.id

    const sql= `DELETE FROM departamento WHERE id_dep=? `
    const valor=[id]
    conexao.query(sql,valor, function (err,ret){
        if (err) throw err
        res.send (ret)
        console.log(ret)
    })
})
app.listen(3030, ()=>{
    console.log(`example app listening on port ${3030}`)
  })