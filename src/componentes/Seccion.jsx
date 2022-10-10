import React from 'react';
import ListaTareas from './ListaTareas';
import '../estilos/Seccion.css';
import { BsFillTrashFill } from "react-icons/bs";

function Seccion({id, texto, eliminarSeccion}) {
    return (
        <div className='form-info'>
            <h2> {texto.charAt(0).toUpperCase() + texto.slice(1)} </h2>
            <ListaTareas />
            <div className='seccion-contenedor-iconos'>
                <BsFillTrashFill 
                className="seccion-icono"
                onClick={() => eliminarSeccion(id)}/>
            </div>
        </div>
    );
}

export default Seccion;