import React, { useState, useEffect } from 'react';
import Regresar from '../componentes/Regresar';
import GetURLAPI from '../utilidades/parametros';
import '../App.css';
import '../estilos/FormPropietario.css';
import '../estilos/TipoDoc.css';
import Select from 'react-select';
import { useLocation } from 'react-router-dom';

import axios from 'axios';
import { doc } from '../datos/datosSelectores';


function UpdatePropietario() {

    const location = useLocation();
    const propietarioRecuperado = location.state.pro;
    const listaFincas = location.state.listafincas

    const {
        Finca,
        Nombres_y_Apellidos,
        Tipo_Documento,
        Nro_Documento,
        Correo,
        Telefono,
        Departamentos,
        Estacionamientos,
        Numero_deposito
    } = propietarioRecuperado;

    const [nombres, setNombres] = useState(Nombres_y_Apellidos)
    const [listatdoc, setListatdoc] = useState(doc)
    const [tdocSelect, setTdocSelect] = useState(Tipo_Documento)
    const [ndoc, setNdoc] = useState(Nro_Documento)
    const [correo, setCorreo] = useState(Correo)
    const [ncel, setNcel] = useState(Telefono)
    const [dep, setDep] = useState(Departamentos[0].ID_Departamentos)
    const [estacionamiento, setEstacionamiento] = useState(Estacionamientos[0].Numero_Estacionamiento)
    const [deposito, setDeposito] = useState(Numero_deposito)
    const [part, setPart] = useState(Departamentos[0].Porcentaje_Participacion)
    const [fincaSelect, setFincaSelect] = useState(Finca)
    const [data, setData] = useState({})
    const obtenerLabelDelTipoDocumentoSeleccionado = doc.find(d => d.id === Tipo_Documento).name
    const obtenerLabelDeLaFincaSeleccionada = listaFincas.find(f => f._id === Finca).Nombre
    const [showAlert, setShowAlert] = useState(false)
    const [message, setMessage] = useState('')
    const [error, setError] = useState('warning')
    const [inputError, setInputError] = useState(false)
    const [casosInputError, setCasosInputError] = useState('')

    function handlesubmit(e) {
        e.preventDefault()
    }

    function updatePropietario() {


        const data_PUT = {
            "_id": tdocSelect + ndoc,
            "Finca": fincaSelect,
            "Nombres_y_Apellidos": nombres,
            "Tipo_Documento": tdocSelect,
            "Nro_Documento": ndoc,
            "Correo": correo,
            "Telefono": ncel,
            "Departamentos": [{ "ID_Departamentos": dep, "Porcentaje_Participacion": part }],
            "Estacionamientos": [{ "Numero_Estacionamiento": estacionamiento }],
            "Numero_deposito": deposito
        }
        console.log('data_PUT', data_PUT)
        const url_base = GetURLAPI()
        const URL = url_base + "propietarios"
        try {

            axios.put(URL, data_PUT).then(
                res => {
                    
                    setData(res.data)
                    console.log(res.data)
                    switch (res.data.input_error) {
                        case 'departamento':
                            setInputError(res.data.error)
                            setCasosInputError('departamento')
                            break;
                        case 'estacionamiento':
                            setInputError(res.data.error)
                            setCasosInputError('estacionamiento')
                            break;
                        case 'deposito':
                            setInputError(res.data.error)
                            setCasosInputError('deposito')
                            break;
                        case 'departamento y deposito':
                            setInputError(res.data.error)
                            setCasosInputError('departamento y deposito')
                            break;
                        case 'estacionamiento y departameto':
                            setInputError(res.data.error)
                            setCasosInputError('estacionamiento y departameto')
                            break;
                        case 'estacionamiento y deposito':
                            setInputError(res.data.error)
                            setCasosInputError('estacionamiento y deposito')
                            break;
                        case 'todos':
                            setInputError(res.data.error)
                            setCasosInputError('todos')
                            break;
                        default:
                            break;
                    }

                }
            )

        }
        catch (error) {
            console.log("Entro al catch")
            alert("Hubo error en el servidor")
            console.log(URL)
            console.log(error)
        }

    }
    useEffect(() => {

        if (data.status === 200) {
            /*  alert(data.mensaje) */
            setShowAlert(true)
            setMessage(data.mensaje)
            setError('primary')
            setInputError(false)
            /* navigate(-1) */
        }
        if (data.status === 201) {
            setShowAlert(true)
            setMessage(data.mensaje)
            setError('warning')


        }
        if (data.status === 400) {
            setShowAlert(true)
            setMessage(data.mensaje)
            setError('warning')
        }
    }, [data])

    return (
        <>
            <div className='container-fluid' >
                <div className='row'>
                    <div className='col-3 mt-4'>
                        <Regresar
                            ruta='propietarios' />
                    </div>
                   
                    <div className='col-9'>
                        <form className="form-propietarios" onSubmit={handlesubmit}>
                            <div className="form-group row">
                                {
                                    showAlert && (
                                        <div className={`alert alert-${error} alert-dismissible fade show`} role="alert">
                                            <strong>{message}</strong>
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)}>
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    )
                                }

                            </div>


                            <div className="form-group row">
                                <label htmlFor="exampleFormControlSelect1" className="col-3 col-form-label">Finca:</label>
                                <div className='input-select col-4' >
                                    <Select d
                                        onChange={
                                            (seleccion) => {
                                                setFincaSelect(seleccion.value)
                                            }
                                        }
                                        options={listaFincas?.map(sup => ({ label: sup.Nombre, value: sup._id }.disabled))}
                                        defaultValue={{ label: obtenerLabelDeLaFincaSeleccionada, value: fincaSelect }}

                                    /></div>

                            </div>

                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-3 col-form-label">Departamento :</label>
                                <input type='text'
                                    className='form-control col-4'
                                    autoComplete="off"
                                    placeholder="Departamento "
                                    name={"dep"}
                                    value={dep}
                                    onChange={e => setDep(e.target.value)}
                                    style={
                                        (inputError & (casosInputError==='departamento' || casosInputError==='departamento y deposito' || casosInputError==='estacionamiento y departameto' || casosInputError==='todos') ) ? {
                                            borderColor: 'red'
                                        } : {}
                                    }
                                />
                            </div>

                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-3 col-form-label">Estacionamiento:</label>
                                <input type='text'
                                    className='form-control col-4'
                                    autoComplete="off"
                                    placeholder="Estacionamiento "
                                    style={
                                        (inputError & (casosInputError==='estacionamiento' || casosInputError==='estacionamiento y departameto' || casosInputError==='estacionamiento y deposito' || casosInputError==='todos') )? {
                                            borderColor: 'red'
                                        } : {}
                                    }
                                    name={"estacionamiento"}
                                    value={estacionamiento}
                                    onChange={e => setEstacionamiento(e.target.value)} />
                            </div>

                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-3 col-form-label">Nro. de Depósito:</label>
                                <input type='text'
                                    className='form-control col-4'
                                    autoComplete="off"
                                    placeholder="Depósito "
                                    style={
                                        (inputError & (casosInputError==='deposito'|| casosInputError==='departamento y deposito' || casosInputError==='estacionamiento y deposito' || casosInputError==='todos'))? {
                                            borderColor: 'red'
                                        } : {}
                                    }
                                    name={"Numero_deposito"}
                                    value={deposito}
                                    onChange={e => setDeposito(e.target.value)} />
                            </div>

                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-3 col-form-label">Participación (%):</label>
                                <input type='text'
                                    className='form-control col-4'
                                    autoComplete="off"
                                    placeholder="Participación(%) "
                                    name={"part"}
                                    value={part}
                                    onChange={e => setPart(e.target.value)} />
                            </div>

                            <div className="form-group row">
                                <label htmlFor="exampleFormControlSelect1" className="col-3 col-form-label">Tipo de Documento:</label>
                                <div className='input-select col-4'>
                                    <Select
                                        onChange={
                                            (seleccion) => {
                                                setTdocSelect(seleccion.value)
                                            }
                                        }
                                        options={listatdoc.map(sup => ({ label: sup.name, value: sup.id }.disabled))}
                                        defaultValue={{ label: obtenerLabelDelTipoDocumentoSeleccionado, value: tdocSelect }}
                                    />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-3 col-form-label">Nro. de Documento :</label>
                                <input type='text'
                                    className='form-control col-4'
                                    autoComplete="off"
                                    placeholder="Nro. de Documento "
                                    name={"ndoc"}
                                    value={ndoc}
                                    onChange={e => setNdoc(e.target.value)} />
                            </div>

                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-3 col-form-label">Nombres y Apellidos:</label>
                                <input type='text'
                                    className='form-control col-4'
                                    autoComplete="off"
                                    placeholder="Nombre y Apellido "
                                    name={"nombres"}
                                    value={nombres}
                                    onChange={e => {
                                        setNombres(e.target.value)
                                    }
                                    } />
                            </div>

                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-3 col-form-label">Correo Electrónico:</label>
                                <input type='text'
                                    className='form-control col-4'
                                    autoComplete="off"
                                    placeholder="Correo Electrónico "
                                    name={"correo"}
                                    value={correo}
                                    onChange={e => setCorreo(e.target.value)} />
                            </div>

                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-3 col-form-label">Nro. de Celular :</label>
                                <input type='text'
                                    className='form-control col-4'
                                    placeholder="Nro. de Celular "
                                    name={"ncel"}
                                    value={ncel}
                                    onChange={e => setNcel(e.target.value)} />
                            </div>

                        </form>
                        <div className='d-flex justify-content-center mb-5' onClick={() => updatePropietario()}>
                            <button className='nb'> Actualizar
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdatePropietario;