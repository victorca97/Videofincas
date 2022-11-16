import React,{useEffect,useRef,useState} from 'react';
import '../estilos/Fincas.css';
import ReactSelect from 'react-select';
import axios from 'axios';
import GetURLAPI from '../utilidades/parametros';

export const Fincas = ({setFincaSelect, getPlantilla, getFincasBySelector, setObtenerId}) => {
    // ====== CONEXION CON LA API ======
    const [fincas, setFincas] = useState([]);
    
    

    const getFincas = async() => {
        const url_base = GetURLAPI()
        const resp = await axios.get(url_base+'finca')
        setFincas(resp.data);
        console.log(resp.data)
    };

    const obtenerId = async(nombre) => {
        const resultado = fincas.find(finca => finca.Nombre === nombre)
        setObtenerId(resultado._id)
    }


    useEffect(()=>{
        getFincas()
    },[])

    /* const getPlantilla = async(finca_seleccion) => {
        const resp2 = await axios.get(`http://127.0.0.1:4000/plantilla/${finca_seleccion}`)
       
        localStorage.setItem('plantilla',JSON.stringify(resp2.data[0].Seccion));
    }; */
    // ====== CONEXION CON LA API ======
    return (
        <div className='fincas-contenedor'>
            <ReactSelect  
              onChange={
                (finca_seleccion)=>{
                  //console.log(finca_seleccion)
                    setFincaSelect(finca_seleccion.value)
                    obtenerId(finca_seleccion.value)
                  //getPlantilla(finca_seleccion.value)
                }
              }
                options = { fincas?.map(sup => ({ label: sup.Nombre, value: sup.Nombre})) }
            />
        </div>
    )
} 
