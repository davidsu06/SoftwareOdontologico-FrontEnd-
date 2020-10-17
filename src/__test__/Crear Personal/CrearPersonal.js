import React, { useState } from 'react';

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

    const [error, guardarError]=useState({
        Mensaje: 'Hubo Error',
        bandera: false
    });    

    //Extraer los valores al state
    const Guardar = e =>{
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

        if (personal.documento.trim() === "" && personal.nombre.trim() === "" && personal.apellido.trim() === "" && personal.fecha_nacimiento.trim() === "" && personal.direccion.trim() === "" && personal.telefono.trim() === "" && ( personal.cargo.trim() === "Seleccione..." || personal.cargo.trim() === "" ) && personal.password.trim() === "" && personal.confpassword.trim() === "") {
            guardarError({
                Mensaje: 'Todos los campos son obligatorios',
                bandera: true
            });
            return;
        }
        
        if (personal.documento.trim() === "" || tamano <8 || tamano > 12 ){
            guardarError({
                Mensaje: 'El campo documento debe tener entre 8 y 12 numeros',
                bandera: true
            })
            return;
        }

        if (personal.nombre.trim() === ""){
            guardarError({
                Mensaje: 'El campo nombre es obligatorio',
                bandera: true
            })
            return;
        }

        if (personal.apellido.trim() === ""){
            guardarError({
                Mensaje: 'El campo apellido es obligatorio',
                bandera: true
            })
            return;
        }

        if (personal.fecha_nacimiento.trim() === "" || personal.fecha_nacimiento.length !== 10){
            guardarError({
                Mensaje: 'El campo fecha de nacimiento  no tiene el formato requerido',
                bandera: true
            })
            return;
        }

        if (personal.direccion.trim() === ""){
            guardarError({
                Mensaje: 'El campo dirección es obligatorio',
                bandera: true
            })
            return;
        }

        if (personal.telefono.trim() === ""){
            guardarError({
                Mensaje: 'El campo teléfono es obligatorio',
                bandera: true
            })
            return;
        }

        if (personal.cargo.trim() === ""){
            guardarError({
                Mensaje: 'Seleccione un tipo empleado',
                bandera: true
            })
            return;
        }

        if (personal.password.trim() === ""){
            guardarError({
                Mensaje: 'El campo contraseña es obligatorio',
                bandera: true
            })
            return;
        }

        if (personal.password !== personal.confpassword){
            guardarError({
                Mensaje: 'Las contraseñas no coinciden',
                bandera: true
            })
            return;
        }

    }
    
    
    return ( 
        <div className="container mt-4" >
            <form onSubmit={submit}>
                <div className=" container fondoForm">
                
                    <div className="container Formularios">
                        <div className="form-group">
                            <label className="font-weight-bold label-1">DOCUMENTO DE IDENTIDAD</label>
                            <input 
                                type="NUMBER" 
                                className="form-control col-md-11 justify-content-center" 
                                name="documento" onChange={Guardar} 
                                placeholder="ej. 123456789" 
                                value={personal.documento}
                                data-testid='test-documento'
                            />
                        </div>

                        <div className="form-group">
                            <label className="font-weight-bold">NOMBRE</label>
                            <input 
                                type="text" 
                                className="form-control col-md-11" 
                                name="nombre" onChange={Guardar} 
                                placeholder="ej. Andres Felipe" 
                                value={personal.nombre}
                                data-testid='test-nombre'
                            />
                        </div>

                        <div className="form-group">
                            <label className="font-weight-bold">APELLIDO</label>
                            <input 
                                type="text" 
                                className="form-control col-md-11" 
                                name="apellido" 
                                onChange={Guardar} 
                                placeholder="ej. Perez Gonzalez" 
                                value={personal.apellido}
                                data-testid='test-apellido'
                            />
                        </div>

                        <div className="form-group">
                            <label className="font-weight-bold">FECHA DE NACIMIENTO</label>
                            <input 
                                type="date" 
                                className="form-control col-md-11" 
                                name="fecha_nacimiento" 
                                onChange={Guardar} 
                                placeholder="dd/mm/aaaa" 
                                value={personal.fecha_nacimiento}
                                data-testid='test-fecha'
                            />
                        </div>

                        <div className="form-group">
                            <label className="font-weight-bold">DIRECCION</label>
                            <input 
                                type="text" 
                                className="form-control col-md-11" 
                                name="direccion" 
                                onChange={Guardar} 
                                placeholder="ej. Calle 9 #11-01" 
                                value={personal.direccion}
                                data-testid='test-direccion'
                            />
                        </div>

                    </div>

                    <div className="container Formularios">
                        <div className="form-group">
                            <label className="font-weight-bold">TELEFONO</label>
                            <input 
                                type="number" 
                                className="form-control col-md-11" 
                                name="telefono" 
                                onChange={Guardar} 
                                placeholder="ej. 3003000000" 
                                value={personal.telefono}
                                data-testid='test-telefono'
                            />
                        </div>

                        <div className="form-group">
                            <label className="font-weight-bold">TIPO EMPLEADO</label>
                            <input 
                                type="text" 
                                className="form-control col-md-11" 
                                name="cargo" 
                                onChange={Guardar} 
                                placeholder="ej. Administrador" 
                                value={personal.cargo}
                                data-testid='test-cargo'
                            />
                        </div>

                        <div className="form-group">
                            <label className="font-weight-bold">CONTRASEÑA</label>
                            <input 
                                type="password" 
                                className="form-control col-md-11" 
                                name="password" 
                                placeholder="********" 
                                onChange={Guardar} 
                                value={personal.password}
                                data-testid='test-password'
                            />
                        </div>

                        <div className="form-group">
                            <label className="font-weight-bold">CONFIRMAR CONTRASEÑA</label>
                            <input 
                                type="password" 
                                className="form-control col-md-11" 
                                name="confpassword" 
                                placeholder="********" 
                                onChange={Guardar} 
                                value={personal.confpassword}
                                data-testid='test-confpassword'
                            />
                        </div>

                        <div >
                            
                        </div>

                        {error.bandera ? <div className="form-group pr-50 ErrorCpaciente" data-testid='error-message'>{error.Mensaje}</div> : null} 
                    </div>

                    <div className="form-group">
                        <input 
                            type="submit" 
                            className="form-control btnForm font-weight-bold col-md-11" value='Agregar Personal'
                            data-testid='btn-submit'
                        />
                    </div> 
                </div> 
                
            </form>
        </div>
    );
}
 
export default FormularioCrearPersonal;