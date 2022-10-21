import React from 'react';
import FormPropietario from "../componentes/FormPropietario";
import { TipoDoc } from '../componentes/TipoDoc';
import Logo from "../componentes/logo";
import '../App.css';
import {FcUndo} from "react-icons/fc";

function Propietario () {
    return (
        <>
            <div className="contenedor-cabecera">
               <Logo 
                 nombre='Formulario del Propietario'/>
            </div>
            <div className="contenedor-btn-retry">
                <FcUndo className="btn-retry" />
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
            <FormPropietario
                nombre='Participación (%):'
                longitud={5} />
            <button className='btn-guardar'>GUARDAR</button>
        </>    
    );
}

export default Propietario;