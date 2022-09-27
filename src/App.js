import './App.css';
import Logo from './componentes/logo.jsx';
import ListaTareas from './componentes/ListaTareas';

function App() {
  return (
    <>
      <div className="aplicacion-cabecera">
        <Logo />
      </div>
      <form class="nombre-finca-formulario">
        <h2> Nombre de la Finca: </h2>
        {/* <input
          className='tarea-input'
          type='text'
          placeholder=''
          name='texto'
        /> */}
        <input 
          className='tarea-input' 
          type="text" 
          role="combobox" 
          size="1" 
          name='texto' 
          placeholder="Seleccione..." 
          autocomplete="off"
        />
      </form>
      <div className='form-info'>
        <h2> Servicios públicos </h2>
        <ListaTareas />
      </div>
    </>
    
  );
}

export default App;
