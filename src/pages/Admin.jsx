import Logo from "../componentes/logo";
import {useState } from 'react';
import { Fincas } from "../componentes/Fincas";
import ListaSecciones from "../componentes/ListaSecciones";
import '../App.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
function Admin() {
    const [fincaSelect,setFincaSelect]= useState("");
    const [listaSecciones,setListaSecciones]= useState([]);

    const getPlantilla = async(fincaOption) => {
        const api_plantilla = await axios.get(`http://127.0.0.1:4000/plantilla/${fincaOption}`)
        const lista_result = api_plantilla.data[0].Seccion.map(sec=>{
            let a_objeto = {
                ID_Seccion: uuidv4(),
                nombre: sec.nombre,
                Subsecciones: sec.Subsecciones
            }
            return(a_objeto);
        })

        setListaSecciones(lista_result);
        console.log('result',lista_result)
        console.log('lista',listaSecciones)
    };

    const putPlantilla = async() => {
        console.log('lista',listaSecciones)
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
                    <Fincas setFincaSelect={setFincaSelect} getPlantilla={getPlantilla} />
                </div>
            </form>
            <ListaSecciones listaSecciones={listaSecciones} setListaSecciones={setListaSecciones} fincaSelect={fincaSelect}/>
            <button onClick={putPlantilla}>GUARDAR</button>
        </>
    );
}

export default Admin;