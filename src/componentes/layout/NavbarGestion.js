import React from 'react';
import logo from '../../media/Logo.png';
import ListadoPaciente from '../pacientes/ListadoPaciente';
import ListadoPersona from '../personal/ListadoPersona';
import { Link } from 'react-router-dom';

const NavbarGestion = ({titulo}) => {

    const ulStyle = {
        minHeight: '41rem',
        width: '20rem',
    };   

    const buttonStyle = {
        width: '19rem',
    }

    return (  
        <>
            <div className="p-0 d-inline-block bg-info list-unstyled font-weight-bold" style={ulStyle}>

                <li className="p-4 text-center">
                    <img src={logo} alt="logo" className="w-50 img-fluid"></img>
                </li>

                <li className="btn btn-primary text-white font-weight-bold text-left p-3" data-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapseExample" style={{backgroundColor:'#196B81'}}>
                    Gestión de pacientes
                </li>

                <div className="collapse" id="collapse2">
                    <Link to={'/crear-pacientes'} className="btn bg-light text-left font-weight-bold p-3" style={buttonStyle}>
                        Crear paciente
                    </Link>
                </div>

                <div className="collapse" id="collapse2">
                    <Link to={'/consultar-pacientes'}  className="btn btn-block bg-light text-left font-weight-bold p-3 rounded-0" style={buttonStyle}>
                        Consultar paciente
                    </Link>
                </div>

                <li className="btn btn-primary text-white font-weight-bold text-left p-3" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapseExample" style={{backgroundColor:'#196B81'}}>
                    Gestión de agenda
                </li>

                <div className="collapse" id="collapse1">
                    <Link to={'/crear-citas'} className="btn btn-block bg-light text-left font-weight-bold p-3" style={buttonStyle}>
                        Crear citas
                    </Link>
                </div>

                <div className="collapse" id="collapse1">
                    <Link to={'/asignar-citas'} className="btn btn-block bg-light text-left font-weight-bold p-3 rounded-0" style={buttonStyle}>
                        Asignar citas
                    </Link>
                </div>

                <div className="collapse" id="collapse1">
                    <Link to={'/consultar-citas'} className="btn btn-block bg-light text-left font-weight-bold p-3" style={buttonStyle}>
                        Consultar citas
                    </Link>
                </div>     

                <li className="btn btn-primary text-white font-weight-bold text-left p-3" data-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapseExample" style={{backgroundColor:'#196B81'}}>
                    Gestión de personal
                </li>

                <div className="collapse" id="collapse3">
                    <Link to={'/crear-personal'} className="btn bg-light text-left font-weight-bold p-3" style={buttonStyle}>
                        Crear personal
                    </Link>
                </div>

                <div className="collapse" id="collapse3">
                    <Link to={'/consultar-personal'} className="btn btn-block bg-light text-left font-weight-bold p-3 rounded-0" style={buttonStyle}>
                        Consultar personal
                    </Link>
                </div>

                <li className="btn btn-primary text-white font-weight-bold text-left p-3" data-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapseExample" style={{backgroundColor:'#196B81'}}>
                    Facturas
                </li>

                <div className="collapse" id="collapse4">
                    <Link to={'/crear-factura'} className="btn btn-block bg-light text-left font-weight-bold p-3" style={buttonStyle}>
                        Crear factura
                    </Link>
                </div>

                <div className="collapse" id="collapse4">
                    <Link to={'/consultar-historia-clinica'} className="btn btn-block bg-light text-left font-weight-bold p-3 rounded-0" style={buttonStyle}>
                        Consultar historia clínica
                    </Link>
                </div>

            </div>
 
            <div className="p-0 d-inline">
                <ul class="p-0">
                    <h1 className="bg-info p-1">
                        <h1 className="display-1 text-center">{titulo}</h1>
                        <h2>
                            <a className="text-decoration-none text-dark h5" href="#!">Cerrar sesión</a>
                        </h2>
                    </h1>
                </ul>
            </div>
            {titulo === "Consultar Pacientes" ? <ListadoPaciente/> : <ListadoPersona/>}
        </>
    );
}
 
export default NavbarGestion;