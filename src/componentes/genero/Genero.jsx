import React, { useEffect, useState } from 'react'

import { obtenerGeneros } from '../../servicios/GeneroService'
import Table from './Table'
import Togle from './Toggle'
import Toggle from './Toggle'

export default function Genero() {

  const [genero, setGenero] = useState([])
  const [estado, setEstado] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    obtenerTodos()
  }, [estado])

  const obtenerTodos = async () => {
    try {
      const { data } = await obtenerGeneros(false)
      setGenero(data)
      if(error){
        setError(false)
      }
      
    }
    catch (e) {
      console.error(e)
      setError(true)
    }
  }

  const cambiarEstado = () => {
    setEstado(!estado)
  }

  return (
    <>
      <Toggle cambiarEstado = {cambiarEstado} estado={estado} />
      {error ? <asError /> : <Table genero={genero}/>}
    </>
  )
}
