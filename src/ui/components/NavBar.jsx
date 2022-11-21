import React from 'react'
import '../styles-navbar.css'
import videoFincaLogo from '../../imagenes/logo_videofinca.png'
import { useLocation, Link } from 'react-router-dom'
import { AiOutlineLogout } from 'react-icons/ai'

const iconLogout = {
  width: '50px',
  height: '50px'
}

export const NavBar = () => {

  const location = useLocation();

  let name = location.pathname.split('Videofincas/')[1]
  
  /* if (name.includes('/')) {
    name = name.split('/')[0]
  } */
  
  switch (name) {
    case 'home':
      name = 'Menú principal'
      break;
    case 'recibo':
      name = 'Formulario del Recibo';
      break;
    case 'propietario':
      name = 'Formulario del Propietarios'
      break;
    case 'propietarios':
      name = 'Propietarios'
      break;
    case 'finca':
      name = 'Formulario de las Fincas'
      break;
    case 'descarga':
      name = 'Descargas'
      break;
    case 'fincas':
      name='Fincas'
      break
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
          />
        </Link>


        <div className='titulo-principal col-xs-12 col-sm-6'>
          <h1>
            {name}
          </h1>
        </div>

        <Link to='/Videofincas' className='d-flex col-sm-2 align-items-center justify-content-end'>
          <AiOutlineLogout style={iconLogout} />
        </Link>

      </div>
    </div>

  )
}
