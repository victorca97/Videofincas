import React, { useState,useEffect } from 'react';
import FormSeccion from './FormSeccion';
import Seccion from './Seccion';

function ListaSecciones({listaSecciones,setListaSecciones, fincaSelect}) {
    const [secciones, setSecciones] = useState([]); 
    //const [update,setUpdate] = useState(fincaSelect);
    const agregarSeccion = seccion => {
        if (seccion.nombre.trim()) {
            seccion.nombre = seccion.nombre.trim();
            const seccionesActualizadas = [...listaSecciones, seccion];
            setListaSecciones(seccionesActualizadas);
        }
    }
    const eliminarSeccion = ID_Seccion => {
        const seccionesActualizadas = listaSecciones.filter(seccion => seccion.ID_Seccion !== ID_Seccion);
        setListaSecciones(seccionesActualizadas);
    }
    return(
        <>
            <FormSeccion onSubmit={agregarSeccion}/>
            <div className='contenedor-secciones'>
                {
                    listaSecciones.map((seccion) =>                    
                    <Seccion  fincaSelect={fincaSelect}
                        key={seccion.ID_Seccion}
                        ID_Seccion={seccion.ID_Seccion}
                        nombre={seccion.nombre}
                        Subsecciones ={seccion.Subsecciones}
                        eliminarSeccion={eliminarSeccion}
                    />
                    )
                }{    listaSecciones.map((seccion)=> console.log('-----',seccion.Subsecciones))}
            </div>
        </>
    );
}

export default ListaSecciones;