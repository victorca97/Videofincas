import React from 'react'
import '../styles-navbar.css'
import videoFincaLogo from '../../imagenes/logo_videofinca.png'
import { useLocation, Link } from 'react-router-dom'

export const NavBar = () => {

  const location = useLocation();

  let name = location.pathname.split('Videofincas/')[1]
  switch (name) {
    case 'home':
      name = 'Menú principal'
      break;
    case 'recibo':
      name = 'Recibo';
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
          <Link to='/Videofincas' className='main_div col-xs-12 col-sm-2 py-3 '>
            <button>Salir</button>
          </Link>
        </div>


      </div>
    </div>

  )
}