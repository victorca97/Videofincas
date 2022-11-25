import SubSeccion from "./SubSeccion";
import { useState, useEffect } from "react";
import SubSeccionFormulario from "./SubSeccionFormulario";
export const ListaSubSecciones = ({ ID_Seccion, Subsecciones, listaSecciones, setListaSecciones}) => {

  console.log('entro a lista subsecciones ',Subsecciones)
 const [tareas, setTareas] = useState(Subsecciones);
  

  const agregarTarea = tarea => {
      console.log('entro a agregar tarea')
      console.log(tarea)
   
      tarea.nombre = tarea.nombre.trim();

     /*  const tareasActualizadas = [...tareas, tarea]; */
      console.log('tarea para insertar >>> ', tarea)
      /* setTareas(tareasActualizadas); */
      let encontrarSeccion = listaSecciones.find(seccion => seccion.ID_Seccion == ID_Seccion)
      setTareas([...tareas, tarea])
      encontrarSeccion.Subsecciones.push(tarea)
      console.log('encontrarSeccion >>> ', encontrarSeccion)
      /* setListaSecciones([...listaSecciones, encontrarSeccion])  */
      console.log('Lista secciones actualizadas >>> ', listaSecciones)
  }

  const agregarDatosTarea = (tarea,Monto, Descripcion) => {
    console.log('entro a agregar datos de tarea')
    console.log(tarea)
    console.log(Monto)
    console.log(Descripcion)
    tarea.descripcion=Descripcion
    tarea.monto=Monto
    console.log('tareaaaaaaaaaaaaaaaaaa',tarea)
 
  }
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.ID_Subseccion !== id);
    console.log('eliminarTarea ', tareasActualizadas)
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
        <SubSeccionFormulario agregarTarea={agregarTarea}/>
        <div className='tareas-lista-contenedor'>
          {
            tareas.map((tarea) =>
              <SubSeccion {...tarea} tarea={tarea} tareas={tareas} agregarTarea={agregarTarea} eliminarTarea={eliminarTarea} completarTarea={completarTarea} agregarDatosTarea={agregarDatosTarea}/>
            )
          }
        </div>
     
      </>
    )
}
