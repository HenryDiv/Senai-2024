const express = require ('express')
const mysql= require("mysql")
const app = express()
const  {engine} = require ('express-handlebars')

//add bootstrap
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'))
//config express
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


//manipulação de dados
app.use(express.json());
app.use(express.urlencoded({extends:false}))


const conexao=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'api_veiculos'

});
conexao.connect(function(erro){
    if(erro) throw erro;
    console.log('conexao sucessful')
});

app.get('/',(req,res)=>{
    res.render('api')
      
    })

//view veiculos cadastrados
app.get('/viewall',(req,res)=>{ 
conexao.query('SELECT * FROM veiculos', function view(erro,retorno){
    res.render("api", {carros:retorno})
  
})

});

//deletar por id 
app.get('/remover/:id', function(req,res){
    const id = req.params.id;
    conexao.query(`DELETE FROM veiculos WHERE id = ?`,[id], function (erro,retorno){
        if (erro) throw erro

        res.redirect('/viewall')
    });
});

 app.get('/viewid/:id', (req, res) => { //view id
    const { id } = req.params; 
   conexao.query(`SELECT * FROM veiculos WHERE id=${id}`,(err,result)=>{
    res.send(result);
   })
 });

 app.get('/formEditar/:id', function(req,res){
 conexao.query(`SELECT * FROM veiculos WHERE id=${req.params.id}`,function(erro,result){
    // caso haja erro comando sql
    if(erro) throw erro

    //caso execute 
    res.render('formEditar', {veiculo:result[0]})
 })
    
 })

 app.post('/editar', function(req,res){
    let id=req.body.id
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
        res.redirect('/')
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
        res.redirect('/')

    });

})

// app.get('/viewall',(req, res)=>{ //view all
//     res.send(veiculos)
// })

// app.get('/viewid/:id', (req, res) => { //view id
//     const { id } = req.params; 
//     const search = veiculos[id]; 

//     if (search) {
//         res.send(search); 
//     } else {
//         res.send('Veículo não encontrado' )
//     }
// });
// app.get('/viewyear/:year',(req,res)=>{ //view year
//     const {year}=req.params
//     const result = veiculos.filter((veiculos) => veiculos.ano=== year);
//     res.send(result)
// })

// app.get('/viewcolor/:color', (req,res)=>{ //view color 
//     const {color}=req.params
//     const index=String(color)
//     const result=veiculos.filter((veiculos)=>veiculos.cor ===index)
//     res.send(`veiculo na cor ${index} encotrado! ${JSON.stringify(result )}`)
//     //res.send(result)
// })

// app.delete('/del/:id', (req,res)=>{ // delete id 
//     const {id}=req.params
//     veiculos.splice(id,1)
//     res.send('user removido')
// })

// app.delete('/delmod/:model', (req,res)=>{ //del model
//     const {model}=req.params
//     const index=String(model)
//     const result=veiculos.filter((veiculos)=> veiculos.modelo!==index)
//     veiculos.splice(result,1)
//     res.send("veiculo removido")
// })

// app.put('/mud/:id',(req,res)=>{ //mudar por  id
//     var {id}=req.params
//     const {marca,modelo,ano,prop,cor}=req.body
//     try{
//         veiculos[id]={id:id,marca,modelo,ano,prop,cor}
//         res.send(`veiculo atualizado! \n Marca: ${marca} \n Modelo: ${modelo} \n Ano: ${ano} \n Proprietário: ${prop} \n Cor: ${cor}`)
//     }
//     catch(err){
//         res.send("user not found")
//     }
// })


 app.listen(3030, ()=>{
   console.log(`example app listening on port ${3030}`)
 })