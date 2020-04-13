import React, {useContext, useState, useEffect} from 'react';
import historiaContext from '../../context/historia/historiaContext';
import citaContext from '../../context/citas/citaContext';
import { Link } from 'react-router-dom';

const Historia = ({historia, usuario}) => {

    const { HistoriaActual } = useContext(historiaContext);
    const {CitaNull} = useContext(citaContext);

    const { fecha, hora, pacienteId, personalId, descripcion } = historia;
    const newfecha = fecha.substr(0,10)

    let cargo;

    const SeleccionarHistoria = historia => {   
        HistoriaActual(historia);
        CitaNull();
    }

    if(usuario){
        if(usuario.cargo){
            cargo = true;
        }
        else{
            cargo = false
        }
    }
    
    return ( 
        <>
            <tr>
                <td>{newfecha}</td>
                <td>{hora}</td>
                <td>{descripcion}</td>
                <td>{pacienteId}</td>

                {cargo

                    ?
                        (
                        <td className="text-center">
                            <div className="container d-flex justify-content-between">
                                <div className="mr-3">
                                    <Link to={'/editar-hist-clinica'} 
                                        type="button" class="fas fa-pencil-alt text-decoration-none text-dark" 
                                        onClick={() => SeleccionarHistoria(historia)}
                                    ></Link> 
                                </div>
                            </div>       
                        </td>
                        )
                    
                    : 
                        (
                            <td>{personalId}</td>
                        )
                }


                

            </tr>

        </>
     );
}
 
export default Historia