import Regresar from '../componentes/Regresar';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';
import { useState, useEffect, useContext } from 'react';
import '../estilos/FormPropietario.css';
import GetURLAPI from '../utilidades/parametros';
import axios from 'axios';
import { SubirImg } from '../componentes/SubirImg';
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../context/AuthContext';

export const UpdateFinca = () => {

  const location = useLocation();
  const fincaRecuperado = location.state.finca
  const navigate = useNavigate()
  const { id, nombre, direccion } = fincaRecuperado;

  const { nombreInput, direccionInput, onInputChange, onResetForm } = useForm({
    nombreInput: nombre,
    direccionInput: direccion,
    imagen: ''
  })

  const [data, setData] = useState({})
  const { user } = useContext(AuthContext)
  const [showAlert, setShowAlert] = useState(false)
  const [message, setMessage] = useState('')

  function actualizarFinca() {

    console.log('entro actualizar finca')
    const data_PUT = {
      "user": user.username,
      "id": id,
      "nombre": nombreInput,
      "direccion": direccionInput,

    }
    console.log(data_PUT)
    const url_base = GetURLAPI()
    const URL = url_base + "finca"
    try {

      axios.put(URL, data_PUT).then(
        res => setData(res.data)
      )

    }
    catch (error) {
      console.log("Entro al catch")
      alert("Hubo error en el servidor")
      console.log(URL)
      console.log(error)
    }
  }

  useEffect(() => {
    if (data.status === 200) {
      console.log(data)
      setShowAlert(true)
      setMessage(data.mensaje)
      /* navigate(-1) */
    }
  }, [data])

  return (
    <>
      <div className='container-fluid' >
        <div className='row'>

          <div className='col-3'>
            <Regresar
              ruta='fincas' />
          </div>



          <div className='col-6 vh-200 justify-content-center align-items-center'>
            <form action="" onSubmit={actualizarFinca}>
              <div className="form-group text-center mt-3" >
                {
                  showAlert && (
                    <div className={`alert alert-warning alert-dismissible fade show`} role="alert">
                      <strong>{message}</strong>
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)}>
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  )
                }
              </div>


              <div className="form-group text-center " >

                <label className="col col-form-label">Nombre de la Finca :</label>
                <input type='text'
                  className='form-control col-8 '
                  id='subtitulo-finca'
                  placeholder=""
                  name={"nombreInput"}
                  value={nombreInput}
                  onChange={onInputChange} />
              </div>
              <div className="form-group text-center" >
                <label className="col col-form-label " id='textito'>Direccion de la Finca :</label>
                <input type='text'
                  className='form-control col-8 '
                  id='subtitulo-finca'
                  placeholder=""
                  name={"direccionInput"}
                  value={direccionInput}
                  onChange={onInputChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='container-fluid' >
        <SubirImg />
        <div className='contenedor-btn-guardar' onClick={() => actualizarFinca()}>
          <button className='btn-guardar'>Actualizar</button>
        </div>

      </div>
    </>
  )
}
