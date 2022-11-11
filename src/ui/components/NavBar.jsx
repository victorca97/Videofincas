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
      name = 'Formulario del Recibo';
      break;
    case 'propietario':
      name = 'Formulario del Propietarios'
      break;
    case 'finca':
      name = 'Formulario de las Fincas'
      break;
    case 'descarga':
      name = 'Descargas'
      break;
    default:
      break;
  }
  return (
    <div className='contenedor-cabecera'>

      <div className='videofincas-logo-contenedor'>
        <Link to='Videofincas/home' >
          <img
            src={videoFincaLogo}
            className='videofincas-logo'
            />
        </Link>

        <div className='titulo-principal'>
          <h1>
            {name}
          </h1>
        </div>
      </div>
    </div>

  )
}