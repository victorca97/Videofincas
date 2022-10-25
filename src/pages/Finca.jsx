import React from 'react';
import FormPropietario from "../componentes/FormPropietario";
import SubirImg from '../componentes/SubirImg';
import Logo from "../componentes/logo";
import '../App.css';

function Propietario () {
    return (
        <>
            <div className="contenedor-cabecera">
               <Logo 
                 nombre='Formulario de las fincas'/>
            </div>
            <FormPropietario
                nombre='Nombres de la Finca:' />
            <FormPropietario
                nombre='Dirección:'
                longitud={70} />
            <SubirImg />
        </>    
    );
}

export default Propietario;