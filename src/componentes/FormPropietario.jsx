import React from 'react';
import '../estilos/FormPropietario.css';

function FormPropietario (props) {

    return (
        <form className="form-propietarios">
            <h2 className='h2-propietario'> {props.nombre} </h2>
            <input 
                className='input-propietario'
                type={props.tipo}
                placeholder=''
                maxLength={props.longitud}/>
        </form>
    );
}

export default FormPropietario;