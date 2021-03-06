import React, { useContext, useState, useEffect } from 'react';
import citaContext from '../../context/citas/citaContext';
import AuthContext from '../../context/autenticacion/authContext';
import tratamientoContext from '../../context/tratamientos/tratamientoContext';
import Cita from './Cita';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; 
import Pagination from '../layout/paginacion';
import { MetroSpinner } from 'react-spinners-kit';

const ListadoCita = () => {

    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado } = authContext;
    const {tratamientos, listarTratamientos} = useContext(tratamientoContext);
    const citasContext = useContext(citaContext);
    const { listarCitas, citas, filtrarCitas, CitasPacienteCalendario,citasfiltradas, citasPaciente, citasfiltradasPaciente, searching } = citasContext;
    let cargo; 

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, [])

    const [ load, setLoad ] = useState(true);
    let loadCitas;

    useEffect(() => {
        // eslint-disable-next-line
        loadCitas = citas;
        if (loadCitas !== undefined) {
            setLoad(false)    
        }
    }, [citas])

    if(usuario){
        cargo = usuario.cargo;
    } 

    useEffect(() => {
        if (usuario != null) {
            listarCitas();
            listarTratamientos();
        }
        // eslint-disable-next-line
    }, [usuario])

    const SelectDate = e => {
        let month = 0;
        if (e.getMonth()+1 < 10) {
            month = `0${e.getMonth()+1}`;
        }else{
            month = e.getMonth() + 1;
        }

        let day = 0;
        if (e.getDate() < 10) {
            day = `0${e.getDate()}`
        }else{
            day = e.getDate();
        }

        const fecha = `${e.getFullYear()}-${month}-${day}`;
        if (cargo !== 'Paciente') {
            filtrarCitas(fecha) 
        } else {
            CitasPacienteCalendario(fecha)
        }
        
    }

    // Paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = citas.slice(indexOfFirstPost, indexOfLastPost);
    const currentPosts2 = citasfiltradas.slice(indexOfFirstPost, indexOfLastPost);
    const currentPosts3 = citasPaciente.slice(indexOfFirstPost, indexOfLastPost);
    const currentPosts4 = citasfiltradasPaciente.slice(indexOfFirstPost, indexOfLastPost);
    
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    if(!citas) return null

    if (citas.length === 0 && loadCitas !== undefined) {
        return <h3 className="text-center">No hay disponibilidad de citas</h3>
    }

    return ( 
        <>

        <div className="container">

            <div className="row mt-3">

                <div className="col-md-3">
                <InfiniteCalendar 
                width={300}
                height={200}
                selected = {false}
                locale={{
                    locale: require('date-fns/locale/es'),
                    headerFormat: 'dddd, D MMM',
                    weekdays: ["Do","Lu","Ma","Mi","Ju","Vi","Sa"],
                    blank: 'Seleccione una fecha',
                    todayLabel: {
                    long: 'Hoy',
                    short: 'Hoy.'
                    }
                    }}
                    onSelect={(e) => SelectDate(e)}
                />
                </div>

                <div className="col-md-8">
                    {
                         searching && (citasfiltradas.length === 0 && citasfiltradasPaciente.length === 0 )

                         ? 
                        (<h3 className="text-center">No hay citas disponibles para el día seleccionado</h3>)

                         :
                        ( citas.length === 0
                            ? 
                            (
                                <div className="container d-flex justify-content-center mt-1"> <MetroSpinner size={100} color="#000" loading={load} /> </div>         
                            ) 
                            : 
                            <table className="table table-bordered mt-3">
        
                                <thead>
                                    <tr>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Hora</th>
                                        {
                                            cargo !== 'Paciente'
                                            ? <th scope="col">Paciente ID</th>
                                            : null
                                        }
                                        <th scope="col">Tipo Cita</th>
                                        {
                                            cargo !== 'Paciente'
                                            ? <th scope="col">Estado</th>
                                            : null
                                        }
                                        <th scope="col" className="text-center">Acciones</th>
                                    </tr>
                                </thead>
                        
                                <tbody>
                                    {
                                        searching 
                                        ? (  cargo !== 'Paciente' ?
                                            (currentPosts2.map(citafiltrada => (
                                                <Cita
                                                    key={citafiltrada._id}
                                                    cita={citafiltrada}
                                                    tratamiento={tratamientos.filter( tratamiento => tratamiento.pacienteId === citafiltrada.pacienteId && tratamiento.estado === 'En Proceso' )[0]
                                                                }
                                                />
                                            ))) : 
                                            (currentPosts4.map(citafiltrada => (
                                                <Cita
                                                    key={citafiltrada._id}
                                                    cita={citafiltrada}
                                                    tratamiento={tratamientos.filter( tratamiento => tratamiento.pacienteId === usuario.documento && tratamiento.estado === 'En Proceso')[0]}
                                                />
                                            )))
                                        )
                                        : (cargo !== 'Paciente' 
                                            ?
                                                (currentPosts.map(cita => (
                                                    <Cita
                                                        key={cita._id}
                                                        cita={cita}
                                                        tratamiento={tratamientos.filter( tratamiento => tratamiento.pacienteId === cita.pacienteId && tratamiento.estado === 'En Proceso')[0]}
                                                    />
                                                )))
                                            :
                                                (currentPosts3.map(cita => (
                                                    <Cita
                                                        key={cita._id}
                                                        cita={cita}
                                                        tratamiento={tratamientos.filter( tratamiento => tratamiento.pacienteId === usuario.documento && tratamiento.estado === 'En Proceso')[0]}
                                                    />
                                                )))
                                            )
                                    }
        
                                </tbody>
        
                            </table>
        
                            )
                    }

                </div>

            </div>

        </div>
        {cargo !== 'Paciente' 
            ?
            (currentPosts2.length === 0 
                ?
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={citas.length}
                        paginate={paginate}
                    /> 
                :
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={citasfiltradas.length}
                        paginate={paginate}
                    />
            )
            : currentPosts4.length === 0 
                ?
                    <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={citasPaciente.length}
                            paginate={paginate}
                    /> 
                : 
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={citasfiltradasPaciente.length}
                        paginate={paginate}
                    />                    
        } 
        </>
    );
}
 
export default ListadoCita;