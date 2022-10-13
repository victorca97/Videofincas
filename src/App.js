import './App.css';
import { Route } from "react-router-dom";
import Logo from './componentes/logo.jsx';
import { Fincas } from './componentes/Fincas';
import ListaSecciones from './componentes/ListaSecciones';

function App() {

  return (
      <div className='contenedor-rutas'>
          <Route exact path='/' />
          <Route path='/administrador'>
            <div className="contenedor-cabecera">
              <Logo />
            </div>
            <form className="nombre-finca-formulario">
              <h2> Nombre de la Finca: </h2>
              <div className='autocomplete-wrapper'>
                <Fincas />
              </div>
            </form>
            <ListaSecciones />
          </Route>
          <Route path='/propietarios'>
            Hola Mundo
          </Route>
      </div>
    
  );
}

export default App;
