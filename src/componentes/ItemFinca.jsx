import { Link } from "react-router-dom"
import GetURLAPI from "../utilidades/parametros"
import axios from '../api/axios';

const url_base = GetURLAPI()

export const ItemFinca = ({ finca, _id, Nombre, Direccion, contador }) => {

    const eliminarFinca = () => {

        const data_DELETE = {
            "_id": _id
        }

        const URL = url_base + "finca"
        console.log(data_DELETE)
        try {
            axios.delete(URL, { data: data_DELETE }).then(
                res => {

                    console.log('eliminado')
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
            <td>{Nombre}</td>
            <td>{Direccion}</td>
            <td className="d-flex">

                <Link
                    to={`/Videofincas/fincas/${_id}`}
                    state={{ finca }}>
                    <button type="button" className="btn btn-warning mr-3">Editar</button>
                </Link>
                <button type="button" className="btn btn-danger" onClick={eliminarFinca}>Eliminar</button>

            </td>
        </tr>
    )
}
