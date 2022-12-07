import React, { useContext } from 'react'
import '../styles-navbar.css'
import videoFincaLogo from '../../imagenes/logo_videofinca.png'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export const NavBar = () => {

  const location = useLocation();
  const { user, logout } = useContext(AuthContext)
  /* console.log('userrrrrrrr', user) */
  let name = location.pathname.split('/')[2]
  const navigate = useNavigate()

  const onLogout = () => {
    logout()
    navigate('/Videofincas',{
      replace: true
    })
  }

  switch (name) {
    case 'home':
      name = 'Menú principal'
      break;
    case 'recibo':
      name = 'Generar Recibo';
      break;
    case 'recibos':
        name = 'Recibos';
        break;
    case 'propietario':
      name = 'Propietarios'
      break;
    case 'propietarios':
      name = 'Propietarios'
      break;
    case 'finca':
      name = 'Fincas'
      break;
    case 'fincas':
      name = 'Fincas'
      break;
    case 'descarga':
      name = 'Descargas'
      break;
    
    default:
      break;
  }
  return (
    <div className='contenedor-cabecera'>

      <div className='videofincas-logo-contenedor row'>
        <Link to='/Videofincas/home' className='col-xs-12 col-sm-4'>
          <img
            src={videoFincaLogo}
            className='videofincas-logo'
            alt='Logo Videofinca'
          />
        </Link>


        <div className='titulo-principal col-xs-12 col-sm-6'>
          <h1>
            {name}
          </h1>
        </div>
      
        <div className='my-4'>
          <Link className='main_div col-xs-12 col-sm-2 py-3 '>
            <button onClick={onLogout}>Salir</button>
          </Link>
        </div>


      </div>
    </div>

  )
}