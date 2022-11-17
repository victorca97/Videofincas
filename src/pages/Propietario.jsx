import React, { useState  } from 'react';
import Regresar from '../componentes/Regresar';
import GetURLAPI from '../utilidades/parametros';
import '../App.css';
import '../estilos/FormPropietario.css';
import '../estilos/TipoDoc.css';
import Select from 'react-select';
import { useLocation } from 'react-router-dom';

import axios from 'axios';

function Propietario() {

    const location = useLocation();

    const doc = [
        { id: 'D', name: 'D.N.I.', adress: 'dni' },
        { id: 'CE', name: 'Carnet de Extranjería', adress: 'ce' },
        { id: 'PS', name: 'Nro. Pasaporte', adress: 'passport' }
    ]

    const [nombres, setNombres] = useState("")
    const [listatdoc, setListatdoc] = useState(doc)
    const [tdocSelect, setTdocSelect] = useState("")
    const [ndoc, setNdoc] = useState("")
    const [correo, setCorreo] = useState("")
    const [ncel, setNcel] = useState("")
    const [dep, setDep] = useState("")
    const [estacionamiento, setEstacionamiento] = useState("")
    const [part, setPart] = useState(0)
    const [fincaSelect, setFincaSelect] = useState("")


    function handlesubmit(e) {
        e.preventDefault()
    }

    function enviarPropietario() {

        console.log(fincaSelect);
        const data_POST = {
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
        const url_base = GetURLAPI()
        const URL = url_base + "propietario"
        try {
            axios.post(URL, data_POST).then(
                res => {
                    if (res.data.status === 201) {
                        alert(res.data.mensaje)
                        console.log(res)
                        console.log(res.data);
                        setNombres("")
                        setTdocSelect("")
                        setNdoc("")
                        setCorreo("")
                        setNcel("")
                        setFincaSelect("")
                        setDep('')
                        setEstacionamiento('')
                        setPart(0)
                    } else {
                        console.log("Entro al else")
                        console.log(res.data.status)
                        alert(res.data.mensaje)
                        console.log(res.data)
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
        console.log(data_POST)
    }

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
                                <div className='input-select col-4'>
                                    <Select
                                        onChange={
                                            (seleccion) => {
                                                setFincaSelect(seleccion.value)
                                            }
                                        }
                                        options={location.state.listafincas?.map(sup => ({ label: sup.Nombre, value: sup._id }))}
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