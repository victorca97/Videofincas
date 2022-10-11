import React, { useState } from 'react';
import FormSeccion from './FormSeccion';
import Seccion from './Seccion';

function ListaSecciones() {
    const [secciones, setSecciones] = useState([]);

    const agregarSeccion = seccion => {

        if (seccion.texto.trim()) {
            seccion.texto = seccion.texto.trim();

            const seccionesActualizadas = [...secciones, seccion];
            setSecciones(seccionesActualizadas);

        }

    }

    const eliminarSeccion = id => {
        const seccionesActualizadas = secciones.filter(seccion => seccion.id !== id);
        setSecciones(seccionesActualizadas);
    }
    
    return(
        <>
            <FormSeccion onSubmit={agregarSeccion}/>
            <div className='contenedor-secciones'>
                {
                    secciones.map((seccion) =>
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