import React, { useState } from 'react';
import '../estilos/FormSeccion.css';
import { v4 as uuidv4 } from 'uuid';

function FormSeccion (props) {

  const [inputSeccion, setInputSeccion] = useState('');

  const manejarCambioSeccion = e => {
    setInputSeccion(e.target.value);
    }

  const manejarEnvioSeccion = e => {
    e.preventDefault();
    const seccionNueva = {
      ID_Seccion: uuidv4(),
      nombre: inputSeccion,
      Subsecciones: []
    }
    props.onSubmit(seccionNueva); 
  }

  
  return (
    <form className='form-agregar-seccion'
      onSubmit={manejarEnvioSeccion}>
      <input
        className='seccion-input'
        type='text'
        placeholder='Ingresa una nueva seccion'
        name='texto'
        onChange={manejarCambioSeccion}
      />
      <button 
        className='seccion-boton'
        onClick={manejarEnvioSeccion}>
        Agregar
      </button>
    </form>
  );
}

export default FormSeccion;