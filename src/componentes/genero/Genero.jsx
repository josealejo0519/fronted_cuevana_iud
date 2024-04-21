import React, { useEffect, useState } from 'react'
import { axiosConfig } from '../../configuraciones/axiosConfig'
import { obtenerGeneros } from '../../servicios/GeneroService'

export default function Genero() {

  useEffect(() => {
    obtenerTodos()
  }, [])

  const [genero, setGeneros] = useState([])

  const obtenerTodos = async () => {
    try {
      const { data } = await obtenerGeneros()
      setGeneros(data)
    }
    catch (e) {
      console.error(e)
    }
  }

  return (
    <div>_
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
              <tr>
                <th scope="row">{index+1}</th>
                <td>{genero.nombre}</td>
                <td>{genero.descripcion}</td>
                <td>{genero.fechaCreacion}</td>
                <td>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={genero.estado} />
                    <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                  </div>
                </td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  )
}
export {
  Genero}