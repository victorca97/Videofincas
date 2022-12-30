
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import GetURLAPI from '../utilidades/parametros';
import { useEffect } from 'react'
const url_base = GetURLAPI()

export const ItemPropietario = ({ pro, listafincas, propietariosPorFinca, setPropietariosPorFinca, getPropietarios, contador, setMessage, setShowAlert }) => {

        const { id, nombres_y_apellidos, numero_departamento, numero_estacionamiento, numero_deposito} = pro;

        const eliminarPropietario = (id) => {

                const data_DELETE = {
                        "_id": id,
                        "nombres_y_apellidos": nombres_y_apellidos
                }

                const URL = url_base + "propietario"
                try {
                        axios.delete(URL, { data: data_DELETE }).then(
                                res => {

                                        setMessage(res.data.mensaje)
                                        setShowAlert(true)
                                        actualizarTablaEliminada(id)

                                }
                        )

                }
                catch (error) {
                        alert("Hubo error en el servidor")
                        console.log(error)
                }
        }

        const actualizarTablaEliminada = (id) => {
                const tablaActualizada = propietariosPorFinca?.filter(pro => pro._id !== id)
                setPropietariosPorFinca(tablaActualizada)
        }

        useEffect(() => {

                getPropietarios()
        }, [])


        return (

                <tr>
                        <th scope="row">{contador + 1}</th>
                        <td>{nombres_y_apellidos}</td>
                        <td>{numero_departamento}</td>
                        <td>{numero_estacionamiento}</td>
                        <td>{numero_deposito}</td>
                        <td className="d-flex">

                                <Link
                                        to={`/Videofincas/propietarios/${id}`}
                                        state={{ pro, listafincas }}>
                                        <button type="button" className="btn btn-warning mr-3">Editar</button>
                                </Link>
                                <button type="button" className="btn btn-danger" onClick={() => eliminarPropietario(id)}>Eliminar</button>

                        </td>


                </tr >



        )
}

const Departamento = ({ departamento }) => {
        return (

                <td>{departamento.ID_Departamentos}</td>

        )
}

const Participacion = ({ departamento }) => {
        return (<td>{departamento.Porcentaje_Participacion}</td>)
}