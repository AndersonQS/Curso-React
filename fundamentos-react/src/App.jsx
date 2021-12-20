import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default _ =>

  <div className="App">
    <h1>fundamentos React 2 </h1>

    <div className="Cards">
      <Card titulo="Desafio Aleatório" color = "#080">
        <Aleatorio min={1} max={30} > </Aleatorio>
      </Card>

      <Card titulo="Fragmento" >
        <Fragmento></Fragmento>
      </Card>

      <Card titulo="Com Pâmetro">
        <ComParametro
          titulo="segundo componente"
          aluno="Anderson"
          nota={5.4} />
      </Card>

      <Card titulo="Primeiro Componente">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>


