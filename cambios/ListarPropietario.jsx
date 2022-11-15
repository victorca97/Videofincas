import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Regresar from '../componentes/Regresar'
import GetURLAPI from '../utilidades/parametros';
import { ItemPropietario } from './ItemPropietario';
import axios from '../api/axios';

import '../App.css';
import '../estilos/FormPropietario.css'
import ReactSelect from 'react-select';

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
        setMensaje('No hay finca')
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
        <div className='col-12 pb-4'>

                            {propietariosPorFinca.length == 0 ? <h1>{mensaje}</h1> : (
                                propietariosPorFinca?.map((pro) => (
                                    <ItemPropietario key={pro._id} {...pro} />
                                ))
                            )

                            }
                            <table class="table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombres y Apellidos</th>
                                        <th scope="col">Departamentos</th>
                                        <th scope="col">Porcentaje</th>
                                        <th scope="col">Estacionamientos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>
                                            <tbody>
                                                <tr>
                                                    <td>203</td>
                                                </tr>
                                                <tr>
                                                    <td>204</td>
                                                </tr>

                                            </tbody>
                                        </td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>
 
        </div>  
                        

        </div>

    )
}
