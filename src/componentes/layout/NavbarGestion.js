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

    const imgStyle = {
        width: '5rem',
    }

    const buttonStyle = {
        width: '19rem',
    }

    return (  
        <>
            <div className="d-flex flex-row align-items-start">
            <ul className="list-group d-inline-block bg-info">

                <li className="list-group-item text-center">
                    <img src={logo} alt="logo" style={imgStyle}></img>
                </li>

                <li className="list-group-item btn btn-primary text-white font-weight-bold text-left p-3" data-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapseExample" style={{backgroundColor:'#196B81'}}>
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

                <li className="list-group-item btn btn-primary text-white font-weight-bold text-left p-3" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapseExample" style={{backgroundColor:'#196B81'}}>
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

                <li className="list-group-item btn btn-primary text-white font-weight-bold text-left p-3" data-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapseExample" style={{backgroundColor:'#196B81'}}>
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

                <li className="list-group-item btn btn-primary text-white font-weight-bold text-left p-3" data-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapseExample" style={{backgroundColor:'#196B81'}}>
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

            </ul>
 
                <ul className="d-block bg-info">
                    <li className="">
                        <h1 className="display-4">{titulo}</h1>
                    </li>
                    <li className="">
                        <a className="text-dark text-decoration-none" href="#!">Cerrar sesión</a>
                    </li>
                </ul>
            
            </div>
            {titulo === "Consultar Pacientes" ? <ListadoPaciente/> : <ListadoPersona/>}
        </>
    );
}
 
export default NavbarGestion;