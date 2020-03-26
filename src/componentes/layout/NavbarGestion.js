import React from 'react';
import { Link } from 'react-router-dom';

const NavbarGestion = () => {

    return (  
        <>
            <nav className="d-md-block sidebar">

                <div className="sidebar-sticky">

                    <ul className="nav flex-column">

                        <li className="nav-item"> 

                            <a className="p-4 text-white text-decoration-none shadow d-block" data-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapseExample" style={{backgroundColor:'#196B81'}}>
                                Gestión de pacientes
                            </a>

                            <div className="collapse" id="collapse2">
                                <Link to={'/crear-pacientes'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                                    Crear paciente
                                </Link>
                            </div>

                            <div className="collapse" id="collapse2">
                                <Link to={'/consultar-pacientes'}  className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                                    Consultar paciente
                                </Link>
                            </div>

                        </li>

                        <li className="nav-item">

                            <a className="p-4 text-white text-decoration-none shadow d-block" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapseExample" style={{backgroundColor:'#196B81'}}>
                                Gestión de agenda
                            </a>

                            <div className="collapse" id="collapse1">
                                <Link to={'/crear-citas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                                    Crear citas
                                </Link>
                            </div>

                            <div className="collapse" id="collapse1">
                                <Link to={'/asignar-citas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                                    Asignar citas
                                </Link>
                            </div>

                            <div className="collapse" id="collapse1">
                                <Link to={'/consultar-citas'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                                    Consultar citas
                                </Link>
                            </div>   

                        </li>

                        <li className="nav-item">

                            <a className="p-4 text-white text-decoration-none shadow d-block" data-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapseExample" style={{backgroundColor:'#196B81'}}>
                                Gestión de personal
                            </a>

                            <div className="collapse" id="collapse3">
                                <Link to={'/crear-personal'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                                    Crear personal
                                </Link>
                            </div>

                            <div className="collapse" id="collapse3">
                                <Link to={'/consultar-personal'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                                    Consultar personal
                                </Link>
                            </div>

                        </li>

                        <li className="nav-item">

                            <a className="p-4 text-white text-decoration-none shadow d-block" data-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapseExample" style={{backgroundColor:'#196B81'}}>
                                Facturas
                            </a>

                            <div className="collapse" id="collapse4">
                                <Link to={'/crear-factura'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                                    Crear factura
                                </Link>
                            </div>

                            <div className="collapse" id="collapse4">
                                <Link to={'/consultar-historia-clinica'} className="d-block bg-light text-left font-weight-bold p-3 text-decoration-none">
                                    Consultar historia clínica
                                </Link>
                            </div>

                        </li> 

                    </ul>

                </div>
                
            </nav>
        </>
    );
}
 
export default NavbarGestion;