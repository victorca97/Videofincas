import React,{useEffect,useRef,useState} from 'react';
import '../estilos/Fincas.css';
import ReactSelect from 'react-select';
import axios from 'axios';
import GetURLAPI from '../utilidades/parametros';

export const Fincas = ({setFincaSelect, getPlantilla}) => {
    // ====== CONEXION CON LA API ======
    const [fincas, setFincas] = useState([]);


    useEffect(() => {
        getFincas();
    }, []);

    const getFincas = async() => {
        const url_base = GetURLAPI()
        const resp = await axios.get(url_base+'propiedades')
        setFincas(resp.data);
    };

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
                  setFincaSelect(finca_seleccion.value)
                  getPlantilla(finca_seleccion.value)
                }
              }
                options = { fincas.map(sup => ({ label: sup._id, value: sup._id})) }
            />
        </div>
    )
} 
