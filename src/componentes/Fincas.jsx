import React,{useEffect,useState} from 'react'
import '../estilos/Fincas.css';
import ReactSelect from 'react-select';
import axios from 'axios';

export const Fincas = () => {
    const [fincas, setFincas] = useState([]);
    useEffect(() => {
        getPlantilla();
    }, []);

    const getPlantilla = async() => {
        const resp = await axios.get('http://127.0.0.1:4000/propiedades')
        console.log(resp.data);
        setFincas(resp.data);
    };

    return (
        <div className='fincas-contenedor'>
            <ReactSelect
                options = { fincas.map(sup => ({ label: sup._id, value: sup._id})) }
            />
        </div>
    )
} 
