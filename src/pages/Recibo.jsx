
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

    const getPlantilla = async (fincaOption) => {
        const api_plantilla = await axios.get(url_base + `plantilla/${fincaOption}`)
        const lista_result = api_plantilla.data[0].Seccion.map(sec => {
            let a_objeto = {
                ID_Seccion: uuidv4(),
                nombre: sec.nombre,
                Subsecciones: sec.Subsecciones
            }
            return (a_objeto);
        })

        setListaSecciones(lista_result);
        console.log('result', lista_result)
        console.log('lista', listaSecciones)
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
                                                console.log(finca_seleccion.value)
                                            }
                                        }
                                        options={listafincas?.map(sup => ({ label: sup.Nombre, value: sup.Nombre }))}
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