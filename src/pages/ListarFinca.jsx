
import Regresar from '../componentes/Regresar';
import '../App.css';
import '../estilos/FormPropietario.css';
import { Link } from 'react-router-dom';
import { ItemFinca } from '../componentes/ItemFinca';
import { useEffect } from 'react';
const encabezadoCss = {
    background: '#294A98',
    color: 'white'
}

function ListarFinca({ listafincas, getFincas }) {

    useEffect(() => {
        getFincas()
    }, []);

    console.log(listafincas)

    return (
        <>
            <div className='container-fluid' >
                <div className='row'>
                    <div className='col-xs-3 col-sm-3'>
                        <Regresar
                            ruta='home' />
                    </div>

                    <div className='col-xs-6 col-sm-6'>
                        {listafincas?.length == 0 ? <h1>Cargando...</h1> : (
                            <table className="table table-primary table-striped mt-5">
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
                                            <ItemFinca key={finca._id} {...finca} contador={contador} finca={finca} getFincas={getFincas} />
                                        ))
                                    }

                                </tbody>

                            </table>
                        )
                        }
                    </div>
                    <div className='col-xs-3 col-sm-3'>
                        <div className='container mt-4 d-flex justify-content-center'>
                            <Link to="/Videofincas/finca">
                                <button type="button" className="btn btn-guardar mb-2">
                                    Agregar
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default ListarFinca;