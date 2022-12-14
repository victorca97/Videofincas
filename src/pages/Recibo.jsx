
import { useState } from 'react';
import ListaSecciones from "../componentes/ListaSecciones";
import Regresar from "../componentes/Regresar";
import '../App.css';
import axios from 'axios';
/* import { v4 as uuidv4 } from 'uuid'; */
import Select from 'react-select'
import GetURLAPI from '../utilidades/parametros';
import { meses, tipos } from '../datos/datosSelectores';
const url_base = GetURLAPI()
var today = new Date();
var year = today.getFullYear();

function Recibo({ listafincas }) {

    const [fincaSelect, setFincaSelect] = useState("");
    const [listaSecciones, setListaSecciones] = useState([]);
    const [tipoSelect, setTipoSelect] = useState()
    const [mesSelect, setMesSelect] = useState()
    const [showAlert, setShowAlert] = useState(false)
    const [message, setMessage] = useState('')

    const getRecibo = async (tipo_seleccion) => {

        console.log(tipo_seleccion)
        const data_POST = {
            "_id": fincaSelect,
            "mes": mesSelect,
            "anno": year,
            "tipo": tipo_seleccion,

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
        if (res.data.status === 201) {
            setShowAlert(true)
            setMessage(res.data.mensaje)
        }
        console.log(res)
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3 mt-4'>
                        <Regresar ruta='recibos' className='col-3' />
                    </div>
                    <div className='col-9'>
                        
                        <form className='form-propietarios d-flex'>

                            <div className='justify-content-center'>
                                <h2 className='h2-propietario'>Finca: </h2>
                                <div className='input-select mb-4 text-center'>
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

                            <div className='justify-content-center'>
                                {/* <Fincas setFincaSelect={setFincaSelect} getPlantilla={getPlantilla} listafincas={listafincas}/> */}
                                <h2 className='h2-propietario'>Mes: </h2>
                                <div className='input-select mb-4 text-center'>
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
                            <div className='justify-content-center'>
                                <h2 className='h2-propietario'>Tipo: </h2>
                                <div className='input-select mb-4 text-center'>
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
             
                    <div className='d-flex justify-content-center align-items-center'>
                    {
                            showAlert && (
                                <div className="alert alert-primary alert-dismissible fade show mt-2" role="alert">
                                    <strong>{message}</strong>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            )
                        }
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