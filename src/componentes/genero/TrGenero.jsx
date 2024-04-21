import React from 'react'
import dayjs from 'dayjs'

export default function TrGenero(index, genero) {
    return (
        <tr key={index + 1}>
            <th scope="row">{index + 1}</th>
            <td>{genero.nombre}</td>
            <td>{genero.descripcion}</td>
            <td>{dayjs(genero.fechaCreacion).format('YYYY-MM-DD')}</td>
            <td>
                {genero.estado ? 'Activo' : 'Inactivo'}
            </td>
        </tr>)
}
