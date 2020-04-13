import React, { useContext, useEffect } from 'react';
import historiaContext from '../../context/historia/historiaContext';
import authContext from '../../context/autenticacion/authContext';
import Historia from './Historia';

const ListadoHistorias = () => {

    const {historias, listarHistoria} = useContext(historiaContext);
    const {usuario} = useContext(authContext);
    let historiasPaciente;
    
    useEffect(() => {
        listarHistoria();
        // eslint-disable-next-line
    }, [])

    if(usuario){
        historiasPaciente = historias.filter(historia => historia.pacienteId === usuario.documento);
    }
    else{
        historiasPaciente = [];
    }
    
    return ( 
        <div>
            {historiasPaciente.length === 0
                ? 
                    (<h3 className="text-center">No tienes Historial Clínico disponibles</h3>) 

                : 
                    (
                        <table className="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Hora</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Id. Paciente</th>
                                    <th scope="col">Médico de la cita</th>
                                </tr>
                            </thead>
                    
                            <tbody>
                                {
                                    historiasPaciente.map(historia => (
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