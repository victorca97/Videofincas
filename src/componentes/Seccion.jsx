import React from 'react';
import ListaTareas from './ListaTareas';
import '../estilos/Seccion.css';
import { BsFillTrashFill } from "react-icons/bs";

function Seccion({ID_Seccion, nombre, eliminarSeccion}) {
    return (
        <div className='form-info'>
            <h3> {nombre.charAt(0).toUpperCase() + nombre.slice(1)} </h3>
            <ListaTareas />
            <div className='seccion-contenedor-iconos'>
                <BsFillTrashFill 
                className="seccion-icono"
                onClick={() => eliminarSeccion(ID_Seccion)}/>
            </div>
        </div>
    );
}

export default Seccion;