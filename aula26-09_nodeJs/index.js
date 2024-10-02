const express =require('express')
var personList=[]
const app=express();
const port=3000;
app.use(express.json())

app.get('/view',(req, res)=>{ //view user
    res.send(personList)
})
app.delete('/del/:id', (req,res)=>{ //delete user
    const {id}= req.params
    const index = parseInt(id, 10);
    personList.splice(index,1)
    res.send(`user removido. users restantes: ${JSON.stringify(personList)}`);
    
    
})

app.put ('/up/:id', (req,res)=>{ //alter user 
    const {id}=req.params
    const {name,age}=req.body
    try{
        personList[id]={name,age}
        res.send(`usuario atualizado!${id}\n Novo nome${name}\n nova idade ${age}`)
    }
    catch(err){
        res.send("User not found ")
    }
})
 app.post('/cadastro',(req,res)=>{ //add new user
     const {name,age}=req.body
    personList.push({name,age})
     res.send(`recebido! nome user ${name}`)
 })

app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`)

})