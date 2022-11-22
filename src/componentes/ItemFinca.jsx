import { Link } from "react-router-dom"
import GetURLAPI from "../utilidades/parametros"
import axios from '../api/axios';

const url_base = GetURLAPI()

export const ItemFinca = ({ finca, getFincas, _id, Nombre, Direccion, contador }) => {

    const eliminarFinca = (id) => {

        const data_DELETE = {
            "_id": id,
            "Nombre": Nombre
        }

        const URL = url_base + "finca"
        console.log(data_DELETE)
        try {
            axios.delete(URL, { data: data_DELETE }).then(
                res => {

                    console.log('eliminado')
                    alert(res.data.message)
                    getFincas()
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
                <button type="button" className="btn btn-danger" onClick={() => eliminarFinca(_id)}>Eliminar</button>

            </td>
        </tr>
    )
}
