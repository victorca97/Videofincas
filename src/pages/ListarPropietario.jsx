import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Regresar from '../componentes/Regresar'
import GetURLAPI from '../utilidades/parametros';
import { ItemPropietario } from './ItemPropietario';
import axios from '../api/axios';

import '../App.css';
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
        <div className='row'>

            <Regresar
                ruta='home' />

            <form className='form-propietarios col-6'>
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

                <div className='col-12'>
                    {propietariosPorFinca.length == 0 ? <h1>{mensaje}</h1> :

                        (<table class="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombres y Apellidos</th>
                                    <th scope="col">N° Departamentos</th>
                                    <th scope="col">N° Estacionamientos</th>
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


            </form>

            <div className='mt-3'>
                <Link id="link-propietario" to="/Videofincas/propietario"
                    state={{ listafincas: listafincas }}>Agregar</Link>
            </div>

        </div>
    )
}
