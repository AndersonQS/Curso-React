import React from 'react'

import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default _ => 
 
    <div id="app">
      <h1>fundamentos React 2 </h1>

      <Aleatorio min={1} max = {30}>
      </Aleatorio>
      <Fragmento></Fragmento>

      <ComParametro
        titulo="segundo componente"
        aluno="Anderson"
        nota={5.4} />
      <Primeiro></Primeiro>


    </div>
  

