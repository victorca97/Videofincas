import React from "react";
import videoFincaLogo from '../imagenes/logo_videofinca.png'

function Logo(){
    return(
      <div className='videofincas-logo-contenedor'>
        <img
          src={videoFincaLogo}
          className='videofincas-logo' />
        <div className='titulo-principal'>
          <h1> Formulario del administrador </h1>
        </div>
      </div>
    );
}

export default Logo;