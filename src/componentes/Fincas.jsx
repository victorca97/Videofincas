import React,{useEffect,useRef,useState} from 'react';
import '../estilos/Fincas.css';
import Select from 'react-select';
import axios from 'axios';
import GetURLAPI from '../utilidades/parametros';

export const Fincas = ({listafincas, setFincaSelect, getPlantilla, getFincasBySelector, setObtenerId}) => {
 
    return (
        <div className='fincas-contenedor'>
            <Select  
              onChange={
                (finca_seleccion)=>{
                  console.log(finca_seleccion.value)
                }
              }
                options = { listafincas?.map(sup => ({ label: sup.Nombre, value: sup.Nombre})) }
            />
        </div>
    )
} 
