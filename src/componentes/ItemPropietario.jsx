
import {Link, useLocation } from 'react-router-dom';

export const ItemPropietario = ({pro,listafincas, contador }) => {

        const { _id, Nombres_y_Apellidos, Departamentos, Estacionamientos} = pro;

        const updatePropietario = (id) => {
                console.log('id', id)
        }

        return (

                <tr>
                        <th scope="row">{contador + 1}</th>
                        <td>{Nombres_y_Apellidos}</td>

                        {Departamentos.map((departamento) => (
                                <>
                                        <td>{departamento.ID_Departamentos}</td>
                                        <td>{departamento.Porcentaje_Participacion}</td>
                                </>


                        ))}


                        {
                                Estacionamientos.map((estacionamiento) => (
                                        <td>{estacionamiento.Numero_Estacionamiento}</td>
                                ))
                        }
                        <td className="d-flex">
                                <button onClick={() => updatePropietario(_id)} type="button" className="btn btn-warning mr-3">
                                        <Link 
                                                to={`/Videofincas/propietarios/${_id}`}
                                                state={{pro, listafincas}}>
                                                        Editar
                                        </Link>
                                </button>
                        <button type="button" className="btn btn-danger">Eliminar</button>
                </td>
                        

                </tr >



        )
}
