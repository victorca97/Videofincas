import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Menu() {

    return (
        <>
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