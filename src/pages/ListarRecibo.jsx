import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import '../estilos/FormPropietario.css'
import Select from 'react-select';
import Regresar from '../componentes/Regresar';
import { ItemRecibo } from '../componentes/ItemRecibo';

const encabezadoCss = {
    background: '#294A98',
    color: 'white'
}

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

const years = [2021, 2022, 2023]

export const ListarRecibo = ({ listafincas, getRecibos, recibos, propietarios }) => {
    const [recibosPorFinca, setRecibosPorFinca] = useState([])
    const [mensaje, setMensaje] = useState('Buscar finca')
    const [fincaSelect, setFincaSelect] = useState('');
    const [mesSelect, setMesSelect] = useState('');
    const [annioSelect, setAnnioSelect] = useState('')
    const [propietariosPorFinca, setPropietariosPorFinca] = useState([])

    console.log(recibos)
    const buscarReciboPorFinca = (annioSelect) => {
        console.log(fincaSelect)
        console.log(mesSelect)
        console.log(annioSelect)
        const reciboEncontrado = recibos.filter(recibo => recibo.Finca === fincaSelect && recibo.Mes === mesSelect && recibo.Year === annioSelect)
        console.log('recibos encontrado >>> ', reciboEncontrado)
        setRecibosPorFinca(reciboEncontrado)
        setMensaje('No hay Recibos')
    }

    
    const buscarPropietarioPorFinca = (finca_select) => {
        console.log('Fincaaaaaa: ', finca_select)
        const propietariosEncontrado = propietarios.filter(propietario => propietario.Finca === finca_select)
        console.log(propietariosEncontrado)
        setPropietariosPorFinca(propietariosEncontrado)
        console.log('propietarios por finca', propietariosPorFinca)
    }


    useEffect(() => {
        console.log('entro a useEffect getRecibos')
        getRecibos();
        console.log(recibos)

    }, []);

    return (
        <div>
            <div className='container-fluid' >
                <div className='row'>
                    <div className='col-xs-3 col-sm-3'>
                        <Regresar
                            ruta='home' />
                    </div>
                    <div className='col-xs-6 col-sm-6'>
                        <form className='form-propietarios'>
                            <div className='autocomplete-wrapper d-flex justify-content-center'>
                                <h2 className='h2-propietario'>Finca: </h2>
                                <div className='input-select mb-3'>
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
                                <h2 className='h2-propietario'>Año: </h2>
                                <div className='input-select mb-3'>
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
                            <div className='autocomplete-wrapper d-flex justify-content-center'>
                                <button type="button" className="btn btn-guardar" onClick={()=>buscarReciboPorFinca(annioSelect)}>
                                    Buscar
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className='col-xs-6 col-sm-3 mt-0 mb-2'>
                        <div className='container mt-4 d-flex justify-content-center'>
                            <Link to="/Videofincas/recibo"
                                state={{ listafincas: listafincas, recibosPorFinca: recibosPorFinca }}>
                                <button type="button" className="btn btn-guardar">
                                    Agregar
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            <div className='container-fluid ' >
                <div className='col-12 pb-4 text-center'>

                    {recibosPorFinca.length === 0 ? <h1>{mensaje}</h1> : (
                        <table className="table table-primary table-striped">
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
                                    <ItemRecibo key={recibo._id} {...recibo} contador={contador} recibo={recibo} listafincas={listafincas} recibosPorFinca={recibosPorFinca} setRecibosPorFinca={setRecibosPorFinca} getRecibos={getRecibos} propietariosPorFinca={propietariosPorFinca}/>
                                ))
                                }

                            </tbody>

                        </table>
                    )

                    }


                </div>



            </div>
        </div>
    )
}
