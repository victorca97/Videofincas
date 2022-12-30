import Regresar from '../componentes/Regresar';
import '../App.css';
import '../estilos/FormPropietario.css';
import GetURLAPI from '../utilidades/parametros';
import Axios from 'axios';
import { SubirImg } from '../componentes/SubirImg';
import { useForm } from '../hooks/useForm';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';


export const Finca = () => {
    const { nombre, direccion, onInputChange, onResetForm } = useForm({
        nombre: '',
        direccion: '',
        imagen: ''
    })

    const [showAlert, setShowAlert] = useState(false)
    const [message, setMessage] = useState('')

    const { user } = useContext(AuthContext)
 
    function handlesubmit(e) {
        e.preventDefault()
        const data_POST = {
            "user": user.username,
            "Nombre": nombre,
            "Direccion": direccion,
            /*imagen, */

        }
        const url_base = GetURLAPI()
        const URL = url_base + "crear_finca"
        Axios.post(URL, data_POST).then(
            res => {
                if (res.status == 200) {
                    console.log(res.data)
                    setMessage(res.data.mensaje)
                    setShowAlert(true)
                    /* alert(res.data.mensaje) */
                    onResetForm()

                } else (console.log(res))
            }
        )
        console.log(data_POST)
    }


    return (
        <>
            <div className='container-fluid' >
                <div className='row'>
                    <div className='col-3 mt-4'>
                        <Regresar
                            ruta='fincas' />
                    </div>

                    <div className='col-6 vh-200 justify-content-center align-items-center'>

                        {
                            showAlert && (
                                <div className="alert alert-primary alert-dismissible fade show mt-3 text-center" role="alert">
                                    <strong>{message}</strong>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            )
                        }

                        <div className="form-group text-center mt-1" >
                            <label className="col col-form-label">Nombre de la Finca :</label>
                            <input type='text'
                                className='form-control col-8 '
                                id='subtitulo-finca'
                                autoComplete="off"
                                placeholder=""
                                name={"nombre"}
                                value={nombre}
                                onChange={onInputChange} />
                        </div>
                        <div className="form-group text-center" >
                            <label className="col col-form-label " id='textito'>Direccion de la Finca :</label>
                            <input type='text'
                                className='form-control col-8 '
                                id='subtitulo-finca'
                                autoComplete="off"
                                placeholder=""
                                name={"direccion"}
                                value={direccion}
                                onChange={onInputChange}
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div className='container-fluid' >
                <SubirImg />
                <div className='contenedor-btn-guardar' onClick={handlesubmit}>
                    <button className='btn-guardar mt-2 mb-2'>GUARDAR</button>
                </div>

            </div>
        </>
    )
}
