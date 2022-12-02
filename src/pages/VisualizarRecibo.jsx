import Seccion from "../componentes/Seccion"

export const VisualizarRecibo = ({listaSecciones, setListaSecciones}) => {
    return (
        <>
            <div className='container-fluid'>


                <div className='contenedor-secciones'>
                    {
                        listaSecciones?.map((seccion) =>
                            <Seccion
                                key={seccion.ID_Seccion}
                                {...seccion}
                                seccion={seccion}
                                listaSecciones={listaSecciones}
                                setListaSecciones={setListaSecciones}
                            />
                        )
                    }
                </div>
            </div>

        </>
    )
}
