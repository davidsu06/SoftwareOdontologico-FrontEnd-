import React,{useState, useContext, useEffect} from 'react';
import Error from './../admin/Error';
import personaContext from '../../context/personal/personaContext';

const FormularioCrearPersonal = () => {
    
    const [personal,guardarpersonal]= useState({
        documento: '',
        nombre: '',
        apellido: '',
        fecha_nacimiento: '',
        direccion: '',
        telefono: '',
        cargo: '',
        password: '',
        confpassword: ''
    });

    const personalContext = useContext(personaContext)
    const { personalseleccionado, agregarPersonal, editarPersonal} = personalContext;

    useEffect(() => {
        if (personalseleccionado != null) {
            guardarpersonal(personalseleccionado);
        }else{
            guardarpersonal({
                documento: '',
                nombre: '',
                apellido: '',
                fecha_nacimiento: '',
                direccion: '',
                telefono: '',
                cargo: '',
                password: '',
                confpassword: ''
            })
        }

    }, [personalseleccionado])


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
        let tamano=personal.documento.length;
        
        if(personal.documento.trim()=== "" || tamano <8 || tamano > 12 ){
            guardarError({
                Mensaje: 'el campo DOCUMENTO debe tener entre 8 y 12 numeros',
                bandera: true
            })
            return;
        }
        if(personal.nombre.trim()=== ""){
            guardarError({
                Mensaje: 'el campo nombre es obligatorio',
                bandera: true
            })
            return;
        }
        if(personal.apellido.trim()=== ""){
            guardarError({
                Mensaje: 'el campo apellido es obligatorio',
                bandera: true
            })
            return;
        }
        if(personal.fecha_nacimiento.trim()=== "" || personal.fecha_nacimiento.length !== 10){
            guardarError({
                Mensaje: 'el campo FECHA DE NACIMIENTO  no tiene el formato requerido',
                bandera: true
            })
            return;
        }
        if(personal.direccion.trim()=== ""){
            guardarError({
                Mensaje: 'el campo  DIRECCION es obligatorio',
                bandera: true
            })
            return;
        }
        if(personal.telefono.trim()=== ""){
            guardarError({
                Mensaje: 'el campo  TELEFONO es obligatorio',
                bandera: true
            })
            return;
        }
        if(personal.cargo.trim()=== "Selecione..." || personal.cargo.trim()===""){
            guardarError({
                Mensaje: 'Seleccione un tipo empleado',
                bandera: true
            })
            return;
        }
        if(personal.password.trim()=== ""){
            guardarError({
                Mensaje: 'el campo CONTRASEÑA es obligatorio',
                bandera: true
            })
            return;
        }
        if(personal.password !== personal.confpassword){
            guardarError({
                Mensaje: 'las CONTRASEÑAS no coinciden',
                bandera: true
            })
            return;
        }

        console.log('enviando paciente.....');
        // guardarpersonal({
        //     documento: '',
        //     nombre: '',
        //     apellido: '',
        //     fecha_nacimiento: '',
        //     direccion: '',
        //     telefono: '',
        //     cargo: '',
        //     password: '',
        //     confpassword: ''
        // })

        // Revisar si esta editando o agregando
        if(personalseleccionado === null){
            agregarPersonal(personal);
        }else{
            editarPersonal(personal);
        }
        guardarpersonal({
            documento: '',
            nombre: '',
            apellido: '',
            fecha_nacimiento: '',
            direccion: '',
            telefono: '',
            cargo: '',
            password: '',
            confpassword: ''
        })
    }
    
    
    return ( 
        <div className="container mt-4" >
        <form onSubmit={submit}>
            
            <div className="form-group">
                <label className="font-weight-bold">documento DE IDENTIDAD</label>
                <input type="NUMBER" className="form-control" name="documento" onChange={Guardar} placeholder="ej. 123456789" value={personal.documento}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">nombre</label>
                <input type="text" className="form-control" name="nombre" onChange={Guardar} placeholder="ej. Andres Felipe" value={personal.nombre}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">apellido</label>
                <input type="text" className="form-control" name="apellido" onChange={Guardar} placeholder="ej. Perez Gonzalez" value={personal.apellido}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">FECHA DE NACIMIENTO</label>
                <input type="date" className="form-control" name="fecha_nacimiento" onChange={Guardar} placeholder="dd/mm/aaaa" value={personal.fecha_nacimiento}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">direccion</label>
                <input type="text" className="form-control" name="direccion" onChange={Guardar} placeholder="ej. Calle 9 #11-01" value={personal.direccion}/>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">telefono</label>
                <input type="number" className="form-control" name="telefono" onChange={Guardar} placeholder="ej. 3003000000" value={personal.telefono}/>
            </div>


            <div className="form-group ">
                <label className="font-weight-bold">TIPO EMPLEADO</label>
                <select className="form-control selector" id="select"name="cargo" onChange={Guardar}>
                    <option value="primera">Selecione...</option>
                    <option>Administrador</option>
                    <option>Personal</option>
                    <option>Medico</option>
                </select>
            </div>

            <div className="form-group">
                <label className="font-weight-bold">CONTRASEÑA</label>
                <input type="password" className="form-control" name="password" onChange={Guardar} value={personal.password}/>
            </div>
            {personal.confpassword !== personal.password ? <Error mensaje={"Las contraseñas no coinciden"}/> : null} 
            <div className="form-group">
                <label className="font-weight-bold">CONFIRMAR CONTRASEÑA</label>
                <input type="password" className="form-control" name="confpassword" onChange={Guardar} value={personal.confpassword}/>
            </div>
            {error.bandera ? <Error mensaje={error.Mensaje}/> : null}  
            <div className="form-group">
                <input type="submit" className="form-control boton font-weight-bold" value= {personalseleccionado ? 'Editar Personal' : 'Agregar Personal'}/>
            </div>
            
        </form>
    </div>
     );
}
 
export default FormularioCrearPersonal;