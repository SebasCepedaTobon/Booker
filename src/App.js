import './App.css';
import '../src/Static/estilos.css';
import '../src/Static/MediaQueries.css';

import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import { Home } from './Components/Pages/Home/Home';
import { Login } from './Components/Pages/Login/Login';
import { Admin } from './Components/Pages/Admin/Admin';
import { Email } from './Components/Pages/Email/Email';
import { Perfil } from './Components/Pages/Perfil/Perfil';
import { Historial } from './Components/Pages/Perfil/Historial';
import { Infracciones } from './Components/Pages/Perfil/Infracciones';
import { Academicos } from './Components/Pages/Categorias/Academicos';
import { Aventura } from './Components/Pages/Categorias/Aventura';
import { Comedia } from './Components/Pages/Categorias/Comedia';
import { Comics } from './Components/Pages/Categorias/Comics';
import { Infantil } from './Components/Pages/Categorias/Infantil';
import { Novelas } from './Components/Pages/Categorias/Novelas';
import { Terror } from './Components/Pages/Categorias/Terror';
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







function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Admin' element={<Admin/>} />
        <Route path='/Email' element={<Email/>} />
        <Route path='/Perfil' element={<Perfil/>} />
        <Route path='/Historial' element={<Historial/>} />
        <Route path='/Infracciones' element={<Infracciones/>} />
        <Route path='/Academicos' element={<Academicos/>}/>
        <Route path='/Aventura' element={<Aventura/>}/>
        <Route path='/Comedia' element={<Comedia/>}/>
        <Route path='/Comics' element={<Comics/>}/>
        <Route path='/Infantil' element={<Infantil/>}/>
        <Route path='/Novelas' element={<Novelas/>} />
        <Route path='/Terror' element={<Terror/>} />
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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
