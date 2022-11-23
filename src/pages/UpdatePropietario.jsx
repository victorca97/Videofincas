import React, { useState, useEffect } from 'react';
import Regresar from '../componentes/Regresar';
import GetURLAPI from '../utilidades/parametros';
import '../App.css';
import '../estilos/FormPropietario.css';
import '../estilos/TipoDoc.css';
import Select from 'react-select';
/* import ReactSelect from 'react-select'; */
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

function UpdatePropietario() {

    const location = useLocation();
    const propietarioRecuperado = location.state.pro;
    const listaFincas = location.state.listafincas
    const navigate = useNavigate()

    const {
        _id,
        Finca,
        Nombres_y_Apellidos,
        Tipo_Documento,
        Nro_Documento,
        Correo,
        Telefono,
        Departamentos,
        Estacionamientos
    } = propietarioRecuperado;

    const doc = [
        { id: 'D', name: 'D.N.I.', adress: 'dni' },
        { id: 'CE', name: 'Carnet de Extranjería', adress: 'ce' },
        { id: 'PS', name: 'Nro. Pasaporte', adress: 'passport' }
    ]

    const [nombres, setNombres] = useState(Nombres_y_Apellidos)
    const [listatdoc, setListatdoc] = useState(doc)
    const [tdocSelect, setTdocSelect] = useState(Tipo_Documento)
    const [ndoc, setNdoc] = useState(Nro_Documento)
    const [correo, setCorreo] = useState(Correo)
    const [ncel, setNcel] = useState(Telefono)
    const [dep, setDep] = useState(Departamentos[0].ID_Departamentos)
    const [estacionamiento, setEstacionamiento] = useState(Estacionamientos[0].Numero_Estacionamiento)
    const [part, setPart] = useState(Departamentos[0].Porcentaje_Participacion)
    const [fincaSelect, setFincaSelect] = useState(Finca)
    const [data, setData] = useState({})
    const obtenerLabelDelTipoDocumentoSeleccionado = doc.find(d => d.id === Tipo_Documento).name
    const obtenerLabelDeLaFincaSeleccionada = listaFincas.find(f => f._id === Finca).Nombre


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
        }
        console.log('data_PUT', data_PUT)
        const url_base = GetURLAPI()
        const URL = url_base + "propietarios"
        try {

            axios.put(URL, data_PUT).then(
                res => {
                    console.log(res)
                    setData(res.data)
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

        if (data.status === 201) {
            alert(data.message)
            navigate(-1)
        }
    }, [data])

    return (
        <>
            <div className='container-fluid' >
                <div className='row'>
                    <div className='col-3'>
                        <Regresar
                            ruta='propietarios' />
                    </div>
                    <div className='col-9'>
                        <form className="form-propietarios" onSubmit={handlesubmit}>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-3 col-form-label">Nombres y Apellidos:</label>
                                <input type='text'
                                    className='form-control col-4'
                                    id="inputEmail3"
                                    placeholder="Nombre y Apellido "
                                    name={"nombres"}
                                    value={nombres}
                                    onChange={e => {
                                        setNombres(e.target.value)
                                    }
                                    } />
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
                                        options={listatdoc.map(sup => ({ label: sup.name, value: sup.id }))}
                                        defaultValue={{ label: obtenerLabelDelTipoDocumentoSeleccionado, value: setTdocSelect }}
                                        isOptionDisabled={true}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-3 col-form-label">Nro. de Documento :</label>
                                <input type='text'
                                    className='form-control col-4'
                                    id="inputEmail3"
                                    placeholder="Nro. de Documento "
                                    name={"ndoc"}
                                    value={ndoc}
                                    onChange={e => setNdoc(e.target.value)} />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-3 col-form-label">Correo Electrónico:</label>
                                <input type='text'
                                    className='form-control col-4'
                                    id="inputEmail3"
                                    placeholder="Correo Electrónico "
                                    name={"correo"}
                                    value={correo}
                                    onChange={e => setCorreo(e.target.value)} />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-3 col-form-label">Nro. de Celular :</label>
                                <input type='text'
                                    className='form-control col-4'
                                    id="inputEmail3"
                                    placeholder="Nro. de Celular "
                                    name={"ncel"}
                                    value={ncel}
                                    onChange={e => setNcel(e.target.value)} />
                            </div>

                            <div className="form-group row">
                                <label htmlFor="exampleFormControlSelect1" className="col-3 col-form-label">Finca:</label>
                                <div className='input-select col-4' >
                                    <Select disabled
                                        onChange={
                                            (seleccion) => {
                                                setFincaSelect(seleccion.value)
                                            }
                                        }
                                        options={listaFincas?.map(sup => ({ label: sup.Nombre, value: sup._id }))}
                                        defaultValue={{ label: obtenerLabelDeLaFincaSeleccionada, value: fincaSelect }}

                                    /></div>

                            </div>

                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-3 col-form-label">Departamento :</label>
                                <input type='text'
                                    className='form-control col-4'
                                    id="inputEmail3"
                                    placeholder="Departamento "
                                    name={"dep"}
                                    value={dep}
                                    onChange={e => setDep(e.target.value)} />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-3 col-form-label">Estacionamiento:</label>
                                <input type='text'
                                    className='form-control col-4'
                                    id="inputEmail3"
                                    placeholder="Estacionamiento "
                                    name={"estacionamiento"}
                                    value={estacionamiento}
                                    onChange={e => setEstacionamiento(e.target.value)} />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-3 col-form-label">Participación (%):</label>
                                <input type='text'
                                    className='form-control col-4'
                                    id="inputEmail3"
                                    placeholder="Participación(%) "
                                    name={"part"}
                                    value={part}
                                    onChange={e => setPart(e.target.value)} />
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