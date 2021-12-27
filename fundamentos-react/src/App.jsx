import './App.css'
import React from 'react'

import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default _ =>

  <div className="App">
    <h1>fundamentos React 2 </h1>

    <div className="Cards">

      <Card titulo="componente com filhos" color="#00c8f8">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Anderson" />
          {/* 
          <FamiliaMembro nome="Diego"  />
          <FamiliaMembro nome="Pedro"  />
          */}
        </Familia>
      </Card>
      <Card titulo="Desafio Aleatório" color="#080">
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


