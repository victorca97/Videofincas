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
                <h3> Tipo de Documento: </h3>
                <div className='autocomplete-wrapper'>
                    <TipoDoc />
                </div>
            </form>
            <FormPropietario
                nombre='Nro. Documento:' />
            <FormPropietario
                nombre='Correo Electrónico:' />
            <FormPropietario
                nombre='Nro. Celular:' />
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