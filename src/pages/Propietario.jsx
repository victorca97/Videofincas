import React, { useContext, useState } from 'react';
import Regresar from '../componentes/Regresar';
import GetURLAPI from '../utilidades/parametros';
import '../App.css';
import '../estilos/FormPropietario.css';
import '../estilos/TipoDoc.css';
import Select from 'react-select';
import { useLocation } from 'react-router-dom';
import { doc } from '../datos/datosSelectores';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function Propietario() {

    const location = useLocation();
    const propietariosPorFinca = location.state.propietariosPorFinca;
    const { user } = useContext(AuthContext)

    const [nombres, setNombres] = useState("")
    const [listatdoc, setListatdoc] = useState(doc)
    const [tdocSelect, setTdocSelect] = useState("")
    const [ndoc, setNdoc] = useState("")
    const [correo, setCorreo] = useState("")
    const [ncel, setNcel] = useState()
    const [dep, setDep] = useState("")
    const [estacionamiento, setEstacionamiento] = useState("")
    const [deposito, setDeposito] = useState("")
    const [part, setPart] = useState(0)
    const [fincaSelect, setFincaSelect] = useState("")
    const [data, setData] = useState({})
    const [showAlert, setShowAlert] = useState(false)
    const [message, setMessage] = useState('')
    const [error, setError] = useState('warning')
    const [inputError, setInputError] = useState(false)
    const [casosInputError, setCasosInputError] = useState('')

    function handlesubmit(e) {
        e.preventDefault()
    }

    function enviarPropietario() {

        const data_POST = {
            "id_finca": fincaSelect,
            "nombres_y_apellidos": nombres,
            "tipodocumento": tdocSelect,
            "nro_documento": ndoc,
            "correo": correo,
            "telefono": ncel,
            "numero_deposito":deposito,
            "numero_departamento": dep,
            "numero_estacionamiento": estacionamiento
        }

        console.log(data_POST)

        const url_base = GetURLAPI()
        const URL = url_base + "propietario"
        try {
            axios.post(URL, data_POST).then(
                res => {
                    console.log(res.data)
                    setData(res.data)
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
                    if (res.data.status === 200) {
                        console.log('entra al status 200')
                        setMessage(res.data.mensaje)
                        setShowAlert(true)
                        setError('primary')
                        setNombres("")
                        setTdocSelect("")
                        setNdoc("")
                        setCorreo("")
                        setNcel("")
                        setFincaSelect("")
                        setDep('')
                        setEstacionamiento('')
                        setDeposito('')
                        setPart(0)
                    }
                    if (res.data.status === 201) {
                        setMessage(res.data.mensaje)
                        setShowAlert(true)
                        setError('warning')
                    }
                    if (res.data.status === 400) {
                        console.log('entro al else', res)
                        setMessage(res.data.mensaje)
                        setShowAlert(true)
                        setError('warning')
                    }
                }
            )
        }
        catch (error) {
            alert("Hubo error en el servidor")
        }

    }

    const verificarDni = (nro_dni)=> {
        const data_POST = {
            "user": user.username,
            "nro_documento": nro_dni,
        }
        console.log(data_POST)
        const url_base = GetURLAPI()
        const URL = url_base + "buscar_propietario"
        axios.post(URL, data_POST).then(
            res => {
                console.log(res)
                setNombres(res.data[0].nombres_y_apellidos)
                setCorreo(res.data[0].correo)
                setNcel(res.data[0].telefono)
            }
        )
    }

    return (
        <>
            <div className='container-fluid' >
                <div className='row'>
                    <div className='col-3 mt-4'>
                        <Regresar
                            ruta='propietarios' />
                    </div>
                    <div className='col-9'>
                        <form className="form-propietarios pb-0" onSubmit={handlesubmit}>
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
                                <div className='input-select col-4'>
                                    <Select
                                        onChange={
                                            (seleccion) => {
                                                setFincaSelect(seleccion.value)
                                            }
                                        }
                                        options={location.state.listafincas?.map(sup => ({ label: sup.nombre, value: sup.id }))}
                                    /></div>

                            </div>

                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-3 col-form-label">Departamento :</label>
                                <input type='text'
                                    className='form-control col-4'
                                    placeholder="Departamento "
                                    autoComplete="off"
                                    name={"dep"}
                                    value={dep}
                                    onChange={e => setDep(e.target.value)}
                                    style={
                                        (inputError & (casosInputError === 'departamento' || casosInputError === 'departamento y deposito' || casosInputError === 'estacionamiento y departameto' || casosInputError === 'todos')) ? {
                                            borderColor: 'red'
                                        } : {}
                                    } />

                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-3 col-form-label">Estacionamiento:</label>
                                <input type='text'
                                    className='form-control col-4'
                                    autoComplete="off"
                                    placeholder="Estacionamiento "
                                    name={"estacionamiento"}
                                    value={estacionamiento}
                                    onChange={e => setEstacionamiento(e.target.value)}
                                    style={
                                        (inputError & (casosInputError === 'estacionamiento' || casosInputError === 'estacionamiento y departameto' || casosInputError === 'estacionamiento y deposito' || casosInputError === 'todos')) ? {
                                            borderColor: 'red'
                                        } : {}
                                    } />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-3 col-form-label">Nro. de Depósito:</label>
                                <input type='text'
                                    className='form-control col-4'
                                    autoComplete="off"
                                    placeholder="Depósito "
                                    name={"Numero_deposito"}
                                    value={deposito}
                                    onChange={e => setDeposito(e.target.value)}
                                    style={
                                        (inputError & (casosInputError === 'deposito' || casosInputError === 'departamento y deposito' || casosInputError === 'estacionamiento y deposito' || casosInputError === 'todos')) ? {
                                            borderColor: 'red'
                                        } : {}
                                    } />
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
                                <label htmlFor="exampleFormControlSelect1" className="col-3 col-form-label">Tipo:</label>
                                <div className='input-select col-4'>
                                    <Select
                                        onChange={
                                            (seleccion) => {
                                                setTdocSelect(seleccion.value)
                                            }
                                        }
                                        options={
                                            listatdoc.map(sup => ({ label: sup.name, value: sup.id })
                                            )
                                        }

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
                                <button className='btn btn-primary' onClick={()=>verificarDni(ndoc)}>Verificar</button>
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
                                    autoComplete="off"
                                    placeholder="Nro. de Celular "
                                    name={"ncel"}
                                    value={ncel}
                                    onChange={e => setNcel(e.target.value)} />
                            </div>


                        </form>
                        <div className='contenedor-btn-guardar' onClick={() => enviarPropietario()}>
                            <button className='btn-guardar'>GUARDAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Propietario;