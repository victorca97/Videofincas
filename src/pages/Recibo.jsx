import Logo from "../componentes/logo";
import {useState,useEffect} from 'react';
import { Fincas } from "../componentes/Fincas";
import ListaSecciones from "../componentes/ListaSecciones";
import SubirImg from "../componentes/SubirImg";
import '../App.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
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
                    nombre='Formulario del Administrador'/>
            </div>
            <form className="nombre-finca-formulario">
                <h2> Nombre de la Finca: </h2>
                <div className='autocomplete-wrapper'>
                    <Fincas setFincaSelect={setFincaSelect} getPlantilla={getPlantilla}/>
                </div>
            </form>
            <ListaSecciones listaSecciones={listaSecciones} setListaSecciones={setListaSecciones}/>
            <button onClick={putPlantilla}>GUARDAR</button>
        </>
    );
}

export default Admin;
