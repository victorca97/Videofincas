import React, { useState } from 'react';
import '../estilos/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function SubSeccionFormulario ({agregarTarea}) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva = {
      ID_Subseccion: uuidv4(),
      nombre: input,
      /* completada: false, */
      monto: '',
      descripcion: '',
     
    }
    agregarTarea(tareaNueva);
   
  }

  return (
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type='text'
        placeholder='Ingresa una subseccion'
        name='nombre'
        onChange={manejarCambio}
      />
      <button 
        className='tarea-boton'>
        Agregar
      </button>
    </form>
  );
}

export default SubSeccionFormulario ;