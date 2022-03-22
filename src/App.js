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



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Admin' element={<Admin/>} />
        <Route path='/Email' element={<Email/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
