import React from 'react'

const Servicio = ({servicio}) => {
    return (
        <tr>
            <td>{servicio._id}</td>
            <td>{servicio.nombre_servicio}</td>
        </tr>
    )
}

export default Servicio
