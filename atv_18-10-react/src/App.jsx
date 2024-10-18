import { useState } from 'react';
import './App.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)
  const [texto,setText]=useState("")
  const [palavra,setPalavra]=useState("")
  const [curtida,setCurtida]=useState(0)
const cont=texto.length

  
  return (
    <>
    <div className='mx-4 container my-4'>
      <img src="https://i.pinimg.com/280x280_RS/4f/ef/dc/4fefdcfd104109ad86f420542cf3b2cf.jpg" alt=""  className='foto my-2'/>
      <h1>Curtido por {curtida}  <button onClick={()=>setCurtida(curtida===1 ? 0 : 1)}> <img src="https://cdn-icons-png.flaticon.com/128/2589/2589197.png" alt="" className='heart' /></button></h1>
      
    </div>
    
    <div className='mx-4 container my-4'>
      <h1>Caracteres:{texto} <br />Número de Caracteres:{cont}</h1>
    <input type="text" className="mx-2 form-control" onChange={(e)=>setText(e.target.value )}  />
    </div>

    
   

    
  

    
   

    </>

  )
}

export default App
