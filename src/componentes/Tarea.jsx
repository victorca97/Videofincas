import React from 'react';
import '../estilos/Tarea.css'
import { AiFillCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div 
                className='tarea-texto'
                onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div
                className='periodo-contenedor'>
                <input 
                    className='tarea-input' 
                    type="text" 
                    role="combobox" 
                    size="1" 
                    name='texto' 
                    placeholder="Ingresar periodo" 
                    autocomplete="off"
                />
            </div>
            <div
                className='importe-contenedor'>
                <input 
                    className='tarea-input' 
                    type="text" 
                    role="combobox" 
                    size="1" 
                    name='texto' 
                    placeholder="Ingresar importe" 
                    autocomplete="off"
                />
            </div>
            <div 
                className='tarea-contenedor-iconos'
                onClick={() => eliminarTarea(id)}>
                <AiFillCloseCircle className='tarea-icono'/>
            </div>
        </div>
    );
}

export default Tarea