import React from 'react';
import '../estilos/Tarea.css'
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from 'react';
import { useEffect } from 'react';

function SubSeccion({ tarea, ID_Subseccion, nombre, monto, descripcion, completarTarea, eliminarTarea, agregarDatosTarea, ID_Seccion, visualizarReciboSubseccion = false }) {

  const [Monto, setMonto] = useState(monto)
  const [Descripcion, setDescripcion] = useState(descripcion)

  useEffect(() => {
    agregarDatosTarea(tarea, Monto, Descripcion)
  }, [Monto, Descripcion])

  return (
    <div className={'tarea-contenedor'}>
      <div className='container-fluid '>
        <form>
          <div className="row d-flex align-items-center">
            <div
              className='col-3 tarea-texto'
              onClick={() => completarTarea(ID_Subseccion)}>
              {nombre.charAt(0).toUpperCase() + nombre.slice(1)}
            </div>
            <div className="col">
              {
                !visualizarReciboSubseccion ? (
                  <input className="form-control" type="text"
                    name='descripcion'
                    placeholder='Descripcion o periodo' value={Descripcion} onChange={e => setDescripcion(e.target.value)} />
                ) : (
                  <input className="form-control" type="text"
                    name='descripcion'
                    placeholder='Descripcion o periodo' value={Descripcion} disabled />
                )
              }

            </div>
            <div className="col">
              {
                !visualizarReciboSubseccion ? (
                  <input className="form-control" type="number"
                    name='monto'
                    placeholder="Ingresar Monto" value={Monto} onChange={e => setMonto(parseFloat(e.target.value))}
                  />

                ) : (
                  <input className="form-control" type="number"
                    name='monto'
                    placeholder="Ingresar Monto" value={Monto} disabled
                  />
                )
              }

            </div>
            <div className='col-1 tarea-contenedor-iconos'>
              {
                !visualizarReciboSubseccion && <AiFillCloseCircle className='tarea-icono' onClick={() => eliminarTarea(ID_Subseccion, ID_Seccion)} />
              }

            </div>
          </div>

        </form>
      </div>


    </div>
  );
}

export default SubSeccion