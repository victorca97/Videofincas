import { useForm } from '../hooks/useForm';
import Regresar from '../componentes/Regresar';
import GetURLAPI from '../utilidades/parametros';
import Axios from 'axios';

const url_base = GetURLAPI()

export const Registro = () => {

    const { username, password, base_datos, onInputChange, onResetForm } = useForm({
        username: '',
        password: '',
        base_datos: ''
    })

    const handlesubmit = (e) => {
        e.preventDefault()
        const data_POST = {
            "username": username,
            "password": password,
            "base_datos": base_datos,
        }

        console.log(data_POST)

        const URL = url_base+"registroadmin"
        Axios.post(URL, data_POST).then(
            res => {
                console.log(res)
            }
        )

    }

    
    return (
        <>
            <div className='container-fluid' >
                <div className='row'>
                    <div className='col-3 mt-4'>
                        <Regresar
                            ruta='propietarios' />
                    </div>
                    <div className='col-6'>
                        <form className="form-propietarios pb-0" onSubmit={handlesubmit}>
                            {/* <div className="form-group row">
                    {
                        showAlert && (
                            <div className={`alert alert-${error} alert-dismissible fade show`} role="alert">
                                <strong>{message}</strong>
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        )
                    }

                </div> */}
                            <div className="form-group row">

                                <label htmlFor="inputEmail3" className="col-4 col-form-label">Usuario:</label>
                                <input type='text'
                                    className='form-control col-8'
                                    autoComplete="off"
                                    placeholder="Usuario..."
                                    name={"username"}
                                    value={username}
                                    onChange={onInputChange}
                                />
                            </div>

                            <div className="form-group row">

                                <label htmlFor="inputEmail3" className="col-4 col-form-label">Contraseña:</label>
                                <input type='text'
                                    className='form-control col-8'
                                    autoComplete="off"
                                    placeholder="Contraseña..."
                                    name={"password"}
                                    value={password}
                                    onChange={onInputChange}
                                />
                            </div>

                            <div className="form-group row">

                                <label htmlFor="inputEmail3" className="col-4 col-form-label">Nombre Base de Datos:</label>
                                <input type='text'
                                    className='form-control col-8'
                                    autoComplete="off"
                                    placeholder="Nombre Base de Datos..."
                                    name={"base_datos"}
                                    value={base_datos}
                                    onChange={onInputChange}
                                />
                            </div>
                           
                                <div className='contenedor-btn-guardar' onClick={handlesubmit}>
                                    <button className='btn-guardar'>Registrar</button>
                                </div>
                            


                        </form>

                    </div>

                </div>
            </div>


        </>
    )
}
