
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from '../api/axios';
import GetURLAPI from '../utilidades/parametros';

const url_base = GetURLAPI()

export const ItemPropietario = ({ pro, listafincas, propietariosPorFinca, setPropietariosPorFinca, contador }) => {

        const { _id, Nombres_y_Apellidos, Departamentos, Estacionamientos } = pro;

        const eliminarPropietario = (id) => {
                
                const data_DELETE = {
                        "_id": id
                }

                const URL = url_base + "propietario"
                try {
                        axios.delete(URL, {data: data_DELETE}).then(
                                res => {
                                      
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
                const tablaActualizada = propietariosPorFinca?.filter(pro=> pro._id !== id)
                setPropietariosPorFinca(tablaActualizada)
        }
/* 
        useEffect(() => {
         console.log('entro al useEffect')
                
        }, []) */
        

        return (

                <tr>
                        <th scope="row">{contador + 1}</th>
                        <td>{Nombres_y_Apellidos}</td>

                        {Departamentos.map((departamento, id) => (
                                <>
                                        <td>{departamento.ID_Departamentos}</td>
                                        <td>{departamento.Porcentaje_Participacion}</td>
                                </>


                        ))}
                           

                        {
                                Estacionamientos.map((estacionamiento, id) => (
                                        <td>{estacionamiento.Numero_Estacionamiento}</td>
                                ))
                        }
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
