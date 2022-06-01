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
import { Multas } from './Components/Pages/Tablas/Multas';
import { Prestamo } from './Components/Pages/Tablas/Prestamo';
import { AgregarLibro } from './Components/Layouts/TablasAdmin/TablaLibros/AgregarLibro';



function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/' 
          element={<Login/>}
      

        />
        <Route 
          path='/Home'
          element={<Home/>}

        />
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
        <Route path='/Multas' element={<Multas/>}/>
        <Route path='/Prestamo' element={<Prestamo/>}/>
        <Route path='/AgregarLibro' element={<AgregarLibro/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
