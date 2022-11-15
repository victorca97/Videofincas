
export const ItemPropietario = ({ Nombres_y_Apellidos, Departamentos, Estacionamientos, contador }) => {

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
                                <button type="button" class="btn btn-warning mr-3">Editar</button>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                        </td>

                </tr>



        )
}
