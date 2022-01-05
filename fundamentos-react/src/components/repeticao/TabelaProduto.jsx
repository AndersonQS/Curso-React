import React from 'react'

import produto from '../../data/produtos'

export default (props) => {
  const TabelaProduto = produto.map((produto) => {
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.name}</td>
        <td> R$ {produto.price}</td>
      </tr>




    )
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {TabelaProduto}
        </tbody>
      </table>
    </div>
  )

}