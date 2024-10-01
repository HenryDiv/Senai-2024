const express =require('express')
let personList=[]
const app=express();
const port=3000;
nome="HeNrY"
app.use(express.json())

app.get('/view',(req, res)=>{
    res.send(personList)
})
app.delete('/del/:id', (req,res)=>{
    const {id}= req.params
    personList.splice(id,1)
    
})
 app.post('/cadastro',(req,res)=>{
     const {name,age}=req.body
    personList.push({name,age})
     res.send(`recebido! nome user ${name}`)
 })

app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`)

})