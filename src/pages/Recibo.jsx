// import Logo from "../componentes/logo";
// import { Fincas } from "../componentes/Fincas";
// import ListaSecciones from "../componentes/ListaSecciones";
// import '../App.css';

// function Recibo() {
//     return (
//         <>
//             <div className="contenedor-cabecera">
//                 <Logo 
//                     nombre='Formulario de Recibos'/>
//             </div>
//             <form className="nombre-finca-formulario">
//                 <h2> Nombre de la Finca: </h2>
//                 <div className='autocomplete-wrapper'>
//                     <Fincas />
//                 </div>
//             </form>
//             <ListaSecciones />
//         </>
//     );
// }

// export default Recibo;

import Logo from "../componentes/logo";
import {useState,useEffect} from 'react';
import { Fincas } from "../componentes/Fincas";
import ListaSecciones from "../componentes/ListaSecciones";
import '../App.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {FcUndo} from "react-icons/fc";

function Admin() {
    const [fincaSelect,setFincaSelect]= useState("");
    const [listaSecciones,setListaSecciones]= useState([]);

    const getPlantilla = async(fincaOption) => {
        console.log('fincaSelect',fincaSelect)
        console.log('fincaOption',fincaOption)
        const api_plantilla = await axios.get(`http://127.0.0.1:4000/plantilla/${fincaOption}`)
        console.log('--->',api_plantilla.data[0].Seccion);
        const lista_result = api_plantilla.data[0].Seccion.map(sec=>{
            let a_objeto = {
                id: uuidv4(),
                texto: sec.nombre
            }
            console.log('nombre->',sec.nombre);
            return(a_objeto);
        })
        setListaSecciones(lista_result);
    };

    const putPlantilla = async() => {
        console.log(listaSecciones)
        await axios.put('http://127.0.0.1:4000/plantilla',{
        '_id': fincaSelect,
        'Finca': fincaSelect,
        'Seccion':listaSecciones
        })
    }

    return (
        <>
            <div className="contenedor-cabecera">
                <Logo 
                    nombre='Formulario para Recibos'/>
            </div>
            <div className="contenedor-btn-retry">
                <FcUndo className="btn-retry" />
            </div>
            <form className="nombre-finca-formulario">
                <h2> Nombre de la Finca: </h2>
                <div className='autocomplete-wrapper'>
                    <Fincas setFincaSelect={setFincaSelect} getPlantilla={getPlantilla}/>
                </div>
            </form>
            <ListaSecciones listaSecciones={listaSecciones} setListaSecciones={setListaSecciones}/>
            <button className='btn-guardar' onClick={putPlantilla}>GUARDAR</button>
        </>
    );
}

export default Admin;