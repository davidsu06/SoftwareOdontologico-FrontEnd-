import React, { useContext, useEffect } from 'react';
import citaContext from '../../context/citas/citaContext';
import historiaContext from '../../context/historia/historiaContext';
import AuthContext from '../../context/autenticacion/authContext';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Swal from 'sweetalert2';

const Cita = ({cita}) => {

    const authContext = useContext(AuthContext);
    const { usuario } = authContext;

    const citasContext = useContext(citaContext);
    const { CitaActual, eliminarCita, modificarCita, CitaAsignada, citaExistentePaciente, citaexistente } = citasContext;

    let cargo;

    if(usuario){
        cargo = usuario.cargo;
    }

    useEffect(() => {
        if (usuario != null) {
            citaExistentePaciente(usuario.documento)
            
        }
    }, [usuario, citaExistentePaciente])
    const {HistoriaNull} = useContext(historiaContext);

    const { fecha, hora, pacienteId, estado, _id } = cita;
    
    // console.log(fecha)
    // console.log(hora)
    // console.log(estado)

    const newfecha = fecha.substr(0,10)

    const SeleccionarCita = cita => {   
        CitaActual(cita);        
    }

    const onClickEliminar = id => {
        
        Swal.fire({
            title: '¿Estas seguro?',
            text: "No se podrá revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
          }).then((result) => {
            if (result.value) {
                eliminarCita(id);
              
            }
          })
    }

    const onClickCrearHistoria = cita =>{
        CitaActual(cita);
        HistoriaNull();
    }

    const onClickSolicitar = () => {
        if (citaexistente) {
            Swal.fire(
                'Error',
                'Usted ya cuenta con una cita asignada',
                'error'
            )
        }else{
            modificarCita( 
                {
                    _id, 
                    estado: 'Asignado',
                    pacienteId: usuario.documento
                } 
            )
            Swal.fire(
                'Correcto',
                'Su cita se asignó correctamente',
                'success'
            )
        }

    }

    return ( 
        <>
        {
            cargo === 'Paciente' && estado === 'Asignado'
            ? null
            :
            <tr>
                <td>{newfecha}</td>
                <td>{hora}</td>
                {
                    cargo !== 'Paciente'
                    ? <td>{pacienteId === '0' ? 'No asignado' : pacienteId}</td>
                    : null
                }

                {
                    cargo !== 'Paciente'
                    ? <td>{estado}</td>
                    : null
                }
                
                <td className="text-center">

                    <div className="container d-flex justify-content-between">

                        { pacienteId !== "0" 
                        ?
                            (
                                <div></div>
                            )
                        :
                            (
                                cargo === 'Paciente'
                                ? 
                                <div>
                                    <a href="#!" type="button" className="text-info" onClick={ () => onClickSolicitar()}>Solicitar</a>
                                </div>
                                :
                                <div>
                                    <Link to={'/asignar-citas'} className=" text-info" onClick={()=>CitaAsignada(cita)}>Asignar</Link>
                                </div>
                            )
                        }

                        <div className="mr-3">
                            {estado === 'Sin asignar'
                                ? null

                                :<Link to={'/crear-hist-clinica'} type="button" className="far fa-address-book text-dark mr-4" onClick={() => onClickCrearHistoria(cita)}></Link>        
                            }

                            {
                                cargo === 'Paciente'
                                ? null
                                :
                                (
                                    <Link to={'/editar-citas'} type="button" className="fas fa-pencil-alt text-decoration-none text-dark mr-2" onClick={() => SeleccionarCita(cita)}></Link>

                                )
                            }

                            {
                                cargo === 'Paciente'
                                ? null
                                :
                                (
                                    <i type="button" className="fas fa-trash-alt mx-3" onClick={() => onClickEliminar(cita._id)}></i>
                                )
                            }

                            <Modal />
                            
                        </div>

                    </div>       
                    
                </td>

            </tr>

        }
            
        </>
     );
}
 
export default Cita;

