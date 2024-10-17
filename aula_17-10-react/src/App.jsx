import { useState } from 'react';
import './App.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)
  const [texto,setText]=useState("")
  const [palavra,setPalavra]=useState("")
  if(palavra=="SENAI" || palavra=="senai"){
    var teste="APARECI"
  }
  
  return (
    <>
    <div>
      <h1>Contagem: {count}</h1>
      <button onClick={()=>setCount(count+10)} className="btn btn-primary mx-2" >Adicionar 10</button>
      <button onClick={()=> setCount(count-10)}className="btn btn-primary">remover 10</button>
    </div>
    
    <div >
       <h1 className="py-2 mx-2">texto:{texto}</h1>
     <button onClick={()=>setText( texto==="balacobaco" ? " " :"balacobaco")} className=" mx-2 btn btn-primary">texto</button>
     </div>

    <div>
       <h1 className="py-2 mx-2">palavra: {palavra} {teste}</h1>
     <input type="text" className="mx-2 form-control" onChange={(e)=>setPalavra(e.target.value)}  />
    </div>
  

    
   

    </>

  )
}

export default App
