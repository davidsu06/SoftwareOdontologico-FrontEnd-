import React, { useContext, useEffect } from 'react';
import citaContext from '../../context/citas/citaContext';
import Cita from './Cita';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; 

const ListadoCita = () => {

    const citasContext = useContext(citaContext);
    const { listarCitas, citas, filtrarCitas, citasfiltradas, searching } = citasContext;

    
    
    

    useEffect(() => {
        listarCitas();
    }, [])

    const SelectDate = e => {
        let month = 0;
        if (e.getMonth()+1 < 10) {
            month = `0${e.getMonth()+1}`;
        }else{
            month = e.getMonth() + 1;
        }

        const fecha = `${e.getFullYear()}-${month}-${e.getDate()}`;
        filtrarCitas(fecha);
    }

    

    return ( 
        <>

        <div className="container">

            <div className="row mt-3">

                <div className="col-md-3">
                <InfiniteCalendar 
                width={300}
                height={200}
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
                        // searching && citasfiltradas.length === 0

                        // ? 
                        // (<h3 className="text-center">No hay citas disponibles para el día seleccionado</h3>)

                        // :
                        ( citas.length === 0
                            ? (<h3 className="text-center">No hay disponibilidad de citas</h3>) 
                            : 
                            <table className="table table-bordered mt-3">
        
                                <thead>
                                    <tr>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Hora</th>
                                        <th scope="col">Paciente ID</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col" className="text-center">Acciones</th>
                                    </tr>
                                </thead>
                        
                                <tbody>
                                    {
                                        searching 
                                        ? (
                                            citasfiltradas.map(citafiltrada => (
                                                <Cita
                                                
                                                key={citafiltrada.id}
                                                cita={citafiltrada}
                                                />
                                            ))
                                        )
                                        :
                                        (citas.map(cita => (
                                            <Cita
                                            
                                            key={cita.id}
                                            cita={cita}
                                            />
                                        )))
                                    }
        
                                </tbody>
        
                            </table>
        
                            )
                    }

                </div>

            </div>

        </div>
            
        </>
    );
}
 
export default ListadoCita;