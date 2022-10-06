import React, { useState } from 'react';
import '../estilos/Seccion.css';
// import { v4 as uuidv4 } from 'uuid';

function AgregarSeccion (props) {

  const [input, setInput] = useState('');

  const manejarCambioSeccion = e => {
    setInput(e.target.value);
  }

  const manejarEnvioSeccion = e => {
    e.preventDefault();
    const seccionNueva = {
      texto: input,
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
        type='button'>
        Nueva Sección
      </button>
    </form>
  );
}

export default AgregarSeccion;