import SubSeccion from "./SubSeccion";
import { useState } from "react";
import SubSeccionFormulario from "./SubSeccionFormulario";
export const ListaSubSecciones = ({ ID_Seccion, Subsecciones, listaSecciones, visualizarReciboSubseccion=false}) => {

 const [tareas, setTareas] = useState(Subsecciones);
  const agregarTarea = tarea => {

      tarea.nombre = tarea.nombre.trim();
      let encontrarSeccion = listaSecciones.find(seccion => seccion.ID_Seccion === ID_Seccion)
      setTareas([...tareas, tarea])
      encontrarSeccion.Subsecciones.push(tarea)

  }

  const agregarDatosTarea = (tarea,Monto, Descripcion) => {
    tarea.descripcion=Descripcion
    tarea.monto=Monto
  }
  const eliminarTarea = (idSubtarea,idSeccion) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.ID_Subseccion !== idSubtarea);
    let encontrarSeccion = listaSecciones.find(seccion => seccion.ID_Seccion === idSeccion);
    encontrarSeccion.Subsecciones = tareasActualizadas
    setTareas(tareasActualizadas); 
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.ID_Subseccion === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }


    return (
        <>
        {
          !visualizarReciboSubseccion &&  <SubSeccionFormulario agregarTarea={agregarTarea}/>
        }
        <div className='tareas-lista-contenedor'>
          {
            tareas.map((tarea) =>
              <SubSeccion {...tarea} key={tarea.id} tarea={tarea} tareas={tareas} agregarTarea={agregarTarea} eliminarTarea={eliminarTarea} completarTarea={completarTarea} agregarDatosTarea={agregarDatosTarea} ID_Seccion={ID_Seccion} visualizarReciboSubseccion={visualizarReciboSubseccion}/>
            )
          }
        </div>
     
      </>
    )
}
