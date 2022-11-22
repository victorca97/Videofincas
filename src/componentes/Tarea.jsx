import React from 'react';
import '../estilos/Tarea.css'
import { AiFillCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {

  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className='container-fluid '>
        <form>
          <div class="row d-flex align-items-center">
            <div
              className='col-3 tarea-texto'
              onClick={() => completarTarea(id)}>
              {texto.charAt(0).toUpperCase() + texto.slice(1)}
            </div>
            <div class="col">
              <input class="form-control" type="text"
                name='periodo'
                placeholder='Descripcion o periodo' />
            </div>
            <div class="col">
              <input class="form-control" type="number"
                name='importe'
                placeholder="Ingresar importe Total" />
            </div>
            
            <div className='col-1 tarea-contenedor-iconos'
              onClick={() => eliminarTarea(id)}>
              <AiFillCloseCircle className='tarea-icono' />
            </div>
          </div>

        </form>
      </div>

    </div>
  );
}

export default Tarea