import React,{useState, useContext, useEffect} from 'react';
// import styled from '@emotion/styled';
import Error from './../admin/Error';
import pacienteContext from '../../context/pacientes/pacienteContext';
const FormularioCrearPaciente = () => {
    const [paciente,guardarpaciente]= useState({
        documento:'',
        nombre: '',
        apellido:'',
        fnacimiento:'',        
        telefono:'',
        direccion:'',
        password:''
    });

    const pacientesContext = useContext(pacienteContext);
    const { pacienteseleccionado, modificarPaciente, agregarPacientes } = pacientesContext;

    // Effect que detecta si hay un paciente seleccionado
    useEffect(() => {
        if (pacienteseleccionado !== null){
            guardarpaciente(pacienteseleccionado)
        }else{
            guardarpaciente({
                documento:'',
                nombre: '',
                apellido:'',
                fnacimiento:'',        
                telefono:'',
                direccion:'',
                password:''
            })
        }
    }, [pacienteseleccionado])
;
    const [error,guardarError]=useState({
        Mensaje: 'Hubo Error',
        bandera: false
    });    
    //Extraer los valores al state
    const Guardar= e =>{
        guardarpaciente({
            ...paciente,
            [e.target.name]: e.target.value
        })
        guardarError({
            Mensaje: 'Hubo Error',
            bandera: false
        })
    }


    const submit= e =>{
        e.preventDefault();
        let tamano=paciente.documento.length;
        
        if(paciente.documento.trim()=== "" || tamano <8 || tamano > 12 ){
            guardarError({
                Mensaje: 'el campo documento debe tener entre 8 y 12 numeros',
                bandera: true
            })
            return;
        }
        if(paciente.nombre.trim()=== ""){
            guardarError({
                Mensaje: 'el campo nombre es obligatorio',
                bandera: true
            })
            return;
        }
        if(paciente.apellido.trim()=== ""){
            guardarError({
                Mensaje: 'el campo apellido es obligatorio',
                bandera: true
            })
            return;
        }
        if(paciente.fnacimiento.trim()=== "" || paciente.fnacimiento.length !== 10){
            guardarError({
                Mensaje: 'el campo FECHA DE NACIMIENTO  no tiene el formato requerido',
                bandera: true
            })
            return;
        }
        if(paciente.direccion.trim()=== ""){
            guardarError({
                Mensaje: 'el campo  direccion es obligatorio',
                bandera: true
            })
            return;
        }
        if(paciente.telefono.trim()=== ""){
            guardarError({
                Mensaje: 'el campo telefono es obligatorio',
                bandera: true
            })
            return;
        }

        console.log('enviando paciente.....');

        guardarError({
            documento:'',
            nombre: '',
            apellido:'',
            fnacimiento:'',
            telefono:'',
            direccion:'',
            password:''
        })


        // Revisar si esta editando o agregando
        if(pacienteseleccionado === null){
            agregarPacientes(paciente);
        }else{
            modificarPaciente(paciente);
        }

        guardarpaciente({
            documento:'',
            nombre: '',
            apellido:'',
            fnacimiento:'',        
            telefono:'',
            direccion:'',
            password:''
        })

        

    }

   

   

    
    return (  
    <div className="container mt-4" >
        
        <form onSubmit={submit}>
              
            <div className="form-group">
                <label className="font-weight-bold">documento DE IDENTIDAD</label>
                <input type="NUMBER" 
                className="form-control" name="documento" onChange={Guardar} placeholder="ej. 123456789" 
                value={paciente.documento}
                />
            </div>

            <div className="form-group">
                <label className="font-weight-bold">nombre</label>
                <input type="text" className="form-control" name="nombre"  onChange={Guardar} placeholder="ej. Andres Felipe" value={paciente.nombre}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">apellido</label>
                <input type="text" className="form-control" name="apellido" onChange={Guardar} placeholder="ej. Perez Gonzalez" value={paciente.apellido}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">FECHA DE NACIMIENTO</label>
                <input type="date" className="form-control" name="fnacimiento"  onChange={Guardar} placeholder="dd/mm/aaaa" value={paciente.fnacimiento}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">direccion</label>
                <input type="text" className="form-control" name="direccion" onChange={Guardar} placeholder="ej. Calle 9 #11-01" value={paciente.direccion}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">telefono</label>
                <input type="number" className="form-control" name="telefono" onChange={Guardar} placeholder="ej. 3003000000" value={paciente.telefono}/>
            </div>
            <div className="form-group">
                <label className="font-weight-bold">CONTRASEÑA</label>
                <input type="password" className="form-control" name="password" onChange={Guardar} placeholder="********" value={paciente.password}/>
            </div>
            {error.bandera ? <Error mensaje={error.Mensaje}/> : null}  
            <div className="form-group">
                <input type="submit"
                className="form-control boton font-weight-bold" 
                value={pacienteseleccionado ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </div>
            
        </form>
    </div>
    );
}
 
export default FormularioCrearPaciente;