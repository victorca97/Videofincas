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
          type="text" 
          role="combobox" 
          size="1" 
          name='texto' 
          placeholder="Seleccione..." 
          autocomplete="off"
        /> */}
        <select name="NombreFinca" id="NombreFinca"  data-placeholder="- Seleccione ... -"
          class="tarea-input" onchange="change(this.id, 'colonia')"
          value="<%= typeof NombreFinca != 'undefined' ? NombreFinca : '' %>">
            <option value=""></option>
            <option value="Los Rosales">Finca Los Rosales</option>
            <option value="Las Palomas">Finca Las Palomas</option>
            <option value="Los Ruisenores">Finca Los Ruisenores</option>
        </select>
      </form>
      <div className='form-info'>
        <h2> Servicios públicos </h2>
        <ListaTareas />
      </div>
    </>
    
  );
}

export default App;
