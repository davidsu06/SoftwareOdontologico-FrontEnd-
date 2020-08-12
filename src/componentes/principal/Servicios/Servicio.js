import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));


const Servicio = ({servicio}) =>{

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="card" style={{width: '19rem', margin: '1cm'}}>
            <img src={servicio.imagen} className="card-img-top" alt={servicio.nombre_servicio} />
            <div className="card-body">
                <h5 className="card-title">{servicio.nombre_servicio}</h5>
            </div>
            <div className="card-footer justify-content-center">
                <div className="text-center">
                    <button className="btn btn-info w-75"  onClick={handleOpen}>
                        <i className="fas fa-info-circle mr-2"></i>
                    <b>Información</b></button>
                </div>  
            </div>

            <Modal
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                <h1 id="simple-modal-title">Detalles del Servicio</h1>
                    <div className="text-left">
                        <figure className="figure border border-dark">
                            <img 
                                src={servicio.imagen} 
                                className="figure-img img-fluid rounded" 
                                alt={servicio.nombre_servicio} 
                            />
                        </figure>
                        <p><b>Nombre:</b> {servicio.nombre_servicio} </p>
                        <p><b>Costo Tratamiento:</b> ${new Intl.NumberFormat("de-DE").format(servicio.precioTotal)}</p>
                        <p><b>Plan de Citas:</b> {servicio.cantidadCitas}</p>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default Servicio
