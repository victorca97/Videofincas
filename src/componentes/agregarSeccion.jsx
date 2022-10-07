import React, { useState } from 'react';
import '../estilos/FormSeccion.css';
// import { v4 as uuidv4 } from 'uuid';

function AgregarSeccion (props) {

  const [input, setInput] = useState('');

  const manejarCambioSeccion = e => {
    setInput(e.target.value);
  }

  const manejarEnvioSeccion = e => {
    e.preventDefault();
    const seccionNueva = {
      texto: input
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
        className='seccion-boton'>
        Nueva Sección
      </button>
    </form>
  );
}

export default AgregarSeccion;