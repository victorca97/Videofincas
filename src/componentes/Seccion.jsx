import React from 'react';
import ListaTareas from './ListaTareas';
import '../estilos/Seccion.css';

function Seccion({texto}) {
    return (
        <div className='form-info'>
            <h2> {texto} </h2>
            <ListaTareas />
        </div>
    );
}

export default Seccion;