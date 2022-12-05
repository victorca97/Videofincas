import { useState, useEffect } from "react";
import axios from "axios";
import GetURLAPI from "../utilidades/parametros";
import { Link } from "react-router-dom";

const url_base = GetURLAPI()

export const ItemRecibo = ({ contador, _id, Finca, Mes, Year, tipo, listafincas, recibo, meses, years, tipos, setShowLoading, setMessage, setShowAlert }) => {

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    var ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0);

    const [nombreFinca, setNombreFinca] = useState('');
    const [fechaEmision, setFechaEmision] = useState(hoy.toLocaleDateString())
    const [fechaVencimiento, setFechaVencimiento] = useState(ultimoDia.toLocaleDateString())
    const [data, setData] = useState()

    const encontrarNombreFinca = () => {
        const finca = listafincas.find(finca => finca._id === Finca)
        setNombreFinca(finca.Nombre)
    }

    const labelMes = meses.find(m => m.id===Mes).mes
    const labelYear = years.find(y => y===Year)
    const labelTipo = tipos.find(t=> t.id ===tipo).tipo
    useEffect(() => {
        encontrarNombreFinca()
    }, [])


    const generarRecibo = async (id) => {

        setShowLoading(true)
        setShowAlert(false)
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
        setData(res)
    }

    useEffect(() => {
        
        if (data?.status === 200) {
            setShowLoading(false)
            setMessage(data?.data.mensaje)
            setShowAlert(true)
        }
        
    }, [data])
    return (
        <tr>
            <th scope="row">{contador + 1}</th>
            <td>{nombreFinca}</td>
            <td>{labelMes}</td>
            <td>{labelYear}</td>
            <td>{labelTipo}</td>
            <td className="d-flex justify-content-center">

                <Link
                    to={`/Videofincas/recibo/${_id}`}
                    state={{ recibo, listafincas }}>
                    <button type="button" className="btn btn-warning mr-3">Visualizar</button>
                </Link>
               
                <button type="button" className="btn btn-success" onClick={() => generarRecibo(_id)}>Generar</button>
            </td>


        </tr >
    )
}
