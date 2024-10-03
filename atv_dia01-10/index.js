const express = require ('express')
var veiculos=[]
const app = express()
const port = 3001
app.use(express.json())
let id_user=0

app.get('/viewall',(req, res)=>{ //view all
    res.send(veiculos)
})

app.get('/viewid/:id', (req, res) => { //view id
    const { id } = req.params; 
    const search = veiculos[id]; 

    if (search) {
        res.send(search); 
    } else {
        res.send('Veículo não encontrado' )
    }
});
app.get('/viewyear/:year',(req,res)=>{ //view year
    const {year}=req.params
    const result = veiculos.filter((veiculos) => veiculos.ano=== year);
    res.send(result)
})

app.get('/viewcolor/:color', (req,res)=>{ //view color 
    const {color}=req.params
    const index=String(color)
    const result=veiculos.filter((veiculos)=>veiculos.cor ===index)
    res.send(`veiculo na cor ${index} encotrado! ${JSON.stringify(result )}`)
    //res.send(result)
})

app.delete('/del/:id', (req,res)=>{ // delete id 
    const {id}=req.params
    veiculos.splice(id,1)
    res.send('user removido')
})

app.delete('/delmod/:model', (req,res)=>{ //del model
    const {model}=req.params
    const index=String(model)
    const result=veiculos.filter((veiculos)=> veiculos.modelo!==index)
    veiculos.splice(result,1)
    res.send("veiculo removido")
})

app.put('/mud/:id',(req,res)=>{ //mudar por  id
    var {id}=req.params
    const {marca,modelo,ano,prop,cor}=req.body
    try{
        veiculos[id]={id:id,marca,modelo,ano,prop,cor}
        res.send(`veiculo atualizado! \n Marca: ${marca} \n Modelo: ${modelo} \n Ano: ${ano} \n Proprietário: ${prop} \n Cor: ${cor}`)
    }
    catch(err){
        res.send("user not found")
    }
})
app.post('/cad', (req,res)=>{ //cadastro 
    const {marca,modelo,ano,prop,cor}=req.body
    veiculos.push({id:veiculos.length,marca,modelo,ano,prop,cor})
    res.send(`recebido! \n id:${veiculos.length-1}\n Marca: ${marca} \n Modelo: ${modelo} \n Ano: ${ano} \n Proprietário: ${prop} \n Cor: ${cor}`)

})

app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`)

})