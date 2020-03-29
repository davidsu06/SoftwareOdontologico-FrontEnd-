import React,{useState} from 'react';
import Error from './../admin/Error';

const FormularioCrearPaciente = () => {
    
    const [personal,guardarpersonal]= useState({
        Documento: '',
        Nombre: '',
        Apellidos: '',
        Fnacimiento: '',
        Direccion: '',
        Telefono: '',
        tipoEmpleado: '',
        contrasena: '',
        confcontrasena: ''
    });
    const [error,guardarError]=useState({
        Mensaje: 'Hubo Error',
        bandera: false
    });    
    //Extraer los valores al state
    const Guardar= e =>{
        guardarpersonal({
            ...personal,
            [e.target.name]: e.target.value
        })
        guardarError({
            Mensaje: 'Hubo Error',
            bandera: false
        })
    }


    const submit= e =>{
        e.preventDefault();
        let tamano=personal.Documento.length;
        
        if(personal.Documento.trim()=== "" || tamano <8 || tamano > 12 ){
            guardarError({
                Mensaje: 'el campo DOCUMENTO debe tener entre 8 y 12 numeros',
                bandera: true
            })
            return;
        }
        if(personal.Nombre.trim()=== ""){
            guardarError({
                Mensaje: 'el campo NOMBRE es obligatorio',
                bandera: true
            })
            return;
        }
        if(personal.Apellidos.trim()=== ""){
            guardarError({
                Mensaje: 'el campo APELLIDOS es obligatorio',
                bandera: true
            })
            return;
        }
        if(personal.Fnacimiento.trim()=== "" || personal.Fnacimiento.length != 10){
            guardarError({
                Mensaje: 'el campo FECHA DE NACIMIENTO  no tiene el formato requerido',
                bandera: true
            })
            return;
        }
        if(personal.Direccion.trim()=== ""){
            guardarError({
                Mensaje: 'el campo  DIRECCION es obligatorio',
                bandera: true
            })
            return;
        }
        if(personal.Telefono.trim()=== ""){
            guardarError({
                Mensaje: 'el campo  TELEFONO es obligatorio',
                bandera: true
            })
            return;
        }
        if(personal.tipoEmpleado.trim()=== "Selecione..." || personal.tipoEmpleado.trim()===""){
            guardarError({
                Mensaje: 'Seleccione un tipo empleado',
                bandera: true
            })
            return;
        }
        if(personal.contrasena.trim()=== ""){
            guardarError({
                Mensaje: 'el campo CONTRASEÑA es obligatorio',
                bandera: true
            })
            return;
        }
        if(personal.contrasena != personal.confcontrasena){
            guardarError({
                Mensaje: 'las CONTRASEÑAS no coinciden',
                bandera: true
            })
            return;
        }

        console.log('enviando paciente.....');
        guardarpersonal({
            Documento: '',
            Nombre: '',
            Apellidos: '',
            Fnacimiento: '',
            Direccion: '',
            Telefono: '',
            tipoEmpleado: '',
            contrasena: '',
            confcontrasena: ''
        })
    }
    
    
    return ( 
        <div className="container mt-4" >
        <form onSubmit={submit}>
            
            <div className="form-group">
                <label className="font-weight-bold">DOCUMENTO DE IDENTIDAD</label>
                <input type="NUMBER" className="form-control" name="Documento" onChange={Guardar} placeholder="ej. 123456789" value={personal.Documento}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">NOMBRE</label>
                <input type="text" className="form-control" name="Nombre" onChange={Guardar} placeholder="ej. Andres Felipe" value={personal.Nombre}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">APELLIDOS</label>
                <input type="text" className="form-control" name="Apellidos" onChange={Guardar} placeholder="ej. Perez Gonzalez" value={personal.Apellidos}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">FECHA DE NACIMIENTO</label>
                <input type="date" className="form-control" name="Fnacimiento" onChange={Guardar} placeholder="dd/mm/aaaa" value={personal.Fnacimiento}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">DIRECCION</label>
                <input type="text" className="form-control" name="Direccion" onChange={Guardar} placeholder="ej. Calle 9 #11-01" value={personal.Direccion}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">TELEFONO</label>
                <input type="number" className="form-control" name="Telefono" onChange={Guardar} placeholder="ej. 3003000000" value={personal.Telefono}/>
            </div>


            <div className="form-group ">
                <label className="font-weight-bold">TIPO EMPLEADO</label>
                <select className="form-control selector" id="select"name="tipoEmpleado" onChange={Guardar}>
                    <option value="primera">Selecione...</option>
                    <option>Administrador</option>
                    <option>Personal</option>
                    <option>Medico</option>
                </select>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">CONTRASEÑA</label>
                <input type="password" className="form-control" name="contrasena" onChange={Guardar} value={personal.contrasena}/>
            </div>
            {personal.confcontrasena !=personal.confcontrasena ? <Error mensaje={"Las contraseñas no coinciden"}/> : null} 
            <div className="form-group">
                <label className="font-weight-bold">CONFIRMAR CONTRASEÑA</label>
                <input type="password" className="form-control" name="confcontrasena" onChange={Guardar} value={personal.confcontrasena}/>
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