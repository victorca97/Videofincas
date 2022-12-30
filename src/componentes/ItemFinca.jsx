import { Link } from "react-router-dom"
import GetURLAPI from "../utilidades/parametros"
import axios from '../api/axios';
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const url_base = GetURLAPI()

export const ItemFinca = ({ finca, getFincas, id, nombre, direccion, contador, setShowEliminar, setMessage }) => {

    const { user } = useContext(AuthContext)


    const eliminarFinca = (id) => {

        const data_DELETE = {
            "id": id,
            "user": user.username,
            "nombre": nombre,
        }

        console.log('data_delete', data_DELETE)

        const URL = url_base + "finca"
        console.log(data_DELETE)
        try {
            axios.delete(URL, { data: data_DELETE }).then(
                res => {
                    getFincas(user.username)
                    setMessage(res.data.mensaje)
                    setShowEliminar(true)
                }
            )

        }
        catch (error) {
            
            alert("Hubo error en el servidor")
            console.log(error)
        } 
    }


    return (
        <tr>
            <th scope="row">{contador + 1}</th>
            <td>{nombre}</td>
            <td>{direccion}</td>
            <td className="d-flex">

                <Link
                    to={`/Videofincas/fincas/${id}`}
                    state={{ finca }}>
                    <button type="button" className="btn btn-warning mr-3">Editar</button>
                </Link>
                <button type="button" className="btn btn-danger" onClick={() => eliminarFinca(id)}>Eliminar</button>

            </td>
        </tr>
    )
}
