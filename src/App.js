import { Switch, Route } from "react-router-dom";
import Login from './pages/Login';
import Recibo from './pages/Recibo';
import Propietario from './pages/Propietario';
import Finca from './pages/Finca';
import Menu from "./pages/Menu";

function App() {

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/home'>
          <Menu />
        </Route>
        <Route path='/recibo'>
          <Recibo />
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
