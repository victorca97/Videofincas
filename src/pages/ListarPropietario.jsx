import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Regresar from '../componentes/Regresar'
import GetURLAPI from '../utilidades/parametros';
import { ItemPropietario } from './ItemPropietario';
import axios from '../api/axios';

import '../App.css';
import '../estilos/FormPropietario.css'
import ReactSelect from 'react-select';

const encabezadoCss={
    background: '#294A98',
    color: 'white'
}

export const ListarPropietario = () => {

    console.log(':C')
    const [propietarios, setPropietarios] = useState([])
    const [propietariosPorFinca, setPropietariosPorFinca] = useState([])
    const [listafincas, setListafincas] = useState([])
    const [mensaje, setMensaje] = useState('Buscar finca')

    useEffect(() => {
        getFincas();
    }, []);


    const getPropietarios = async () => {
        const url_base = GetURLAPI()
        const resp = await axios.get(url_base + 'propietarios')
        console.log(resp.data)
        setPropietarios(resp.data);
    };

    const buscarPropietarioPorFinca = (id) => {
        const propietarioEncontrado = propietarios.filter(propietario => propietario.Finca === id)

        setPropietariosPorFinca(propietarioEncontrado)
        setMensaje('No hay Propietarios')
    }



    const getFincas = async () => {
        const url_base = GetURLAPI()
        const resp = await axios.get(url_base + 'finca')
        console.log(resp.data)
        setListafincas(resp.data);
    };

    useEffect(() => {
        getPropietarios();

    }, []);

    return (
        <div>
            <div className='container-fluid' >
                <div className='row'>
                    <div className='col'>
                        <Regresar
                            ruta='home' />
                    </div>
                    <div className='col-6'>
                        <form className='form-propietarios '>
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

                    <div className='col text-center' id='lateral-derecho'>
                        <button type="button" class="btn btn-primary regular-button mt-5" id='boton-agregar'>
                            <Link to="/Videofincas/propietario"
                                state={{ listafincas: listafincas }}>Agregar</Link>
                        </button>


                    </div>

                </div>
            </div>

            <div className='container-fluid ' >
                <div className='col-12 pb-4 text-center'>

                    {propietariosPorFinca.length == 0 ? <h1>{mensaje}</h1> : (
                        <table class="table table-primary table-striped">
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
                                    <ItemPropietario key={pro._id} {...pro} contador={contador} />
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