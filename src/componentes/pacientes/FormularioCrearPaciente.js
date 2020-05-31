import React,{useState, useContext, useEffect} from 'react';
// import styled from '@emotion/styled';
import Error from './../admin/Error';
import pacienteContext from '../../context/pacientes/pacienteContext';
import Swal from 'sweetalert2';

const FormularioCrearPaciente = ({props}) => {
    const [paciente,guardarpaciente]= useState({
        documento:'',
        nombre: '',
        apellido:'',
        fnacimiento:'',        
        telefono:'',
        direccion:'',
        password:'',
        confpassword:'',
        cargo: 'Paciente'
    });

    const pacientesContext = useContext(pacienteContext);
    const { pacienteseleccionado, modificarPaciente, agregarPacientes } = pacientesContext;

    // Effect que detecta si hay un paciente seleccionado
    useEffect(() => {
        if (pacienteseleccionado !== null){
            pacienteseleccionado.fnacimiento = pacienteseleccionado.fnacimiento.substr(0,10)
            guardarpaciente({
                ...pacienteseleccionado,
                password : '',
                confpassword : ''
            })
        }else{
            guardarpaciente({
                documento:'',
                nombre: '',
                apellido:'',
                fnacimiento:'',        
                telefono:'',
                direccion:'',
                password:'',
                confpassword:'' ,                
                cargo: 'Paciente'
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

        if (paciente.documento.trim()=== "" && paciente.nombre.trim()=== "" && paciente.apellido.trim()=== "" && paciente.fnacimiento.trim()=== "" && paciente.direccion.trim()=== "" && paciente.telefono.trim()=== "" && paciente.password.trim()=== "" && paciente.confpassword.trim()=== "") {
            Swal.fire(
                'Error',
                'Todos los campos son obligatorios',
                'error'
            );
            return;
        }

        if(paciente.documento.trim()=== "" || tamano <8 || tamano > 12 ){
            guardarError({
                Mensaje: 'El campo documento debe tener entre 8 y 12 numeros',
                bandera: true
            })
            return;
        }
        if(paciente.nombre.trim()=== ""){
            guardarError({
                Mensaje: 'El campo nombre es obligatorio',
                bandera: true
            })
            return;
        }
        if(paciente.apellido.trim()=== ""){
            guardarError({
                Mensaje: 'El campo apellido es obligatorio',
                bandera: true
            })
            return;
        }
        if(paciente.fnacimiento.trim()=== "" || paciente.fnacimiento.length !== 10){
            guardarError({
                Mensaje: 'El campo fecha de nacimiento  no tiene el formato requerido',
                bandera: true
            })
            return;
        }
        if(paciente.direccion.trim()=== ""){
            guardarError({
                Mensaje: 'El campo dirección es obligatorio',
                bandera: true
            })
            return;
        }
        if(paciente.telefono.trim()=== ""){
            guardarError({
                Mensaje: 'El campo teléfono es obligatorio',
                bandera: true
            })
            return;
        }
        if(paciente.password.trim()=== ""){
            guardarError({
                Mensaje: 'El campo contraseña es obligatorio',
                bandera: true
            })
            return;
        }
        if(paciente.password !== paciente.confpassword){
            guardarError({
                Mensaje: 'Las contraseñas no coinciden',
                bandera: true
            })
            return
        }

        guardarError({
            documento:'',
            nombre: '',
            apellido:'',
            fnacimiento:'',
            telefono:'',
            direccion:'',
            password:'',
            confpassword:''  
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
            password:'' ,
            confpassword:''      
        })

        props.history.push('/consultar-pacientes');
    }
  
    return (  
    <div className="container mt-4" >
        
        <form onSubmit={submit}>
            <div className="container fondoForm">
            <div className="container Formularios">
            <div className="form-group">
                <label className="font-weight-bold">DOCUMENTO DE IDENTIDAD</label>
                <input type="NUMBER" id="documento"
                className="form-control col-md-11" name="documento" onChange={Guardar} placeholder="ej. 123456789" 
                value={paciente.documento}
                />
            </div>

            <div className="form-group">
                <label className="font-weight-bold">NOMBRE</label>
                <input type="text" id="nombre" className="form-control col-md-11" name="nombre"  onChange={Guardar} placeholder="ej. Andres Felipe" value={paciente.nombre}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">APELLIDOS</label>
                <input type="text" id="apellidos" className="form-control col-md-11" name="apellido" onChange={Guardar} placeholder="ej. Perez Gonzalez" value={paciente.apellido}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">FECHA DE NACIMIENTO</label>
                <input type="date" id="nacimiento" className="form-control col-md-11" name="fnacimiento"  onChange={Guardar} placeholder="dd/mm/aaaa" value={paciente.fnacimiento}/>
            </div>
            </div>
            <div className="container Formularios">
            <div className="form-group">
                <label className="font-weight-bold">DIRECCION</label>
                <input type="text" id="direccion" className="form-control col-md-11" name="direccion" onChange={Guardar} placeholder="ej. Calle 9 #11-01" value={paciente.direccion}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">TELEFONO</label>
                <input type="number" id="telefono" className="form-control col-md-11" name="telefono" onChange={Guardar} placeholder="ej. 3003000000" value={paciente.telefono}/>
            </div>
            <div className="form-group">
                <label className="font-weight-bold">CONTRASEÑA</label>
                <input type="password" id="contrasena" className="form-control col-md-11" name="password" onChange={Guardar} placeholder="********" value={paciente.password}/>
            </div>
            <div className="form-group pr-50 ErrorCpaciente">
                {paciente.confpassword !== paciente.password ? <Error mensaje={"Las contraseñas no coinciden"}/> : null}
            </div>
            <div className="form-group">
                <label className="font-weight-bold">CONFIRMAR CONTRASEÑA</label>
                <input type="password" id="confContrasena" className="form-control col-md-11" name="confpassword" placeholder="********" onChange={Guardar} value={paciente.confpassword}/>
            </div>
            <div className="form-group pr-50 ErrorCpaciente" >
                {error.bandera ? <Error mensaje={error.Mensaje}/> : null}
            </div>
            </div>
            
            <div className="form-group">
                <input type="submit" id="guardarPaciente"
                className="form-control btnForm font-weight-bold col-md-11" 
                value={pacienteseleccionado ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </div>
            </div>
        </form>
    </div>
    );
}
 
export default FormularioCrearPaciente;