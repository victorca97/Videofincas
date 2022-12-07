import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import '../estilos/FormPropietario.css'
import Select from 'react-select';
import Regresar from '../componentes/Regresar';
import { ItemRecibo } from '../componentes/ItemRecibo';
import '../estilos/FormPropietario.css';
import { meses, years, tipos } from '../datos/datosSelectores';
const encabezadoCss = {
    background: '#294A98',
    color: 'white'
}

export const ListarRecibo = ({ listafincas, getRecibos, recibos, propietarios }) => {
    const [recibosPorFinca, setRecibosPorFinca] = useState([])
    const [mensaje, setMensaje] = useState('')
    const [fincaSelect, setFincaSelect] = useState('');
    const [mesSelect, setMesSelect] = useState('');
    const [annioSelect, setAnnioSelect] = useState('')
    const [propietariosPorFinca, setPropietariosPorFinca] = useState([])
    const [showLoading, setShowLoading] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [message, setMessage] = useState('')
    const [showAlertBuscar, setShowAlertBuscar] = useState(false)

    const buscarReciboPorFinca = (annioSelect) => {
        const reciboEncontrado = recibos.filter(recibo => recibo.Finca === fincaSelect && recibo.Mes === mesSelect && recibo.Year === annioSelect)
        setRecibosPorFinca(reciboEncontrado)
        if(reciboEncontrado.length === 0){
            setShowAlertBuscar(!showAlert)
            setMensaje('No hay recibos')
        }
    }


    const buscarPropietarioPorFinca = (finca_select) => {
        const propietariosEncontrado = propietarios.filter(propietario => propietario.Finca === finca_select)
        setPropietariosPorFinca(propietariosEncontrado)
    }


    useEffect(() => {
        getRecibos();
    }, []);

    return (
        <div>
            <div className='container-fluid' >
                <div className='row justify-content-center'>

                    <div className='col-xs-12'>
                        <form className='form-propietarios d-flex'>
                            <div className='justify-content-center'>
                                <h2 className='h2-propietario text-start'>Finca: </h2>
                                <div className='input-select mb-4 text-center'>
                                    <Select
                                        onChange={
                                            (finca_seleccion) => {
                                                /*  setFincaSelect(finca_seleccion.value) */
                                                setFincaSelect(finca_seleccion.value)
                                                buscarPropietarioPorFinca(finca_seleccion.value)
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
                                                setMesSelect(mes_seleccion.value)
                                                /*  setFincaSelect(finca_seleccion.value) */
                                            }
                                        }
                                        options={meses?.map(m => ({ label: m.mes, value: m.id }))}
                                    />
                                </div>
                            </div>
                            <div className='justify-content-center'>
                                <h2 className='h2-propietario'>Año: </h2>
                                <div className='input-select mb-4 text-center'>
                                    <Select
                                        onChange={
                                            (tipo_seleccion) => {
                                                /*  setFincaSelect(finca_seleccion.value) */
                                                setAnnioSelect(tipo_seleccion.value)
                                            }
                                        }
                                        options={years?.map(year => ({ label: year, value: year }))}
                                    />
                                </div>
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-4 ml-4'>
                                <button type="button" className="btn btn-primary" onClick={() => buscarReciboPorFinca(annioSelect)}>
                                    Buscar
                                </button>
                            </div>

                        </form>
                        <div>
                            {
                                (showAlertBuscar && recibosPorFinca.length===0) && (
                                    <div className={`alert alert-warning alert-dismissible fade show text-center`} role="alert">
                                            <strong>{mensaje}</strong>
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShowAlertBuscar(false)}>
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                    </div>
                                )
                            }
                        </div>

                    </div>

                </div>
            </div>


            <div className='container-fluid ' >

                <div className='col-6 mx-auto text-center'>

                    {
                        showLoading && (
                            <div className='d-flex justify-content-center align-items-center mt-4'>
                                <strong className='d-block mr-2'>Generando recibo ... </strong>
                                <div className="spinner-border text-primary" role="status" aria-hidden="true"></div>
                            </div>
                        )
                    }
                    {
                        (message.length > 0 && showAlert) && (
                            <div className="alert alert-primary alert-dismissible fade show d-flex justify-content-center align-items-center mt-2 " role="alert">
                                <strong>{message}</strong>
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        )
                    }
                </div>



                <div className='col-12 pb-0 text-center'>

                    {recibosPorFinca.length != 0 && (
                        <table className="table table-primary table-striped mt-3">
                            <thead>
                                <tr style={encabezadoCss}>
                                    <th scope="col">#</th>
                                    <th scope="col">Finca</th>
                                    <th scope="col">Mes</th>
                                    <th scope='col'>Año</th>
                                    <th scope="col">Tipo</th>
                                    <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {recibosPorFinca?.map((recibo, contador) => (
                                    <ItemRecibo key={recibo._id} {...recibo} contador={contador} recibo={recibo} listafincas={listafincas} recibosPorFinca={recibosPorFinca} setRecibosPorFinca={setRecibosPorFinca} getRecibos={getRecibos} propietariosPorFinca={propietariosPorFinca} meses={meses} years={years} tipos={tipos} setShowLoading={setShowLoading} setMessage={setMessage} setShowAlert={setShowAlert} />
                                ))
                                }

                            </tbody>

                        </table>
                    )

                    }


                </div>
                <div className='d-flex justify-content-center align-items-center mb-2'>
                    <Regresar
                        ruta='home' className='mb-2' />
                    <div className='ml-4 mt-2'>
                        <Link to="/Videofincas/recibo"
                            state={{ listafincas: listafincas, recibosPorFinca: recibosPorFinca }}>
                            <button type="button" className="btn btn-guardar p-2.5">
                                Agregar
                            </button>
                        </Link>
                    </div>
                </div>



            </div>
        </div>
    )
}
