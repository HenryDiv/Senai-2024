import { useState } from 'react';
import './App.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [name, setName] = useState(true)
  const [theme,setTheme]=useState(true)

  return (
    <>
    
    <button className=" btn mx-2  btn-primary my-2" onClick={() => setTheme(theme ? false:true)} >trocar fundo</button>
    { theme ?
      <div className='fundo-preto'>
        <h1 className="py-2 mx-2">NOME: {name}</h1>
      <input type="text" className="form-control mx-2" onChange={(e)=> setName(e.target.value)} />
      </div>
:     <div className= 'fundo-branco'>
       <h1 className="py-2 mx-2">NOME: {name}</h1>
     <input type="text" className="mx-2 form-control" onChange={(e)=> setName(e.target.value)} />
     </div>
     }
      

    </>

  )
}

export default App
