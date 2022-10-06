import './App.css';
import Logo from './componentes/logo.jsx';
import { Fincas } from './componentes/Fincas';
import ListaSecciones from './componentes/ListaSecciones';

function App() {

  return (
    <>
      <div className="contenedor-cabecera">
        <Logo />
      </div>
      <form className="nombre-finca-formulario">
        <h2> Nombre de la Finca: </h2>
        <div className='autocomplete-wrapper'>
          <Fincas />
        </div>
      </form>
      <ListaSecciones/>
    </>
    
  );
}

export default App;
