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
import { useState, useEffect} from "react";
import GetURLAPI from "./utilidades/parametros";
import axios from "./api/axios";
import { Finca } from "./pages/Finca";
import { UpdateFinca } from "./pages/UpdateFinca";
import { ListarRecibo } from "./pages/ListarRecibo";
import { VisualizarRecibo } from "./pages/VisualizarRecibo";
import { AuthProvider } from "./context/AuthProvider";
import { PrivateRoute } from "./router/PrivateRoute";
import { PublicRoute } from "./router/PublicRoute";
import { Registro } from "./pages/Registro";


function App() {

  const [listafincas, setListafincas] = useState([])
  const [propietarios, setPropietarios] = useState([])
  const [recibos, setRecibos] = useState([])
  const [stateAdmin, setStateAdmin] = useState('')

  const getFincas = async (admin) => {

    const data_POST={
      user: admin
    }
    setStateAdmin(admin)
    const url_base = GetURLAPI()
    const resp = await axios.post(url_base + 'finca', data_POST)
    setListafincas(resp.data);
  };

  const getPropietarios = async (admin) => {
   
      console.log(admin)
      const data_POST={
        user: admin
      }
      console.log(data_POST)
      const url_base = GetURLAPI()
      const resp = await axios.post(url_base + 'listar_propietarios', data_POST)
      console.log('RESPPPPPPPPPP', resp)
      setPropietarios(resp.data);
    
  };

  const getRecibos = async () => {
    const url_base = GetURLAPI()
    const resp = await axios.get(url_base + 'recibos')
    setRecibos(resp.data)
  }

   useEffect(() => {
    getFincas();
    getPropietarios();
    getRecibos();
  }, []); 

  return (
    <AuthProvider>

      <div className="pantalla">
        <NavBar />
        <Routes>
          <Route path='Videofincas/registro_admin' element={<Registro />} />
          <Route path='Videofincas/' element={
            <PublicRoute>
              <Login />
            </PublicRoute>} />

          <Route path='/*' element={
            <PrivateRoute>
              <Routes>
                <Route path='Videofincas/home' element={<Menu />} />
                <Route path='Videofincas/recibos' element={<ListarRecibo listafincas={listafincas} getRecibos={getRecibos} recibos={recibos} propietarios={propietarios} />} />
                <Route path='Videofincas/recibo' element={<Recibo listafincas={listafincas} />} />
                <Route path='Videofincas/recibo/:id' element={<VisualizarRecibo recibos={recibos} />} />
                <Route path='Videofincas/propietarios' element={<ListarPropietario listafincas={listafincas} getPropietarios={getPropietarios} propietarios={propietarios} getFincas={getFincas}/>} />
                <Route path='Videofincas/propietarios/:id' element={<UpdatePropietario />} />
                <Route path='Videofincas/propietario' element={<Propietario />} />
                <Route path='Videofincas/fincas' element={<ListarFinca listafincas={listafincas} getFincas={getFincas} setListafincas={setListafincas} />} />
                <Route path='Videofincas/fincas/:id' element={<UpdateFinca />} />
                <Route path='Videofincas/finca' element={<Finca />} />
                <Route path='Videofincas/descarga' element={<Descarga />} />

              </Routes>

            </PrivateRoute>}
          />

        </Routes>
      </div>
    </AuthProvider>


  );
}

export default App;