import React, { useContext, useState, useEffect } from 'react';
import citaContext from '../../context/citas/citaContext';
import historiaContext from '../../context/historia/historiaContext';
import AuthContext from '../../context/autenticacion/authContext';
import Logo from '../../media/Logo.png';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 600,
      height:365,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Cita = ({cita, tratamiento}) => {

    const authContext = useContext(AuthContext);
    const { usuario } = authContext;

    const citasContext = useContext(citaContext);
    const { CitaActual, eliminarCita, solicitarCita, CitaAsignada, citaExistentePaciente, citaexistente } = citasContext;

    const {HistoriaNull} = useContext(historiaContext);

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const [solicitud, actualizarSolicitud] = useState('');
    const [habilitado, actualizarHabilitado] = useState(false)
    
    let cargo;

    if(usuario){
        cargo = usuario.cargo;
    }

    useEffect(() => {
        if(usuario.documento && solicitud){
            citaExistentePaciente(usuario.documento, solicitud);
        }
    }, [usuario.documento, solicitud, citaExistentePaciente])

    const { fecha, hora, pacienteId, estado, _id, tipo } = cita;

    let newfecha = fecha.substr(0,10)

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

        if(solicitud.trim() === ''){
            Swal.fire(
                'Error',
                'Seleccione un tipo de cita para asiganr',
                'error'
            )
        }

        else{
            if (citaexistente) {
                Swal.fire(
                    'Error',
                    'Usted ya cuenta con una cita asignada',
                    'error'
                )
            }else{
                solicitarCita( 
                    {
                        _id, 
                        estado: 'Asignado',
                        tipo: solicitud,
                        pacienteId: usuario.documento
                    } 
                )
                    Swal.fire(
                        'Correcto',
                        'Su cita se ha asignado correctamente',
                        'success'
                    )
                }
            }
        }

        

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
    setOpen(false);
    };

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

                <td>{tipo}</td>

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
                            
                                    
                                <div  className="ml-auto" style={{display:'flex'}}>
                                    <Tooltip placement="top" overlay="Solicitar Cita" overlayClassName="font-weight-bold text-white" overlayStyle={{fontSize:'14px'}}>
                                        <button href="#!"  className="ml-3 btn btn-link" onClick={() => onClickSolicitar()} disabled={!habilitado ? true : false}><i className="fas fa-calendar-day text-dark font-weight-bold"></i></button>
                                    </Tooltip>
                                   
                                    <select name="tipo" style={{width:'250px'}} disabled={!habilitado ? true : false} onChange={e =>actualizarSolicitud(e.target.value)}>
                                        <option value="">Seleccione....</option>
                                        <option value="Tratamiento">Tratamiento</option>
                                        <option value="Consulta General">Consulta General</option>
                                    </select>

                                    <input type="checkbox" className="ml-3 mt-2" name="habilitado" onChange={e => actualizarHabilitado(e.target.checked)} value={habilitado}/>
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

                                :
                                (
                                    <>
                                        <Tooltip placement="top" overlay="Crear Historia" overlayClassName="font-weight-bold text-white" overlayStyle={{fontSize:'14px'}}>
                                            <Link to={'/crear-hist-clinica'} type="button" className="far fa-address-book text-dark mr-3 ml-2" onClick={() => onClickCrearHistoria(cita)}></Link>
                                        </Tooltip>


                                        <Tooltip placement="top" overlay="Detalles Cita" overlayClassName="font-weight-bold text-white" overlayStyle={{fontSize:'14px'}}>
                                            <i type="button" onClick={handleOpen} className="fas fa-info-circle mr-3"></i>
                                        </Tooltip>   
                                       
                                    </>
                                )        
                            }

                            {cargo === 'Paciente'
                                ? null
                                :
                                (
                                    <Tooltip placement="top" overlay="Editar Cita" overlayClassName="font-weight-bold text-white" overlayStyle={{fontSize:'14px'}}>
                                        <Link to={'/editar-citas'} type="button" className="fas fa-pencil-alt text-decoration-none text-dark mr-2" onClick={() => SeleccionarCita(cita)}></Link>
                                    </Tooltip>
                                )
                            }

                            {
                                cargo === 'Paciente'
                                ? null
                                :
                                (
                                    <Tooltip placement="top" overlay="Eliminar Cita" overlayClassName="font-weight-bold text-white" overlayStyle={{fontSize:'14px'}}>
                                        <i type="button" className="fas fa-trash-alt mx-3" onClick={() => onClickEliminar(cita._id)}></i>
                                    </Tooltip>   
                                )
                            }
                            
                        </div>

                    </div>       
                    
                </td>

            </tr>

        }

        {tratamiento || cita
            ? (
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <div style={modalStyle} className={classes.paper}>
                        <div className="row">
                            <div className="col text-center">
                                <h1 id="simple-modal-title"><u>Detalles de la cita</u></h1>
                                <img src={Logo} className="figure-img img-fluid rounded mt-1" alt="Logo Odontología" />
                            </div>
                            <div className="col">
                                <div className='text-left' style={{marginTop:'90px'}} >
                                    {tratamiento !== undefined && cita.tipo === 'Tratamiento'
                                        &&
                                            <>
                                                <p><b>Paciente:</b> {tratamiento.pacienteNombre} </p>
                                                <p><b>Documento:</b> {tratamiento.pacienteId}</p>
                                                <p><b>Motivo Cita:</b> {cita.tipo}</p>
                                                <p><b>Servicio:</b> {tratamiento.servicio}</p>
                                                <p><b>Cita N°:</b> {tratamiento.citasVistas + 1}</p>
                                            </>
                                    }
                                    
                                    {cita.tipo === 'Consulta General'
                                        &&
                                            <>
                                                <p><b>Paciente:</b> {cita.pacienteId} </p>
                                                <p><b>Motivo Cita:</b> {cita.tipo}</p>
                                                <p><b>Fecha:</b> {newfecha} </p>
                                                <p><b>Hora:</b> {cita.hora} </p>
                                            </>
                                    }
                                    
                                </div>
                            </div>
                        </div> 
                    </div>
                </Modal>
            )
            
            : null

            }
            
        </>
    );
}
 
export default Cita;

