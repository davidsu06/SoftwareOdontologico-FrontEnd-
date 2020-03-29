import React,{useState} from 'react';
import styled from '@emotion/styled';
import Error from './../admin/Error';
const FormularioCrearPaciente = () => {
    const [paciente,guardarpaciente]= useState({
        Documento:'',
        Nombre: '',
        Apellidos:'',
        Fnacimiento:'',
        Direccion:'',
        Telefono:''
    });
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
        let tamano=paciente.Documento.length;
        
        if(paciente.Documento.trim()=== "" || tamano <8 || tamano > 12 ){
            guardarError({
                Mensaje: 'el campo DOCUMENTO debe tener entre 8 y 12 numeros',
                bandera: true
            })
            return;
        }
        if(paciente.Nombre.trim()=== ""){
            guardarError({
                Mensaje: 'el campo NOMBRE es obligatorio',
                bandera: true
            })
            return;
        }
        if(paciente.Apellidos.trim()=== ""){
            guardarError({
                Mensaje: 'el campo APELLIDOS es obligatorio',
                bandera: true
            })
            return;
        }
        if(paciente.Fnacimiento.trim()=== "" || paciente.Fnacimiento.length != 10){
            guardarError({
                Mensaje: 'el campo FECHA DE NACIMIENTO  no tiene el formato requerido',
                bandera: true
            })
            return;
        }
        if(paciente.Direccion.trim()=== ""){
            guardarError({
                Mensaje: 'el campo  DIRECCION es obligatorio',
                bandera: true
            })
            return;
        }
        if(paciente.Telefono.trim()=== ""){
            guardarError({
                Mensaje: 'el campo TELEFONO es obligatorio',
                bandera: true
            })
            return;
        }

        console.log('enviando paciente.....');

        guardarError({
            Documento:'',
            Nombre: '',
            Apellidos:'',
            Fnacimiento:'',
            Direccion:'',
            Telefono:''
        })

    }

    
    return (  
    <div className="container mt-4" >
        
        <form onSubmit={submit}>
              
            <div className="form-group">
                <label className="font-weight-bold">DOCUMENTO DE IDENTIDAD</label>
                <input type="NUMBER" className="form-control" name="Documento" onChange={Guardar} placeholder="ej. 123456789" value={paciente.Documento}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">NOMBRE</label>
                <input type="text" className="form-control" name="Nombre"  onChange={Guardar} placeholder="ej. Andres Felipe" value={paciente.Nombre}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">APELLIDOS</label>
                <input type="text" className="form-control" name="Apellidos" onChange={Guardar} placeholder="ej. Perez Gonzalez" value={paciente.Apellidos}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">FECHA DE NACIMIENTO</label>
                <input type="date" className="form-control" name="Fnacimiento"  onChange={Guardar} placeholder="dd/mm/aaaa" value={paciente.Fnacimiento}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">DIRECCION</label>
                <input type="text" className="form-control" name="Direccion" onChange={Guardar} placeholder="ej. Calle 9 #11-01" value={paciente.Direccion}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">TELEFONO</label>
                <input type="number" className="form-control" name="Telefono" onChange={Guardar} placeholder="ej. 3003000000" value={paciente.Telefono}/>
            </div>
            {error.bandera ? <Error mensaje={error.Mensaje}/> : null}  
            <div className="form-group">
                <button type="submit"className="form-control boton font-weight-bold" >Guardar</button>
            </div>
            
        </form>
    </div>
    );
}
 
export default FormularioCrearPaciente;