import './App.css';
import Logo from './componentes/logo.jsx';
import ListaTareas from './componentes/ListaTareas';
import { Fincas } from './componentes/Fincas';
import AgregarSeccion from './componentes/Seccion';

function App() {
  return (
    <>
      <div className="contenedor-cabecera">
        <Logo />
      </div>
      <form className="nombre-finca-formulario" autoComplete='off'>
        <h2> Nombre de la Finca: </h2>
        <div className='autocomplete-wrapper'>
          <Fincas/>
        </div>
      </form>
      <div className='contenedor-agregarseccion'>
        <AgregarSeccion/>
      </div>
      <div className='form-info'>
        <h2> Servicios públicos </h2>
        <ListaTareas />
      </div>
    </>
    
  );
}

export default App;
