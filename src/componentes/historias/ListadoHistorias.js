import React, { useContext, useEffect, useState } from 'react';
import historiaContext from '../../context/historia/historiaContext';
import authContext from '../../context/autenticacion/authContext';
import Historia from './Historia';
import Pagination from '../layout/paginacion';

const ListadoHistorias = () => {

    const {historias, historiasfiltradas, listarHistoria, filtrarHistorias} = useContext(historiaContext);
    const {usuario} = useContext(authContext);

    useEffect(() => {
        listarHistoria();
        // eslint-disable-next-line
    }, [])

    
    const [filtro, guardarFiltro] = useState({
        filtropaciente:'',
        filtrofecha:''
    });

    const changeFiltro = e =>{
        guardarFiltro({
            ...filtro,
            [e.target.name]: e.target.value
        })
    }

    const submitFiltro = e =>{

        e.preventDefault();

        let historiasbd;
        if(filtro.filtropaciente.trim() === '' && filtro.filtrofecha.trim() === ''){
            historiasbd = [];
        }

        else{
            if(filtro.filtropaciente || filtro.filtrofecha){
                historiasbd = historias.filter(historia => historia.pacienteId === filtro.filtropaciente || historia.fecha.substr(0,10) === filtro.filtrofecha);
            }

            if (filtro.filtropaciente && filtro.filtrofecha){
                historiasbd = historias.filter(historia => historia.pacienteId === filtro.filtropaciente && historia.fecha.substr(0,10) === filtro.filtrofecha);
            }
            
        }
        console.log(historiasbd);
        filtrarHistorias(historiasbd);   
    }

    // Paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = historias.slice(indexOfFirstPost, indexOfLastPost);
    const currentPosts2 = historiasfiltradas.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return ( 
        <>
        <div className="col-md-11 col-sm-3 mt-5" >
            <form onSubmit={submitFiltro} className="form-group mt-5 container" >
                <div className="row">
                    <div className="col-md-4">
                        <input className="form-control" 
                            type="text"
                            name="filtropaciente" 
                            placeholder="Documento"
                            onChange={changeFiltro}
                        />
                    </div>

                    <div className="col-md-5">
                        <input className="form-control" 
                            type="date" 
                            name="filtrofecha"
                            placeholder="Fecha Cita"
                            onChange={changeFiltro}
                        />
                    </div>

                    <div className="col-md-1 ">
                        <button 
                            type="submit"
                            className="btn btn-info form-control w-75"
                            ><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
                
            {historias.length === 0
                ? 
                    (<h3 className="text-center">No hay Historias Clínicas disponibles</h3>) 

                : 
                    (
                        <table className="table table-bordered mt-3 ">
                            <thead>
                                <tr>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Hora</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Paciente ID</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                    
                            <tbody>
                                {currentPosts2.length === 0

                                    ?
                                    
                                    (
                                        
                                        currentPosts.map(historia => (
                                            <Historia
                                                key={historia._id}
                                                historia={historia}
                                                usuario={usuario}
                                            />
                                        ))
                                    )

                                    :
                                    (
                                        currentPosts2.map(historia => (
                                            <Historia
                                                key={historia._id}
                                                historia={historia}
                                                usuario={usuario}
                                            />
                                        ))
                                    )
                                    
                                }
                            </tbody>
                        </table>
                    )
            }
        </div>    
            {currentPosts2.length === 0 
                ?
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={historias.length}
                        paginate={paginate}
                    /> 
                :
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={historiasfiltradas.length}
                        paginate={paginate}
                    />
            }
        </>
     );
}
 
export default ListadoHistorias;