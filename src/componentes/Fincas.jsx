// import React from 'react';
// import '../estilos/Fincas.css';
// import ReactSelect from 'react-select';

// const fincas = [
//     { id: 123, name: 'Finca Las Palomas', adress: 'Palomas' },
//     { id: 124, name: 'Finca Las Garzas', adress: 'Garzas' },
//     { id: 125, name: 'Finca Los Portales', adress: 'Portales' },
//     { id: 126, name: 'Finca Las Torres', adress: 'Torres' }
// ]


// export const Fincas = () => {

//     return (
//         <div className='fincas-contenedor'>
//             <ReactSelect
//                 options = { fincas.map(sup => ({ label: sup.name, value: sup.id })) }
//             />
//         </div>
//     )
// }
import React,{useEffect,useRef,useState} from 'react';
import '../estilos/Fincas.css';
import ReactSelect from 'react-select';
import axios from 'axios';

function useLocalStorage(itemName,initialValue){
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    
    if(!localStorageItem){
      localStorage.setItem(itemName,JSON.stringify(initialValue));
      parsedItem=initialValue;
    }else{
      parsedItem = JSON.parse(localStorageItem);
    } 

    const [item,setItem] = React.useState(parsedItem)
    
    const saveItem = (newItem) => {
      const stringfieldItem = JSON.stringify(newItem);
      localStorage.setItem(itemName,stringfieldItem);
      setItem(newItem);
    }
    return[
      item,
      saveItem,
    ]
  }

export const Fincas = () => {
    // ====== CONEXION CON LA API ======
    const [fincas, setFincas] = useState([]);
    useEffect(() => {
        getFincas();
    }, []);

    const getFincas = async() => {
        const resp = await axios.get('http://127.0.0.1:4000/propiedades')
        setFincas(resp.data);
    };

    const getPlantilla = async(finca_seleccion) => {
        const resp2 = await axios.get(`http://127.0.0.1:4000/plantilla/${finca_seleccion}`)
        console.log(resp2.data[0]);
        localStorage.setItem('plantilla',JSON.stringify(resp2.data[0]));
    };
    // ====== CONEXION CON LA API ======
    return (
        <div className='fincas-contenedor'>
            <ReactSelect  onChange={(finca_seleccion)=>getPlantilla(finca_seleccion.value)}
                options = { fincas.map(sup => ({ label: sup._id, value: sup._id})) }
            />
        </div>
    )
} 
