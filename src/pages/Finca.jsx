import React from 'react';
import FormPropietario from "../componentes/FormPropietario";
import SubirImg from '../componentes/SubirImg';
import Logo from "../componentes/logo";
import Regresar from '../componentes/Regresar';
import '../App.css';

function Finca () {
    return (
        <>
            <div className="contenedor-cabecera">
               <Logo 
                 nombre='Formulario de las Fincas'/>
            </div>
            <Regresar
                ruta='home'/>
            <FormPropietario
                nombre='Nombres de la Finca:' />
            <FormPropietario
                nombre='Dirección:'
                longitud={70} />
            <SubirImg />
            <div className='contenedor-btn-guardar'>
                <button className='btn-guardar'>GUARDAR</button>
            </div>
        </>    
    );
}

export default Finca;