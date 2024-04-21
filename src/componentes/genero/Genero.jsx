import React, { useEffect } from 'react'
import { axiosConfig } from '../../configuraciones/axiosConfig'
import { obtenerGeneros } from '../../servicios/GeneroService'

export default function Genero() {

  useEffect(() => {
    obtenerTodos()
  }, [])

  const obtenerTodos = async () => {
    try {
      const data = await obtenerGeneros()
      console.log(data)
    }
    catch(e) {
      console.error(e)
    }
  }

  return (
    <div>_________________________
      Aquí estan los géneros
      ________________________
    </div>
  )
}