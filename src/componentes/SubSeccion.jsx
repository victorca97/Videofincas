import React from 'react';
import '../estilos/Tarea.css'
import { AiFillCloseCircle } from "react-icons/ai";

function SubSeccion({ ID_Subseccion, texto, completada, completarTarea, eliminarTarea}) {

  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className='container-fluid '>
        <form>
          <div className="row d-flex align-items-center">
            <div
              className='col-3 tarea-texto'
              onClick={() => completarTarea(ID_Subseccion)}>
              {texto.charAt(0).toUpperCase() + texto.slice(1)}
            </div>
            <div className="col">
              <input className="form-control" type="text"
                name='periodo'
                placeholder='Descripcion o periodo' />
            </div>
            <div className="col">
              <input className="form-control" type="number"
                name='importe'
                placeholder="Ingresar importe Total" />
            </div>
            
            <div className='col-1 tarea-contenedor-iconos'
              onClick={() => eliminarTarea(ID_Subseccion)}>
              <AiFillCloseCircle className='tarea-icono' />
            </div>
          </div>

        </form>
      </div>

    </div>
  );
}

export default SubSeccion