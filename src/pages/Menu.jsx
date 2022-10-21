import React from "react";
import { Link } from "react-router-dom";
import Logo from "../componentes/logo";

function Menu() {

    return (
        <div className="contenedor-cabecera">
            <Logo
                nombre="Menú Principal"/>
            <ul>
                <li>
                    <Link to="/finca">Registrar Fincas</Link>
                </li>
                <li>
                    <Link to="/recibo">Generar Recibos</Link>
                </li>
                <li>
                    <Link to="/propietario">Registrar Propietarios</Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;