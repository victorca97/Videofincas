
import Regresar from '../componentes/Regresar';
import '../App.css';
import '../estilos/FormPropietario.css';
import { Link } from 'react-router-dom';
import { ItemFinca } from '../componentes/ItemFinca';
import { useState, useEffect } from 'react';
const encabezadoCss = {
    background: '#294A98',
    color: 'white'
}

function ListarFinca({ listafincas, getFincas }) {

    const [showEliminar, setShowEliminar] = useState(false)
    const [message, setMessage] = useState(false)

    useEffect(() => {
        getFincas()
    }, []);


    return (
        <>
            <div className='container-fluid' >
                <div className='row justify-content-center'>

                    <div className='col-xs-12'>
                        {
                            showEliminar && (
                                <div className="alert alert-warning alert-dismissible fade show mt-3" role="alert">
                                    <strong>{message}</strong>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShowEliminar(false)}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            )
                        }

                        {listafincas?.length != 0 && (
                            <table className="table table-primary table-striped mt-4">
                                <thead>
                                    <tr style={encabezadoCss}>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Direccion</th>
                                        <th scope='col'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        listafincas?.map((finca, contador) => (
                                            <ItemFinca key={finca._id} {...finca} contador={contador} finca={finca} getFincas={getFincas} setShowEliminar={setShowEliminar} setMessage={setMessage} />
                                        ))
                                    }

                                </tbody>

                            </table>
                        )
                        }
                    </div>
                  
                </div>
                <div className='d-flex justify-content-center align-items-center mb-2'>
                        <Regresar
                            ruta='home' className='mb-2' />
                        <div className='ml-4 mt-2'>
                            <Link to="/Videofincas/finca">
                                <button type="button" className="btn btn-guardar mb-2">
                                    Agregar
                                </button>
                            </Link>
                        </div>

                    </div>
            </div>

        </>
    );
}

export default ListarFinca;