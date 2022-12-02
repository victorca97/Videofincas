
import { useState } from 'react';
import ListaSecciones from "../componentes/ListaSecciones";
import Regresar from "../componentes/Regresar";
import '../App.css';
import axios from 'axios';
/* import { v4 as uuidv4 } from 'uuid'; */
import Select from 'react-select'
import GetURLAPI from '../utilidades/parametros';

const url_base = GetURLAPI()
var today = new Date();
var year = today.getFullYear();

function Recibo({ listafincas }) {

    const [fincaSelect, setFincaSelect] = useState("");
    const [listaSecciones, setListaSecciones] = useState([]);
    const [tipoSelect, setTipoSelect] = useState()
    const [mesSelect, setMesSelect] = useState()
   
    const meses = [
        { id: 1, mes: 'Enero' },
        { id: 2, mes: 'Febrero' },
        { id: 3, mes: 'Marzo' },
        { id: 4, mes: 'Abril' },
        { id: 5, mes: 'Mayo' },
        { id: 6, mes: 'Junio' },
        { id: 7, mes: 'Julio' },
        { id: 8, mes: 'Agosto' },
        { id: 9, mes: 'Septiembre' },
        { id: 10, mes: 'Octubre' },
        { id: 11, mes: 'Noviembre' },
        { id: 12, mes: 'Diciembre' },

    ]

    const tipos = [
        {id:1, tipo:'Departamento'},
        {id:2, tipo:'Estacionamiento'}
    ]

    const getRecibo = async (tipo_seleccion) => {
        
        console.log(tipo_seleccion)
        const data_POST = {
            "_id": fincaSelect,
            "mes": mesSelect,
            "anno": year,
            "tipo":tipo_seleccion,
            
        }

        console.log('dataPOSt ', data_POST)
        const resp = await axios.post(url_base + `recibo`, data_POST)

        console.log(resp.data)
        console.log(resp.data[0]?.Seccion)
        if (resp.data.length > 0) {
            setListaSecciones(resp?.data[0].Seccion)
           
        } else {
            setListaSecciones([])
        }

    };


    const putPlantilla = async () => {
        console.log('LISTA DE SECCIONES PARA GUARDAR EN LA BD >→→')
        const data = {
            Finca: fincaSelect,
            Year: 2022,
            Mes: mesSelect,
            Seccion: listaSecciones,
            tipo: tipoSelect
        }
        console.log(data)

        const res = await axios.post(url_base + `recibos_crear`, data);
        if(res.data.status === 201){
            alert(res.data.mensaje)
        }
        console.log(res)
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3'><Regresar
                        ruta='recibos' className='col-3' /></div>
                    <div className='col-6'>
                        <form className='form-propietarios'>
                            <div className='autocomplete-wrapper d-flex justify-content-center'>
                                <h2 className='h2-propietario'>Finca: </h2>
                                <div className='input-select mb-3'>
                                    <Select
                                        onChange={
                                            (finca_seleccion) => {
                                                /*  setFincaSelect(finca_seleccion.value) */
                                                setFincaSelect(finca_seleccion.value)
                                                
                                            }
                                        }
                                        options={listafincas?.map(sup => ({ label: sup.Nombre, value: sup._id }))}
                                    />
                                </div>
                            </div>

                            <div className='autocomplete-wrapper d-flex justify-content-center'>
                                {/* <Fincas setFincaSelect={setFincaSelect} getPlantilla={getPlantilla} listafincas={listafincas}/> */}
                                <h2 className='h2-propietario'>Mes: </h2>
                                <div className='input-select mb-3'>
                                    <Select
                                        onChange={
                                            (mes_seleccion) => {
                                                console.log(mes_seleccion.value)
                                                setMesSelect(mes_seleccion.value)
                                                /*  setFincaSelect(finca_seleccion.value) */
                                            }
                                        }
                                        options={meses?.map(m => ({ label: m.mes, value: m.id }))}
                                    />
                                </div>
                            </div>
                            <div className='autocomplete-wrapper d-flex justify-content-center'>
                                <h2 className='h2-propietario'>Tipo: </h2>
                                <div className='input-select mb-3'>
                                    <Select
                                        onChange={
                                            (tipo_seleccion) => {
                                                /*  setFincaSelect(finca_seleccion.value) */
                                                setTipoSelect(tipo_seleccion.value)
                                                getRecibo(tipo_seleccion.value)
                                            }
                                        }
                                        options={tipos?.map(sup => ({ label: sup.tipo, value: sup.id }))}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div className='container-fluid'>
                    <ListaSecciones listaSecciones={listaSecciones} setListaSecciones={setListaSecciones} />
                    <div className='contenedor-btn-guardar'>
                        <button onClick={putPlantilla} className='btn-guardar'>GENERAR RECIBO</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Recibo;