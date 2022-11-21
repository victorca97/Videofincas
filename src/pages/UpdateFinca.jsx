import Regresar from '../componentes/Regresar';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';
import { useState, useEffect } from 'react';
import '../estilos/FormPropietario.css';
import GetURLAPI from '../utilidades/parametros';
import axios from 'axios';
import { SubirImg } from '../componentes/SubirImg';
import { useForm } from '../hooks/useForm';

export const UpdateFinca = () => {

  const location = useLocation();
  const fincaRecuperado = location.state.finca
  const navigate = useNavigate()
  const { _id, Nombre, Direccion } = fincaRecuperado;

  const { nombre, direccion, onInputChange, onResetForm } = useForm({
    nombre: Nombre,
    direccion: Direccion,
    imagen: ''
  })

  const [data, setData] = useState({})
  console.log(_id)
  function actualizarFinca() {

    console.log('entro actualizar finca')
    const data_PUT = {
      "_id": _id,
      "Admin_Id": "Admin0001",
      "Nombre": nombre,
      "Direccion": direccion,

    }
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

  console.log('dato actualizado, ',data)
  useEffect(() => {

    if (data.status === 201) {
        alert(data.message)
        navigate(-1)
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
              <div className="form-group text-center " >

                <label className="col col-form-label">Nombre de la Finca :</label>
                <input type='text'
                  className='form-control col-8 '
                  id='subtitulo-finca'
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
                  placeholder=""
                  name={"direccion"}
                  value={direccion}
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
