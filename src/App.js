import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Recibo from './pages/Recibo';
import Propietario from './pages/Propietario';
import ListarFinca from './pages/ListarFinca'
import Menu from "./pages/Menu";
import Descarga from "./pages/Descarga";
import { NavBar } from "./ui/components/NavBar";
import { ListarPropietario } from "./pages/ListarPropietario";
import UpdatePropietario from "./pages/UpdatePropietario";
import { useState, useEffect } from "react";
import GetURLAPI from "./utilidades/parametros";
import axios from "./api/axios";
import { Finca } from "./pages/Finca";
import { UpdateFinca } from "./pages/UpdateFinca";

function App() {

  const [listafincas, setListafincas] = useState([])
  const [propietarios, setPropietarios] = useState([])

  const getFincas = async () => {
      const url_base = GetURLAPI()
      const resp = await axios.get(url_base + 'finca')
      setListafincas(resp.data);
  };

  const getPropietarios = async () => {
    const url_base = GetURLAPI()
    const resp = await axios.get(url_base + 'propietarios')
    console.log(resp.data)
    setPropietarios(resp.data);
};

  useEffect(() => {
      getFincas();
      getPropietarios();
  }, []);

  return (

    <div className="pantalla">
      <NavBar />
      <Routes>
        <Route path='Videofincas/' element={<Login />} />
        <Route path='Videofincas/home' element={<Menu />} />
        <Route path='Videofincas/recibo' element={<Recibo listafincas={listafincas}/>} />
        <Route path='Videofincas/propietarios' element={<ListarPropietario listafincas={listafincas} propietarios={propietarios} getPropietarios={getPropietarios}/>} />
        <Route path='Videofincas/propietarios/:id' element={<UpdatePropietario />} />
        <Route path='Videofincas/propietario' element={<Propietario />} />
        <Route path='Videofincas/fincas' element={<ListarFinca listafincas={listafincas} getFincas={getFincas} setListafincas={setListafincas}/>} />
        <Route path='Videofincas/fincas/:id' element={<UpdateFinca />} />
        <Route path='Videofincas/finca' element={<Finca />} />
        <Route path='Videofincas/descarga' element={<Descarga />} />
      </Routes>
    </div>

  );
}

export default App;