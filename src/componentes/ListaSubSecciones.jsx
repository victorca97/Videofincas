import SubSeccion from "./SubSeccion";
import { useState } from "react";
import SubSeccionFormulario from "./SubSeccionFormulario";
import Seccion from "./Seccion";
export const ListaSubSecciones = ({ listaSecciones}) => {

    console.log(listaSecciones)
 const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();

      const tareasActualizadas = [...tareas, tarea];
      setTareas(tareasActualizadas);
    }

  }
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }
    
    return (
        <>
        <SubSeccionFormulario onSubmit={agregarTarea}/>
        <div className='tareas-lista-contenedor'>
          {
            tareas.map((tarea) =>
              <SubSeccion
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                eliminarTarea={eliminarTarea}
                completarTarea={completarTarea}
              />
            )
          }
        </div>
      </>
    )
}
