import Seccion from "../componentes/Seccion"
import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import { useState } from "react";
import Regresar from "../componentes/Regresar";
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
export const VisualizarRecibo = () => {

    const location = useLocation();
    const reciboRecuperado = location.state.recibo;
    const listaFincas = location.state.listafincas;
    const listaSecciones = reciboRecuperado.Seccion;
    const navigate = useNavigate()
    console.log(reciboRecuperado)
    console.log(listaSecciones)
    const [fincaRecuperado, setFincaRecuperado] = useState(reciboRecuperado.Finca)
    const [mesRecuperado, setMesRecuperado] = useState(reciboRecuperado.Mes)
    const [annioRecuperado, setAnnioRecuperado] = useState(reciboRecuperado.Year)
    console.log(listaFincas)
    console.log(fincaRecuperado)
    console.log(mesRecuperado)
    console.log(annioRecuperado)
    const obtenerLabelDeLaFincaSeleccionada = listaFincas.find(f => f._id === fincaRecuperado).Nombre
    const obtenerLabelMes = meses.find(m => m.id === mesRecuperado).mes
    console.log('obtener label mes', obtenerLabelMes)

    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <div className='col-xs-3 col-sm-3 mt-4'><Regresar
                        ruta='recibos'/></div>
                    <div>
                        <form className='form-propietarios d-flex'>
                            <div className='justify-content-center'>
                                <h2 className='h2-propietario'>Finca: </h2>
                                <div className='input-select mb-4 text-center'>
                                    <Select
                                        onChange={
                                            (finca_seleccion) => {
                                            
                                                console.log(finca_seleccion.value)
                                                setFincaRecuperado(finca_seleccion.value)
                                            }
                                        }
                                        options={listaFincas?.map(sup => ({ value: sup._id, label: sup.Nombre }.disabled))}
                                        defaultValue={{ label: obtenerLabelDeLaFincaSeleccionada, value: fincaRecuperado }}
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
                                                /*  console.log(mes_seleccion.value)
                                                 setMesSelect(mes_seleccion.value) */
                                                /*  setFincaSelect(finca_seleccion.value) */
                                                console.log(mes_seleccion.value)
                                                setMesRecuperado(mes_seleccion.value)
                                            }
                                        }
                                        options={meses?.map(m => ({ label: m.mes, value: m.id }.disabled))}
                                        defaultValue={{ label: obtenerLabelMes, value: mesRecuperado }}
                                    />
                                </div>
                            </div>
                            <div className='justify-content-center'>
                                <h2 className='h2-propietario'>Año: </h2>
                                <div className='input-select mb-4 text-center'>
                                    <Select
                                        onChange={
                                            (anio_seleccion) => {
                                                /*  setFincaSelect(finca_seleccion.value) */
                                                /* setAnnioSelect(tipo_seleccion.value) */
                                                console.log(anio_seleccion.value)
                                                setAnnioRecuperado(anio_seleccion.value)
                                            }
                                        }
                                        options={years?.map(year => ({ label: year, value: year }.disabled))}
                                        defaultValue={{ label: annioRecuperado, value: annioRecuperado }}
                                    />
                                </div>
                            </div>
                        </form>
                        
                    </div>


                    <div className="container container-fluid">
                        <div className='contenedor-secciones mt-2'>
                            {
                                listaSecciones?.map((seccion) =>
                                    <Seccion
                                        key={seccion.ID_Seccion}
                                        {...seccion}
                                        seccion={seccion}
                                        listaSecciones={listaSecciones}
                                        visualizarReciboSeccion={true}
                                        visualizarReciboSubseccion={true}
                                    />
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
