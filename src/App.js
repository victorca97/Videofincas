import { Routes, Route, } from "react-router-dom";
import Login from './pages/Login';
import Recibo from './pages/Recibo';
import Propietario from './pages/Propietario';
import Finca from './pages/Finca';
import Menu from "./pages/Menu";
import Descarga from "./pages/Descarga";

function App() {

  return (
    <Routes>
      <Route path='Videofincas/' element={<Login />} />
      <Route path='Videofincas/home' element={<Menu />} />
      <Route path='Videofincas/recibo' element={<Recibo />} />
      <Route path='Videofincas/propietario' element={<Propietario />} />
      <Route path='Videofincas/finca' element={<Finca />} />
      <Route path='Videofincas/descarga' element={<Descarga />} />
    </Routes>
  );
}

export default App;

// Verion anterior

// import './App.css';
// import { Route } from "react-router-dom";
// import Logo from './componentes/logo.jsx';
// import { Fincas } from './componentes/Fincas';
// import ListaSecciones from './componentes/ListaSecciones';

// function App() {

//   return (
//       <div className='contenedor-rutas'>
//           <Route exact path='/' />
//           <Route path='/recibo'>
//             <div className="contenedor-cabecera">
//               <Logo />
//             </div>
//             <form className="nombre-finca-formulario">
//               <h2> Nombre de la Finca: </h2>
//               <div className='autocomplete-wrapper'>
//                 <Fincas />
//               </div>
//             </form>
//             <ListaSecciones />
//           </Route>
//           <Route path='/propietario'>
//            <Propietario />
//           </Route>
//       </div>
    
//   );
// }

// export default App;