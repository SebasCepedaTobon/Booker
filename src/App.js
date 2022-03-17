import './App.css';
import './estilos.css';

import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import { Home } from './Components/Pages/Home/Home';
import { Login } from './Components/Pages/Login/Login';
import {sitioAdmin} from './Components/Pages/admin/sitioAdmin'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/admin' element={<sitioAdmin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
