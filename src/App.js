import { Switch, Route } from "react-router-dom";
import Admin from './pages/Admin';
import Propietario from './pages/Propietario';

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
      </Switch>
    </>
  );
}

export default App;
