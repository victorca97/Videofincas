import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Recibo from './pages/Recibo';
import Propietario from './pages/Propietario';
import Finca from './pages/Finca';
import Menu from "./pages/Menu";
import Descarga from "./pages/Descarga";
import { NavBar } from "./ui/components/NavBar";
import { ListarPropietario } from "./pages/ListarPropietario";

function App() {


  return (

    <div className="pantalla">
      <NavBar />
      <Routes>
        <Route path='Videofincas/' element={<Login />} />
        <Route path='Videofincas/home' element={<Menu />} />
        <Route path='Videofincas/recibo' element={<Recibo />} />
        <Route path='Videofincas/propietarios' element={<ListarPropietario />} />
        <Route path='Videofincas/propietario' element={<Propietario />} />
        <Route path='Videofincas/finca' element={<Finca />} />
        <Route path='Videofincas/descarga' element={<Descarga />} />
      </Routes>
    </div>

  );
}

export default App;