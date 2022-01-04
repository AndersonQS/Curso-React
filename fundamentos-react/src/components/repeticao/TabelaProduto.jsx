import React from 'react'

import produto from '../../data/produtos'

export default (props) => {
  const TabelaProduto = produto.map((produto) => {
    return (
      <li key={produto.id}>
        {produto.id}) {produto.name} = {produto.price}
      </li>

    )
  });

  return (
    <div>
      <ul>
        {TabelaProduto}
      </ul>
    </div>
  )

}