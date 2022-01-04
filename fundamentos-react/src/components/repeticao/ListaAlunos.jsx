import React from 'react';
import alunos from '../../data/alunos'
export default (props) => {
  const alunoLista = alunos.map((aluno) => {
    return (
      <li Key={aluno.id}>
        {aluno.id}) {aluno.name}   -{'>'} {aluno.nota}
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {alunoLista}
      </ul>
    </div>
  );
};

