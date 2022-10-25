import React, { useState } from 'react';
import '../estilos/FormSeccion.css';
import { v4 as uuidv4 } from 'uuid';

function FormSeccion (props) {

  const [input, setInput] = useState('');

  const manejarCambioSeccion = e => {
    setInput(e.target.value);
    }

  const manejarEnvioSeccion = e => {
    e.preventDefault();
    const seccionNueva = {
      ID_Seccion: uuidv4(),
      nombre: input,
      Subsecciones: []
    }
    props.onSubmit(seccionNueva);
  }

  const reiniciarBusqueda = e => {
    document.querySelector('#root > form.form-agregar-seccion > input').value = '';
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
        onClick={reiniciarBusqueda}>
        Agregar
      </button>
    </form>
  );
}

export default FormSeccion;