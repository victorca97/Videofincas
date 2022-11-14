
export const ItemPropietario = ({ _id, Nombres_y_Apellidos, Nro_Documento, Telefono, Departamentos, Estacionamientos }) => {

        return (


                <div className="card mb-1">
                        <div className="card-body">
                                <p>id: {_id}</p>
                                <p>Nombres y Apellidos: {Nombres_y_Apellidos}</p>
                                <p>N° de Documento: {Nro_Documento}</p>
                                <p>Teléfono: {Telefono}</p>
                                <p>Departamentos:</p>
                                <ul>
                                        {
                                                Departamentos.map((departamento) => (
                                                        <>
                                                                <li>id departamento: {departamento.ID_Departamentos}</li>
                                                                <li>Porcentaje de Participacion: {departamento.Porcentaje_Participacion}</li>
                                                        </>

                                                ))
                                        }

                                </ul>
                                <p>Estacionamientos:</p>
                                <ul>
                                        {
                                                Estacionamientos.map((estacionamiento) => (
                                                        <>
                                                                <li>Número de estacionamiento: {estacionamiento.Numero_Estacionamiento}</li>
                                                        </>

                                                ))
                                        }

                                </ul>
                        </div>



                </div>


        )
}
