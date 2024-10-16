import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HelloWorld from './Helloworld'
//import App from './App.jsx'
//import './index.css'  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWorld/>
  </StrictMode>,
)
