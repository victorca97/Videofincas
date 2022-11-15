
import Regresar from '../componentes/Regresar';
import '../App.css';
import '../estilos/FormPropietario.css';
import GetURLAPI from '../utilidades/parametros';

import Axios from 'axios';
import { useForm } from '../hooks/useForm';
import { SubirImg } from '../componentes/SubirImg';

function Finca() {

    const { nombre, direccion, onInputChange, onResetForm } = useForm({
        nombre: '',
        direccion: '',
        imagen: ''
    })

    function handlesubmit(e) {
        e.preventDefault()
        const data_POST = {
            "Admin_Id": "Admin0001",
            "Nombre": nombre,
            direccion,
            /*imagen, */

        }
        const url_base = GetURLAPI()
        const URL = url_base + "finca"
        Axios.post(URL, data_POST).then(
            res => {
                if (res.status == 200) {
                    alert("Mensaje enviado")
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
                    <div className='col-3'>
                        <Regresar
                            ruta='home' />
                    </div>

                    <div className='col-9'>
                        <form className="form-propietarios" onSubmit={handlesubmit}>
                            <h2 className='h2-propietario'> Nombre de la Finca: </h2>
                            <input
                                className='input-propietario'
                                type='text'
                                placeholder=''
                                name={"nombre"}
                                value={nombre}
                                onChange={onInputChange}
                            />
                            <h2 className='h2-propietario'> Direccion de la Finca: </h2>
                            <input
                                className='input-propietario'
                                type='text'
                                placeholder=''
                                name={"direccion"}
                                value={direccion}
                                onChange={onInputChange}
                            />
                           
                        </form>
                    </div>
                </div>
            </div>

            <div className='container-fluid' >
                <SubirImg />
                <div className='contenedor-btn-guardar' onClick={handlesubmit}>
                                <button className='btn-guardar'>GUARDAR</button>
                            </div>

            </div>
        </>
    );
}

export default Finca;