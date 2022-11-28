import SubSeccion from "./SubSeccion";
import { useState, useEffect } from "react";
import SubSeccionFormulario from "./SubSeccionFormulario";
export const ListaSubSecciones = ({ ID_Seccion, Subsecciones, listaSecciones}) => {

  console.log('entro a lista subsecciones ',Subsecciones)
 const [tareas, setTareas] = useState(Subsecciones);
  

  const agregarTarea = tarea => {

      tarea.nombre = tarea.nombre.trim();
      console.log('tarea para insertar >>> ', tarea)
      let encontrarSeccion = listaSecciones.find(seccion => seccion.ID_Seccion == ID_Seccion)
      setTareas([...tareas, tarea])
      encontrarSeccion.Subsecciones.push(tarea)
      console.log('encontrarSeccion >>> ', encontrarSeccion)
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
  const eliminarTarea = (idSubtarea,idSeccion) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.ID_Subseccion !== idSubtarea);
    console.log('eliminarTarea ', tareasActualizadas)
    let encontrarSeccion = listaSecciones.find(seccion => seccion.ID_Seccion == idSeccion);
    encontrarSeccion.Subsecciones = tareasActualizadas
    console.log('encontrar Seccion: ',encontrarSeccion)
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
              <SubSeccion {...tarea} key={tarea.id} tarea={tarea} tareas={tareas} agregarTarea={agregarTarea} eliminarTarea={eliminarTarea} completarTarea={completarTarea} agregarDatosTarea={agregarDatosTarea} ID_Seccion={ID_Seccion}/>
            )
          }
        </div>
     
      </>
    )
}
