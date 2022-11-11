import React from "react";
import { Link } from "react-router-dom";
import Logo from "../componentes/logo";
import '../App.css';

function Menu() {

    return (
        <>
            <div className="contenedor-cabecera">
                <Logo
                    nombre="Menú Principal"/>
            </div>
            <ul id="lista-rutas">
                <li id="elemento-lista-finca">
                    <Link id="link-finca" to="/Videofincas/finca">Registrar Fincas</Link>
                </li>
                <li id="elemento-lista-recibo">
                    <Link id="link-recibo" to="/Videofincas/recibo">Generar Recibos</Link>
                </li>
                <li id="elemento-lista-propietario">
                    <Link id="link-propietario" to="/Videofincas/propietario">Registrar Propietarios</Link>
                </li>
            </ul>
        </>
    );
}

export default Menu;