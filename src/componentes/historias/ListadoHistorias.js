import React, { useContext, useEffect } from 'react';
import historiaContext from '../../context/historia/historiaContext';
import authContext from '../../context/autenticacion/authContext';
import Historia from './Historia';

const ListadoHistorias = () => {

    const {historias, listarHistoria} = useContext(historiaContext);
    const {usuario} = useContext(authContext);

    useEffect(() => {
        listarHistoria();
        // eslint-disable-next-line
    }, [])

    return ( 
        <div className="col-md-11 col-sm-3">
            {historias.length === 0
                ? 
                    (<h3 className="text-center">No hay Historias Clínicas disponibles</h3>) 

                : 
                    (
                        <table className="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Hora</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Paciente ID</th>
                                    <th scope="col" className="text-center">Acciones</th>
                                </tr>
                            </thead>
                    
                            <tbody>
                                {
                                    historias.map(historia => (
                                        <Historia
                                            key={historia._id}
                                            historia={historia}
                                            usuario={usuario}
                                        />
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                
            }

        </div>
     );
}
 
export default ListadoHistorias;