
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import GetURLAPI from '../utilidades/parametros';
import { useEffect } from 'react'
const url_base = GetURLAPI()

export const ItemPropietario = ({ pro, listafincas, propietariosPorFinca, setPropietariosPorFinca, getPropietarios, contador, setMessage, setShowAlert }) => {

        const { _id, Nombres_y_Apellidos, Departamentos, Estacionamientos, Numero_deposito } = pro;

        const eliminarPropietario = (id) => {

                const data_DELETE = {
                        "_id": id,
                        "Nombres_y_Apellidos": Nombres_y_Apellidos
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
                        <td>{Nombres_y_Apellidos}</td>

                        {Departamentos.map((departamento, id) => (
                                <Departamento key={id} departamento={departamento} />

                        ))}

                        {
                                Estacionamientos.map((estacionamiento, id) => (
                                        <td key={id}>{estacionamiento.Numero_Estacionamiento}</td>
                                ))
                        }

                        <td>{Numero_deposito}</td>
                        
                        {Departamentos.map((departamento, id) => (
                                <Participacion key={id} departamento={departamento} />

                        ))}




                        <td className="d-flex">

                                <Link
                                        to={`/Videofincas/propietarios/${_id}`}
                                        state={{ pro, listafincas }}>
                                        <button type="button" className="btn btn-warning mr-3">Editar</button>
                                </Link>
                                <button type="button" className="btn btn-danger" onClick={() => eliminarPropietario(_id)}>Eliminar</button>

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