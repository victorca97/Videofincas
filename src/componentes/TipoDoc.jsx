import React from 'react';
import ReactSelect from 'react-select';
import '../estilos/TipoDoc.css';

const doc = [
    { id: 123, name: 'D.N.I.', adress: 'dni' },
    { id: 124, name: 'Carnet de Extranjería', adress: 'ce' },
    { id: 125, name: 'Nro. Pasaporte', adress: 'passport' }
]


export const TipoDoc = () => {

    return (
        <div className='tipodoc-contenedor'>
            <ReactSelect
                options = { doc.map(sup => ({ label: sup.name, value: sup.id })) }
            />
        </div>
    )
}