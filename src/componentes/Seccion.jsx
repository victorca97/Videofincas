import React from 'react'
import '../estilos/Seccion.css'

function AgregarSeccion () {

  const pulsar = (e)=>{
    e.preventDefault()
    console.log('Nueva seccion');
  }

  return (
    <button 
    className='seccion-boton'
    type='button'
    onClick={(e)=>{pulsar(e)}}>
      Nueva Sección
    </button>
  );
}

export default AgregarSeccion;