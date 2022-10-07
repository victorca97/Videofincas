import React, { useState } from 'react';
import AgregarSeccion from './agregarSeccion';
import Seccion from './Seccion';

function ListaSecciones() {
    const [secciones, setSecciones] = useState([]);

    const agregarSeccion = seccion => {

        if (seccion.texto.trim()) {
            seccion.texto = seccion.texto.trim();

            const seccionesActualizadas = [seccion, ...secciones];
            setSecciones(seccionesActualizadas);

        }
    }
    
    return(
        <>
            <AgregarSeccion onSubmit={agregarSeccion}/>
            <div className='contenedor-secciones'>
                {
                    secciones.map((seccion) =>
                    <Seccion
                        key={seccion.id}
                        id={seccion.id}
                        texto={seccion.texto}
                    />
                    )
                }
            </div>
        </>
    );
}

export default ListaSecciones;