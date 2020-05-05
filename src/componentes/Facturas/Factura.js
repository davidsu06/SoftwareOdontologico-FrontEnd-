import React, { useContext, Fragment, useState } from 'react';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import facturaContext from '../../context/facturas/facturasContext';
import tratamientoContext from '../../context/tratamientos/tratamientoContext';

const Factura = ({factura, tratamiento, usuario}) => {

    const {modificarEstadoFactura, seleccionarFactura} = useContext(facturaContext);
    const {actualizarTratamiento} = useContext(tratamientoContext);

    const generarFacturaPDF = factura =>{
        seleccionarFactura(factura)
    }

    const onClickModificarEstadoPagada = (factura, tratamiento) => {
        
        Swal.fire({
            title: '¿Estas seguro?',
            text: "No se podrá revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Validar Pago'
        }).then((result) => {
            if (result.value) {
                modificarEstadoFactura({
                    _id: factura._id,
                    valor: factura.valor,
                    fecha: factura.fecha, 
                    tratamiento: factura.tratamiento, 
                    documento_paciente: factura.documento_paciente, 
                    nombre_paciente: factura.nombre_paciente, 
                    documento_cajero: factura.documento_cajero, 
                    nombre_cajero: factura.nombre_cajero, 
                    estado:'Pagada'
                });

                let saldoAbonado = Number.parseInt(tratamiento.saldoAbonado, 10) + Number.parseInt(factura.valor, 10);
                actualizarTratamiento({
                    _id: tratamiento._id,
                    pacienteId: tratamiento.pacienteId,
                    pacienteNombre: tratamiento.pacienteNombre,
                    servicio: tratamiento.servicio,
                    citasVistas: tratamiento.citasVistas,
                    cuotas: tratamiento.cuotas,
                    saldoAbonado,
                    estado: tratamiento.estado 
                });
            }
        })   
    }

    const onClickModificarEstadoCancelada = (factura) => {
        Swal.fire({
            title: '¿Estas seguro de cancelar la factura?',
            text: "No se podrá revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Cancelar!'
        }).then((result) => {
            if (result.value) {
                modificarEstadoFactura({
                    _id: factura._id,
                    valor: factura.valor,
                    fecha: factura.fecha, 
                    tratamiento: factura.tratamiento, 
                    documento_paciente: factura.documento_paciente, 
                    nombre_paciente: factura.nombre_paciente, 
                    documento_cajero: factura.documento_cajero, 
                    nombre_cajero: factura.nombre_cajero, 
                    estado:'Cancelada'
                });
            }
        })   
    }

    return ( 
        <tr>
            <td>{factura.fecha}</td>
            <td>{factura.documento_paciente}</td>
            <td>{factura.nombre_paciente}</td>
            <td>{new Intl.NumberFormat("de-DE").format(factura.valor)}</td>
            <td>{factura.documento_cajero}</td>
            <td>{factura.nombre_cajero}</td>
            <td>{factura.tratamiento}</td>
            <td>{factura.estado}</td>
            {usuario &&
                (
                    <Fragment>
                        {usuario.cargo === 'Paciente'
                            ? null

                            :(
                                <>
                                    {factura.estado === 'Pagada' || factura.estado === 'Cancelada' 
                                        ? ( <td className="text-center"><i className="far fa-calendar-check font-weight-bold mr-2"></i>Validada</td> )
            
                                        :( 
                                            <td className="text-center">
                                                <Link to={'/factura-pdf'} type="button" className="fas fa-print text-dark font-weight-bold mr-3" 
                                                    onClick={() => generarFacturaPDF(factura)}>
                                                </Link>

                                                <i type="button" className="fas fa-dollar-sign font-weight-bold mr-3" 
                                                    onClick={ () => onClickModificarEstadoPagada(factura, tratamiento) }>
                                                </i>

                                                <i type="button" className="fas fa-ban font-weight-bold"
                                                    onClick={ () => onClickModificarEstadoCancelada(factura) }>
                                                </i>
                                            </td>    
                                        )
                                    }
                                </>
                            )
                        }    
                    </Fragment>    
                )
            }
        </tr>
     );
}
 
export default Factura;