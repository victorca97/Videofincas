import React from 'react';
import FormPropietario from "../componentes/FormPropietario";
import { TipoDoc } from '../componentes/TipoDoc';
import Logo from "../componentes/logo";
import '../App.css';

function Propietario () {
    return (
        <>
            <div className="contenedor-cabecera">
               <Logo 
                 nombre='Formulario del Propietario'/>
            </div>
            <FormPropietario
                nombre='Nombres y Apellidos:' />
            <form className="tipodoc-formulario">
                <h2 className='h2-propietario'> Tipo de Documento: </h2>
                <div className='autocomplete-wrapper'>
                    <TipoDoc />
                </div>
            </form>
            <FormPropietario
                nombre='Nro. Documento:'
                longitud={20} />
            <FormPropietario
                nombre='Correo Electrónico:' />
            <FormPropietario
                nombre='Nro. Celular:'
                longitud={20} />
            <FormPropietario
                nombre='Finca:' />
            <FormPropietario
                nombre='Departamento:' />
            <FormPropietario
                nombre='Estacionamiento:' />
        </>    
    );
}

export default Propietario;