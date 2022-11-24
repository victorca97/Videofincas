
import { useState } from 'react';
import ListaSecciones from "../componentes/ListaSecciones";
import Regresar from "../componentes/Regresar";
import '../App.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Select from 'react-select'
import GetURLAPI from '../utilidades/parametros';

const url_base = GetURLAPI()

function Recibo({ listafincas }) {
    const [fincaSelect, setFincaSelect] = useState("");
    const [listaSecciones, setListaSecciones] = useState([]);
    console.log('listafincas >>>', listafincas)

    const getRecibo = async (fincaId) => {
       
        const resp = await axios.get(url_base + `recibo/${fincaId}`)
        console.log(resp.data)
        console.log(resp.data[0]?.Seccion)
        if(resp.data.length > 0){
            setListaSecciones(resp?.data[0].Seccion)
        }else{
            setListaSecciones([])
        }
       
    };


    const putPlantilla = async () => {
        console.log('lista', listaSecciones)
        await axios.put(url_base + 'plantilla', {
            '_id': fincaSelect,
            'Finca': fincaSelect,
            'Seccion': listaSecciones
        })
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3'><Regresar
                        ruta='home' className='col-3' /></div>
                    <div className='col-6'>
                        <form className='form-propietarios d-flex justify-content-center'>

                            <h2 className='h2-propietario'>Finca: </h2>
                            <div className='autocomplete-wrapper'>
                                {/* <Fincas setFincaSelect={setFincaSelect} getPlantilla={getPlantilla} listafincas={listafincas}/> */}
                                <div className='input-select mb-3'>
                                    <Select
                                        onChange={
                                            (finca_seleccion) => {
                                                console.log(finca_seleccion)
                                                /*  setFincaSelect(finca_seleccion.value) */
                                                getRecibo(finca_seleccion.value)
                                            }
                                        }
                                        options={listafincas?.map(sup => ({ label: sup.Nombre, value: sup._id }))}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div className='container-fluid'>
                    <ListaSecciones listaSecciones={listaSecciones} setListaSecciones={setListaSecciones} fincaSelect={fincaSelect} />
                    <div className='contenedor-btn-guardar'>
                        <button onClick={putPlantilla} className='btn-guardar'>GUARDAR</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Recibo;