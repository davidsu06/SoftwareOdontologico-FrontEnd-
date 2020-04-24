import React, { useContext, useEffect } from 'react';
import Servicio from './Servicio';
import servicioState from '../../context/servicios/serviciosContext';

const ListadoServicios = () => {

    const {servicios, listarServicios} = useContext(servicioState)

    useEffect(() => {
        listarServicios();
        // eslint-disable-next-line
    }, [])

    return (
        <div className="col-md-11 col-sm-3">
                {servicios.length === 0
                    ? 
                    (<h3 className="text-center">No hay Servicios</h3>) 

                    : 
                    (
                    <div className="container d-flex justify-content-between">
                        <table className="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Id. Servicio</th>
                                    <th scope="col">Nombre Servicio</th>
                                </tr>
                            </thead>
                    
                            <tbody>
                                {
                                    servicios.map(servicio => ( 
                                        <Servicio
                                            key={servicio._id}
                                            servicio={servicio}
                                        />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div> 
                    )
                }                                           
        </div>
    )
}

export default ListadoServicios
