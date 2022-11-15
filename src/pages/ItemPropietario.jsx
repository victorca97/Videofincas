
export const ItemPropietario = ({ Nombres_y_Apellidos, Departamentos, Estacionamientos, contador }) => {

        return (

                <tr>
                        <th scope="row">{contador + 1}</th>
                        <td >{Nombres_y_Apellidos}</td>

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

                </tr>



        )
}
