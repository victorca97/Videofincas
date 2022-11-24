import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import GetURLAPI from '../utilidades/parametros';
import axios from '../api/axios';

import '../App.css';
import '../estilos/FormPropietario.css'
import ReactSelect from 'react-select';
import Regresar from '../componentes/Regresar';
import { ItemPropietario } from '../componentes/ItemPropietario';

const encabezadoCss = {
    background: '#294A98',
    color: 'white'
}

export const ListarPropietario = ({ listafincas, propietarios, getPropietarios}) => {

    //const [propietarios, setPropietarios] = useState([])
    const [propietariosPorFinca, setPropietariosPorFinca] = useState([])

    /* const [listafincas, setListafincas] = useState([]) */
    const [mensaje, setMensaje] = useState('Buscar finca')

    /* const getPropietarios = async () => {
        const url_base = GetURLAPI()
        const resp = await axios.get(url_base + 'propietarios')
        console.log(resp.data)
        setPropietarios(resp.data);
    }; */

    const buscarPropietarioPorFinca = (id) => {
        const propietariosEncontrado = propietarios.filter(propietario => propietario.Finca === id)
        setPropietariosPorFinca(propietariosEncontrado)
        setMensaje('No hay Propietarios')
    }

    /* useEffect(() => {
        console.log('entro a useEffect getpropietarios')
        getPropietarios();
    }, []);  */

    return (
        <div>
            <div className='container-fluid' >
                <div className='row'>
                    <div className='col-xs-3 col-sm-3'>
                        <Regresar
                            ruta='home' />
                    </div>
                    <div className='col-xs-6 col-sm-6'>
                        <form className='form-propietarios d-flex justify-content-center'>
                            <h2 className='h2-propietario'> Finca: </h2>
                            <div className='input-select mb-3'>
                                <ReactSelect
                                    onChange={
                                        (seleccion) => {

                                            buscarPropietarioPorFinca(seleccion.value)
                                        }
                                    }
                                    options={listafincas?.map(sup => ({ label: sup.Nombre, value: sup._id }))}
                                />
                            </div>




                        </form>
                    </div>

                    <div className='col-xs-6 col-sm-3 mt-0 mb-2'>
                        <div className='container mt-4 d-flex justify-content-center'>
                            <Link to="/Videofincas/propietario"
                                state={{ listafincas: listafincas, propietariosPorFinca: propietariosPorFinca }}>
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

                    {propietariosPorFinca.length == 0 ? <h1>{mensaje}</h1> : (
                        <table className="table table-primary table-striped">
                            <thead>
                                <tr style={encabezadoCss}>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombres y Apellidos</th>
                                    <th scope="col">N° Departamento</th>
                                    <th scope='col'>% de participaciones</th>
                                    <th scope="col">N° Estacionamiento</th>
                                    <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {propietariosPorFinca?.map((pro, contador) => (
                                    <ItemPropietario key={pro._id} {...pro} contador={contador} pro={pro} listafincas={listafincas} propietariosPorFinca={propietariosPorFinca} setPropietariosPorFinca={setPropietariosPorFinca} getPropietarios={getPropietarios}/>
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