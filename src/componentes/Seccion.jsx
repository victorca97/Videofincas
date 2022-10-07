import React from 'react';
import ListaTareas from './ListaTareas';
import '../estilos/Seccion.css';

function Seccion({id, texto}) {
    return (
        <div className='form-info'>
            <h2> {texto.charAt(0).toUpperCase() + texto.slice(1)} </h2>
            <ListaTareas />
        </div>
    );
}

export default Seccion;