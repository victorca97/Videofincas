import React,{useState,useEffect} from 'react';
import ListaTareas from './ListaTareas';
import '../estilos/Seccion.css';
import { BsFillTrashFill } from "react-icons/bs";
import axios from 'axios';
import GetURLAPI from '../utilidades/parametros';

function Seccion({fincaSelect,ID_Seccion, nombre, Subseccion,eliminarSeccion}) {
    const [listaTareas,setListaTareas]= useState([]);
    const getSubSecciones = async(fincaSelect,nombre) => {
        const url_base = GetURLAPI()
        const api_plantilla = await axios.get(url_base+`plantilla/${fincaSelect}`)
        const listaTareas = api_plantilla.data[0].Seccion.map(sec=>{
            if (sec.nombre === nombre){
                console.log('sec',sec.Subsecciones)
                setListaTareas(sec.Subsecciones)
                console.log('listaTareas',sec.Subsecciones)
            }
        })
        console.log('lista_result',listaTareas)

    };
    // Subseccion.map((sec)=> console.log(sec))

    // useEffect(() => {
    //     setListaSubsecciones(Subseccion);
    //     console.log(Subseccion)
    // }, []);
    // listaSubsecciones={listaSubsecciones} setListaSubsecciones={setListaSubsecciones}
    console.log(Subseccion)
    return (
        <div className='form-info'>
            <h3> {nombre.charAt(0).toUpperCase() + nombre.slice(1)} </h3>
            <ListaTareas listaTareas={listaTareas}/>
            <div className='seccion-contenedor-iconos'>
                <BsFillTrashFill 
                className="seccion-icono"
                onClick={() => getSubSecciones(fincaSelect,nombre)}/>
            </div>
        </div>
    );
}

export default Seccion;