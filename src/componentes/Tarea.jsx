import React from 'react';
import '../estilos/Tarea.css'
import { AiFillCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {texto.charAt(0).toUpperCase() + texto.slice(1)}
      </div>
      <div
        className='periodo-contenedor'>
        <input 
          className='tarea-input' 
          type="text" 
          size="1" 
          name='texto' 
          placeholder="Ingresar periodo"
        />
      </div>
      <div
        className='importe-contenedor'>
        <input 
          className='tarea-input' 
          type="text"
          size="1" 
          name='texto' 
          placeholder="Ingresar importe"
        />
      </div>
      <div 
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
        <AiFillCloseCircle className='tarea-icono'/>
      </div>
    </div>
  );
}

export default Tarea