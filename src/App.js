import './App.css';
import './estilos.css';

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
        <Route path='/Academicos' element={<Academicos/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
