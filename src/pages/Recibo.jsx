// import Logo from "../componentes/logo";
// import { Fincas } from "../componentes/Fincas";
// import ListaSecciones from "../componentes/ListaSecciones";
// import '../App.css';

// function Recibo() {
//     return (
//         <>
//             <div className="contenedor-cabecera">
//                 <Logo 
//                     nombre='Formulario de Recibos'/>
//             </div>
//             <form className="nombre-finca-formulario">
//                 <h2> Nombre de la Finca: </h2>
//                 <div className='autocomplete-wrapper'>
//                     <Fincas />
//                 </div>
//             </form>
//             <ListaSecciones />
//         </>
//     );
// }

// export default Recibo;

import Logo from "../componentes/logo";
import { Fincas } from "../componentes/Fincas";
import ListaSecciones from "../componentes/ListaSecciones";
import Regresar from "../componentes/Regresar";
import '../App.css';

function Recibo() {
    return (
        <>
            <div className="contenedor-cabecera">
                <Logo 
                    nombre='Formulario de Recibos'/>
            </div>
            <Regresar
                ruta='home'/>        
            <form className="nombre-finca-formulario">
                <h2> Nombre de la Finca: </h2>
                <div className='autocomplete-wrapper'>
                    <Fincas />
                </div>
            </form>
            <ListaSecciones />
            <div className='contenedor-btn-guardar'>
                <button className='btn-guardar'>GUARDAR</button>
            </div>
        </>
    );
}

export default Recibo;