import './App.css';
import '../src/Static/estilos.css';
import '../src/Static/MediaQueries.css';

import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import {
  PrivateRoute,
  PrivateAdminRoute,
  PrivateAdmin,
  PrivateLogin,
  PrivateProfileRoute,
  PrivateHome
} from './PrivateRouters'

import { Home } from './Components/Pages/Home/Home';
import { Login } from './Components/Pages/Login/Login';
import { Admin } from './Components/Pages/Admin/Admin';
import { Email } from './Components/Pages/Email/Email';
import { Perfil } from './Components/Pages/Perfil/Perfil';
import { Historial } from './Components/Pages/Perfil/Historial';
import { Infracciones } from './Components/Pages/Perfil/Infracciones';
import { TLibros } from './Components/Pages/Tablas/TLibros';
import { Estudiantes } from './Components/Pages/Tablas/Estudiantes';
import { Libro } from './Components/Pages/Libro/Libro';
import { Reservas } from './Components/Pages/Tablas/Reservas';
import { Prestamo } from './Components/Pages/Tablas/Prestamo';
import { AgregarLibro } from './Components/Layouts/TablasAdmin/TablaLibros/AgregarLibro';
import { Busqueda } from './Components/Pages/Busqueda/Busqueda';
import { AutoresCategorias } from './Components/Pages/DatosLibros/AutoresCategorias';
import { NuevoEstudiante } from './Components/Layouts/TablasAdmin/TablaEstudiantes/NuevoEstudiante'
import { EditorialIdioma } from './Components/Pages/DatosLibros/EditorialIdioma';
import { Eventos } from './Components/Pages/Eventos/Eventos';
import { TablaEventos } from './Components/Layouts/TablasAdmin/TablaEventos/TablaEventos';
import { TablaBibliotecarios } from './Components/Layouts/TablasAdmin/TablaBibliotecarios/TablaBibliotecarios';
import { NuevoBibliotecario } from './Components/Layouts/TablasAdmin/TablaBibliotecarios/NuevoBibliotecario';
import { InfraccionesAdmin } from './Components/Pages/Tablas/InfraccionesAdmin';
import { Reservados } from './Components/Pages/Perfil/Reservados';
import { Tlibros } from './Components/Pages/Tlibros/Tlibros';
import { Prestados } from './Components/Pages/Perfil/Prestados';
import { Favoritos } from './Components/Pages/Perfil/Favoritos';
import { ImportarEstudiantes } from './Components/Pages/ImportarEstudiantes/ImportarEstudiantes';
import { PerfilBibliotecario } from './Components/Pages/PerfilBibliotecario/PerfilBibliotecario';



function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        
      

        <Route element={PrivateRoute()}>
          <Route path='/Home' element={<Home/>}/>
        </Route>

        <Route element={PrivateAdmin()}>
          <Route path='/Home' element={<Home/>}/>
        </Route>

        <Route element={PrivateAdminRoute()}>
          <Route path='/Admin' element={<Admin/>} />
        </Route>

        <Route element={PrivateProfileRoute()}>
          <Route path='/Perfil' element={<Perfil/>} />
          <Route path='/Favoritos' element={<Favoritos/>}/>
          <Route path='/Historial' element={<Historial/>} />
          <Route path='/Infracciones' element={<Infracciones/>} />
          <Route path='/Reservados' element={<Reservados/>}/>
          <Route path='/Prestados' element={<Prestados/>}/>
        </Route>

        <Route path='/Email' element={<Email/>} />
        <Route path='/TLibros' element={<TLibros/>} />
        <Route path='/TEstudiantes' element={<Estudiantes/>} />
        <Route path='/Libro/:id_libro' element={<Libro/>}/>
        <Route path='/Reservas' element={<Reservas/>}/>
        <Route path='/Prestamo' element={<Prestamo/>}/>
        <Route path='/AgregarLibro' element={<AgregarLibro/>}/>
        <Route path='/Busqueda/:nombre' element={<Busqueda/>}/>
        <Route path='/NuevoEstudiante' element={<NuevoEstudiante/>}/>
        <Route path='/AutoresCategorias' element={<AutoresCategorias/>}/>
        <Route path='/EditorialIdioma' element={<EditorialIdioma/>}/>
        <Route path='/Eventos' element={<Eventos/>}/>
        <Route path='/TEventos' element={<TablaEventos/>}/>
        <Route path='/TBibliotecarios' element={<TablaBibliotecarios/>}/>
        <Route path='/NBibliotecarios' element={<NuevoBibliotecario/>}/>
        <Route path='/TablaInfraciones' element={<InfraccionesAdmin/>}/>
        <Route path='/ImportarEstudiantes' element={<ImportarEstudiantes/>}/>
        <Route path='/PerfilBibliotecario' element={<PerfilBibliotecario/>}/>
        <Route path='/libros' element={<Tlibros/>}/>
        <Route path='/Eventos/:id_evento/' element={<Eventos/>}/>
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
