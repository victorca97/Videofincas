import { useState, useEffect } from "react";
import axios from "axios";
import GetURLAPI from "../utilidades/parametros";
import { Link } from "react-router-dom";

const url_base = GetURLAPI()

export const ItemRecibo = ({ contador, _id, Finca, Mes, Year, tipo, listafincas }) => {

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    var ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0);

    const [nombreFinca, setNombreFinca] = useState('');
    const [fechaEmision, setFechaEmision] = useState(hoy.toLocaleDateString())
    const [fechaVencimiento, setFechaVencimiento] = useState(ultimoDia.toLocaleDateString())

    const encontrarNombreFinca = () => {
        const finca = listafincas.find(finca => finca._id === Finca)
        console.log('nombre fincaaaa>>', finca.Nombre)
        setNombreFinca(finca.Nombre)
    }

    useEffect(() => {
        encontrarNombreFinca()
    }, [])


    const generarRecibo = async (id) => {

        console.log('fecha final', fechaVencimiento)
        const data_POST = {
            '_id': id,
            'Finca': Finca,
            'tipo': tipo,
            'fecha_emision': fechaEmision,
            'fecha_vencimiento': fechaVencimiento
            /* 'propietarios': propietariosPorFinca */
        }
        console.log(data_POST)
        const res = await axios.post(url_base + `recibos_generar`, data_POST);
        console.log(res)
    }


    return (
        <tr>
            <th scope="row">{contador + 1}</th>
            <td>{nombreFinca}</td>
            <td>{Mes}</td>
            <td>{Year}</td>
            <td>{tipo}</td>
            <td className="d-flex justify-content-center">

                <Link
                    to={`/Videofincas/recibo/${_id}`}
                    state={{ listafincas }}>
                    <button type="button" className="btn btn-warning mr-3">Visualizar</button>
                </Link>
               
                <button type="button" className="btn btn-success" onClick={() => generarRecibo(_id)}>Generar</button>
            </td>


        </tr >
    )
}
