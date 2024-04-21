import React from 'react'
import TrGenero from './TrGenero'


export default function Table({genero = []}) {
  return (
    <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Creado</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {
            genero.map((genero, index) => {
              return (
              <TrGenero genero = {genero} key = {index+1} index ={index}/>)
            })
          }
        </tbody>
      </table>
  )
}
