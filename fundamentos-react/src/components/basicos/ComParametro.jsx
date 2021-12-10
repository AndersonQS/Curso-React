import React from 'react'

export default function ComParametro(props) {
  console.log(props)
  const status = props.subtitulo >= 7 ? 'está aporvado ' : 'está reprovado';
  return <div>
    <h2>{props.titulo}</h2>
    <p>{props.aluno} tem a nota {props.nota} ele está {status}</p>
  </div>
}