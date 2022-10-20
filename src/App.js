import { Switch, Route } from "react-router-dom";
import Admin from './pages/Admin';
import Propietario from './pages/Propietario';
import Finca from './pages/Finca';

function App() {

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <>
            <div>
              Pantalla inicial
            </div>
          </>
        </Route>
        <Route path='/administrador'>
          <Admin />
        </Route>
        <Route path='/propietario'>
          <Propietario />
        </Route>
        <Route path='/finca'>
          <Finca />
        </Route>
      </Switch>
    </>
  );
}

export default App;
