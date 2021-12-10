import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
ReactDOM.render(
  <div id = "app"> 
    <Primeiro></Primeiro>
    <ComParametro 
    titulo = "segundo componente"
    aluno = "Anderson"
    nota = {5.4}/>
  
  </div>,
  document.getElementById('root'));