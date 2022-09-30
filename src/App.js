import './App.css';
import Logo from './componentes/logo.jsx';
import ListaTareas from './componentes/ListaTareas';

function App() {
  return (
    <>
      <div className="aplicacion-cabecera">
        <Logo />
      </div>
      <form className="nombre-finca-formulario" autoComplete='off'>
        <h2> Nombre de la Finca: </h2>
        <div className='autocomplete-wrapper'>
          <input id="autocomplete-input" className="tarea-input" type="text" placeholder='- Seleccione ... -' />
          <ul className="autocomplete-list">
            {/* <li>
              <button>United Kingdom</button>
            </li>
            <li>
              <button>United States</button>
            </li>
            <li>
              <button>Netherlands</button>
            </li> */}
          </ul>
        </div>
      </form>
      <div className='form-info'>
        <h2> Servicios públicos </h2>
        <ListaTareas />
      </div>
    </>
    
  );
}

export default App;
