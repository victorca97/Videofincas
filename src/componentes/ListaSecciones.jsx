import React, { useState,useEffect } from 'react';
import FormSeccion from './FormSeccion';
import Seccion from './Seccion';

function ListaSecciones({listaSecciones,setListaSecciones}) {
    const [secciones, setSecciones] = useState([]); 
    //const [update,setUpdate] = useState(fincaSelect);
    const agregarSeccion = seccion => {
        console.log(secciones)
        if (seccion.texto.trim()) {
            seccion.texto = seccion.texto.trim();
            const seccionesActualizadas = [...listaSecciones, seccion];
            setListaSecciones(seccionesActualizadas);
        }
    }
    const eliminarSeccion = id => {
        const seccionesActualizadas = listaSecciones.filter(seccion => seccion.id !== id);
        setListaSecciones(seccionesActualizadas);
    }

    return(
        <>
            <FormSeccion onSubmit={agregarSeccion}/>
            <div className='contenedor-secciones'>
                {
                    listaSecciones.map((seccion) =>                    
                    <Seccion
                        key={seccion.id}
                        id={seccion.id}
                        texto={seccion.texto}
                        eliminarSeccion={eliminarSeccion}
                    />
                    )
                }
            </div>
        </>
    );
}

export default ListaSecciones;