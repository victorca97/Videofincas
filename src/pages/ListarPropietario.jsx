import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import '../estilos/FormPropietario.css'
import ReactSelect from 'react-select';
import Regresar from '../componentes/Regresar';
import { ItemPropietario } from '../componentes/ItemPropietario';

const encabezadoCss = {
    background: '#294A98',
    color: 'white'
}

export const ListarPropietario = ({ listafincas, propietarios, getPropietarios }) => {
    console.log('listafincas >>>', listafincas)
    const [propietariosPorFinca, setPropietariosPorFinca] = useState([])
    const [mensaje, setMensaje] = useState('Buscar finca')
    const [showAlert, setShowAlert] = useState(false)
    const [message, setMessage] = useState('')

    const buscarPropietarioPorFinca = (id) => {
        const propietariosEncontrado = propietarios.filter(propietario => propietario.Finca === id)
        setPropietariosPorFinca(propietariosEncontrado)
        console.log(propietariosEncontrado)
        setMensaje('No hay Propietarios')
    }

    const total_porcentaje_participacion = (id) => {
        const fincaEncontrada = listafincas.find(f => f._id === id)
        console.log(fincaEncontrada)
    }

    useEffect(() => {

        getPropietarios();
    }, []);

    return (
        <div>
            <div className='container-fluid' >
                <div className='row'>


                    <div className='col-xs-12 col-sm-12'>

                        <form className='form-propietarios d-flex justify-content-center'>
                            <h2 className='h2-propietario'> Finca: </h2>
                            <div className='input-select mb-3'>
                                <ReactSelect
                                    onChange={
                                        (seleccion) => {

                                            buscarPropietarioPorFinca(seleccion.value)
                                            total_porcentaje_participacion(seleccion.value)
                                        }
                                    }
                                    options={listafincas?.map(sup => ({ label: sup.Nombre, value: sup._id }))}
                                />
                            </div>


                        </form>
                    </div>


                </div>

            </div>

            <div className='container-fluid ' >
                <div>

                </div>
                <div className='col-12 pb-2 text-center'>
                    {
                        showAlert && (
                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong>{message}</strong>
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        )
                    }

                    {propietariosPorFinca.length != 0 && (
                        <table className="table table-primary table-striped">
                            <thead>
                                <tr style={encabezadoCss}>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombres y Apellidos</th>
                                    <th scope="col">N° Departamento</th>
                                    <th scope="col">N° Estacionamiento</th>
                                    <th scope='col'>% de participaciones</th>
                                    <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {propietariosPorFinca?.map((pro, contador) => (
                                    <ItemPropietario key={pro._id} {...pro} contador={contador} pro={pro} listafincas={listafincas} propietariosPorFinca={propietariosPorFinca} setPropietariosPorFinca={setPropietariosPorFinca} getPropietarios={getPropietarios} setShowAlert={setShowAlert} setMessage={setMessage} />
                                ))
                                }

                            </tbody>

                        </table>
                    )

                    }


                </div>

            </div>
            
            <div className='d-flex justify-content-center align-items-center mb-2'>

<Regresar
    ruta='home' />
<div className='ml-4 mt-2'>
    <Link to="/Videofincas/propietario"
        state={{ listafincas: listafincas, propietariosPorFinca: propietariosPorFinca }}>
        <button type="button" className="btn btn-guardar">
            Agregar
        </button>
    </Link>
</div>
</div>


        </div>

    )
}