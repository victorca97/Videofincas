import { useState } from 'react';
import SubSeccionFormulario  from './SubSeccionFormulario';
import '../estilos/ListaTareas.css'
import SubSeccion from './SubSeccion';

function SubSecciones({listaSecciones}) {

 
  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();

      const tareasActualizadas = [...tareas, tarea];
      setTareas(tareasActualizadas);
    }

  }

 

  return(
    <>
      <SubSeccionFormulario onSubmit={agregarTarea}/>
      <div className='tareas-lista-contenedor'>
        {
          listaSecciones.map((seccion) =>
            <SubSeccion
            seccion={seccion}
            agregarTarea={agregarTarea}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}

            />
          )
        }
      </div>
    </>
  );
}

export default SubSecciones;