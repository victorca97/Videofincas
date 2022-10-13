import React from 'react'
import '../estilos/Fincas.css';
import ReactSelect from 'react-select';

const fincas = [
    { id: 123, name: 'Finca Las Palomas', adress: 'Palomas' },
    { id: 124, name: 'Finca Las Garzas', adress: 'Garzas' },
    { id: 125, name: 'Finca Los Portales', adress: 'Portales' },
    { id: 126, name: 'Finca Las Torres', adress: 'Torres' }
]


export const Fincas = () => {

    return (
        <div className='fincas-contenedor'>
            <ReactSelect
                options = { fincas.map(sup => ({ label: sup.name, value: sup.id })) }
            />
        </div>
    )
}